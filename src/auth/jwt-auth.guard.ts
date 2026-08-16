import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import * as jwt from 'jsonwebtoken';

export interface CurrentUser {
  userId: number;
  username: string;
  storeId: number;
  storeName: string;
  role: string;
}
export type AuthRequest = Request & { user?: CurrentUser };

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const token = request.headers.authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
    if (!token) throw new UnauthorizedException();
    try {
      const payload = jwt.verify(token, jwtKey(), {
        issuer: process.env.Jwt__Issuer ?? process.env['Jwt:Issuer'],
        audience: process.env.Jwt__Audience ?? process.env['Jwt:Audience'],
      }) as jwt.JwtPayload;
      const userId = Number(payload.userId ?? payload.sub),
        storeId = Number(payload.storeId);
      const username = String(payload.unique_name ?? payload.name ?? '');
      if (!Number.isInteger(userId) || !Number.isInteger(storeId) || !username)
        throw new Error('invalid claims');
      request.user = {
        userId,
        storeId,
        username,
        storeName: String(payload.storeName ?? ''),
        role: String(payload.role ?? ''),
      };
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}

export function jwtKey(): string {
  const key = process.env.Jwt__Key ?? process.env['Jwt:Key'];
  if (!key) throw new Error('Jwt:Key is not configured.');
  if (Buffer.byteLength(key) < 32)
    throw new Error('Jwt:Key must be at least 32 bytes.');
  return key;
}
