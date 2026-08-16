import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { DatabaseService } from '../database/database.service';
import { JwtAuthGuard, jwtKey } from './jwt-auth.guard';
import type { AuthRequest } from './jwt-auth.guard';
import { normalize, responseDate } from '../common/pagination';

type LoginRequest = {
  username?: string;
  password?: string;
  rememberMe?: boolean;
};
type RegisterRequest = {
  email?: string;
  storeName?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
};
type UserRow = {
  Id: number;
  Username: string;
  UsernameNormalized: string;
  PasswordHash: string;
  IsActive: boolean;
};
type StoreRow = { Id: number; Name: string; IsActive: boolean };

@Controller('api/auth')
export class AuthController {
  constructor(private readonly db: DatabaseService) {}

  @Post('register')
  async register(@Body() request: RegisterRequest, @Res() res: Response) {
    const username = normalize(request?.username),
      storeName = normalize(request?.storeName),
      email = normalize(request?.email);
    if (!username)
      return res.status(400).json({ message: 'Informe o usuario.' });
    if (!storeName) return res.status(400).json({ message: 'Informe a loja.' });
    if (!request?.password?.trim())
      return res.status(400).json({ message: 'Informe a senha.' });
    if (request.password !== request.confirmPassword)
      return res
        .status(400)
        .json({ message: 'A confirmacao de senha nao confere.' });
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ message: 'Informe um e-mail valido.' });
    const normalizedUsername = username.toUpperCase();
    const exists = await this.db.query(
      'SELECT 1 FROM users WHERE "UsernameNormalized" = $1',
      [normalizedUsername],
    );
    if (exists.rowCount)
      return res.status(409).json({ message: 'Usuario ja cadastrado.' });
    const store = (
      await this.db.query<StoreRow>(
        'SELECT "Id", "Name", "IsActive" FROM stores WHERE "Name" = $1 AND "IsActive" = TRUE LIMIT 1',
        [storeName],
      )
    ).rows[0];
    if (!store)
      return res.status(400).json({
        message:
          'Loja nao encontrada. Informe o nome exatamente como cadastrado.',
      });
    const user = (
      await this.db.query<UserRow>(
        'INSERT INTO users ("Username", "UsernameNormalized", "Email", "PasswordHash", "IsActive", "CreatedAtUtc") VALUES ($1,$2,$3,$4,TRUE,NOW()) RETURNING "Id", "Username", "UsernameNormalized", "PasswordHash", "IsActive"',
        [
          username,
          normalizedUsername,
          email,
          await bcrypt.hash(request.password, 11),
        ],
      )
    ).rows[0];
    await this.db.query(
      'INSERT INTO store_users ("StoreId", "UserId", "Role", "IsActive", "CreatedAtUtc") VALUES ($1,$2,$3,TRUE,NOW())',
      [store.Id, user.Id, 'Owner'],
    );
    return res
      .status(201)
      .json(this.userResponse(user.Id, user.Username, store));
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() request: LoginRequest, @Res() res: Response) {
    if (!request?.username?.trim() || !request?.password?.trim())
      return res.status(400).json({ message: 'Informe usuario e senha.' });
    const user = (
      await this.db.query<UserRow>(
        'SELECT "Id", "Username", "UsernameNormalized", "PasswordHash", "IsActive" FROM users WHERE "UsernameNormalized" = $1 AND "IsActive" = TRUE LIMIT 1',
        [request.username.trim().toUpperCase()],
      )
    ).rows[0];
    if (
      !user ||
      !(await bcrypt
        .compare(request.password, user.PasswordHash)
        .catch(() => false))
    )
      return res.status(401).json({ message: 'Usuario ou senha invalidos.' });
    const membership = (
      await this.db.query<{ StoreId: number; Role: string; Name: string }>(
        'SELECT su."StoreId", su."Role", s."Name" FROM store_users su JOIN stores s ON s."Id" = su."StoreId" WHERE su."UserId" = $1 AND su."IsActive" = TRUE AND s."IsActive" = TRUE ORDER BY su."Id" LIMIT 1',
        [user.Id],
      )
    ).rows[0];
    if (!membership)
      return res.status(401).json({ message: 'Usuario sem loja vinculada.' });
    await this.db.query(
      'UPDATE users SET "LastLoginAtUtc" = NOW() WHERE "Id" = $1',
      [user.Id],
    );
    const expiresAt = new Date(
      Date.now() + (request.rememberMe ? 30 * 24 : 8) * 60 * 60 * 1000,
    );
    const token = jwt.sign(
      {
        sub: String(user.Id),
        unique_name: user.Username,
        userId: String(user.Id),
        storeId: String(membership.StoreId),
        storeName: membership.Name,
        role: membership.Role,
      },
      jwtKey(),
      {
        algorithm: 'HS256',
        issuer: process.env.Jwt__Issuer ?? process.env['Jwt:Issuer'],
        audience: process.env.Jwt__Audience ?? process.env['Jwt:Audience'],
        expiresIn: Math.floor((expiresAt.getTime() - Date.now()) / 1000),
      },
    );
    return res.json({
      token,
      expiresAtUtc: responseDate(expiresAt),
      user: this.userResponse(user.Id, user.Username, {
        Id: membership.StoreId,
        Name: membership.Name,
        IsActive: true,
      }),
    });
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@Req() request: AuthRequest, @Res() res: Response) {
    const current = request.user!;
    const membership = (
      await this.db.query<{ Name: string }>(
        'SELECT s."Name" FROM store_users su JOIN users u ON u."Id"=su."UserId" JOIN stores s ON s."Id"=su."StoreId" WHERE su."UserId"=$1 AND su."StoreId"=$2 AND u."IsActive"=TRUE AND su."IsActive"=TRUE AND s."IsActive"=TRUE LIMIT 1',
        [current.userId, current.storeId],
      )
    ).rows[0];
    if (!membership) return res.status(401).send();
    return res.json(
      this.userResponse(current.userId, current.username, {
        Id: current.storeId,
        Name: membership.Name,
        IsActive: true,
      }),
    );
  }

  private userResponse(id: number, username: string, store: StoreRow) {
    return {
      id,
      username,
      storeName: store.Name,
      store: { name: store.Name, displayName: store.Name },
    };
  }
}
