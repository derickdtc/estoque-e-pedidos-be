import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';
import { DatabaseService } from '../database/database.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { AuthRequest } from '../auth/jwt-auth.guard';
import { normalize, responseDate } from '../common/pagination';

type Store = {
  Id: number;
  Name: string;
  Cnpj: string | null;
  Phone: string | null;
  Address: string | null;
  IsActive: boolean;
  CreatedAtUtc: Date;
};

@Controller('api/stores')
export class StoresController {
  constructor(private readonly db: DatabaseService) {}

  @Post('register')
  async register(@Body() body: { name?: string }, @Res() res: Response) {
    const name = normalize(body?.name);
    if (!name)
      return res.status(400).json({ message: 'Informe o nome da loja.' });
    if (
      (await this.db.query('SELECT 1 FROM stores WHERE "Name" = $1', [name]))
        .rowCount
    )
      return res.status(409).json({ message: 'Loja ja cadastrada.' });
    const store = (
      await this.db.query<Store>(
        'INSERT INTO stores ("Name", "IsActive", "CreatedAtUtc") VALUES ($1,TRUE,NOW()) RETURNING *',
        [name],
      )
    ).rows[0];
    return res.status(201).json(this.output(store, 'Owner'));
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  async mine(@Req() request: AuthRequest) {
    const values = (
      await this.db.query<Store & { Role: string }>(
        'SELECT s.*, su."Role" FROM store_users su JOIN stores s ON s."Id"=su."StoreId" WHERE su."UserId"=$1 AND su."IsActive"=TRUE AND s."IsActive"=TRUE ORDER BY s."Name"',
        [request.user!.userId],
      )
    ).rows;
    return values.map((store) => this.output(store, store.Role));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body()
    body: { name?: string; cnpj?: string; phone?: string; address?: string },
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    const name = normalize(body?.name);
    if (!name)
      return res.status(400).json({ message: 'Informe o nome da loja.' });
    const output = await this.db.transaction(async (client) => {
      const store = (
        await client.query<Store>(
          'INSERT INTO stores ("Name", "Cnpj", "Phone", "Address", "IsActive", "CreatedAtUtc") VALUES ($1,$2,$3,$4,TRUE,NOW()) RETURNING *',
          [
            name,
            normalize(body.cnpj),
            normalize(body.phone),
            normalize(body.address),
          ],
        )
      ).rows[0];
      await client.query(
        'INSERT INTO store_users ("StoreId", "UserId", "Role", "IsActive", "CreatedAtUtc") VALUES ($1,$2,$3,TRUE,NOW())',
        [store.Id, request.user!.userId, 'Owner'],
      );
      return this.output(store, 'Owner');
    });
    return res.status(201).json(output);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Req() request: AuthRequest,
    @Res() res: Response,
    @Body()
    body: {
      name?: string;
      cnpj?: string;
      phone?: string;
      address?: string;
      isActive?: boolean;
    },
  ) {
    const id = Number(request.params.id),
      userId = request.user!.userId;
    const found = (
      await this.db.query<Store & { Role: string }>(
        'SELECT s.*, su."Role" FROM store_users su JOIN stores s ON s."Id"=su."StoreId" WHERE su."UserId"=$1 AND su."StoreId"=$2 LIMIT 1',
        [userId, id],
      )
    ).rows[0];
    if (!found)
      return res.status(404).json({ message: 'Loja nao encontrada.' });
    if (!['owner', 'admin'].includes(found.Role.toLowerCase()))
      return res.status(403).json({ message: 'Permissao insuficiente.' });
    const name = normalize(body.name);
    if (body.name !== undefined && !name)
      return res.status(400).json({ message: 'Informe o nome da loja.' });
    const store = (
      await this.db.query<Store>(
        'UPDATE stores SET "Name"=$1,"Cnpj"=$2,"Phone"=$3,"Address"=$4,"IsActive"=$5 WHERE "Id"=$6 RETURNING *',
        [
          name ?? found.Name,
          normalize(body.cnpj),
          normalize(body.phone),
          normalize(body.address),
          body.isActive ?? found.IsActive,
          id,
        ],
      )
    ).rows[0];
    return res.json(this.output(store, found.Role));
  }

  private output(store: Store, role: string) {
    return {
      id: store.Id,
      name: store.Name,
      cnpj: store.Cnpj,
      phone: store.Phone,
      address: store.Address,
      isActive: store.IsActive,
      role,
      createdAtUtc: responseDate(store.CreatedAtUtc),
    };
  }
}
