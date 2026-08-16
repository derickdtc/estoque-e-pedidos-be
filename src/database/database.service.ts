import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Pool, PoolClient, QueryResultRow } from 'pg';
import * as bcrypt from 'bcrypt';

function databaseUrl(): string {
  const value =
    process.env.ConnectionStrings__DefaultConnection ??
    process.env['ConnectionStrings:DefaultConnection'] ??
    process.env.DATABASE_PRIVATE_URL ??
    process.env.DATABASE_URL;
  if (!value)
    throw new Error(
      'Database connection is not configured. Set ConnectionStrings__DefaultConnection or DATABASE_URL.',
    );
  try {
    const parsed = new URL(value);
    if (
      parsed.username.toUpperCase() === 'USER' ||
      parsed.password.toUpperCase() === 'PASSWORD' ||
      parsed.hostname.toUpperCase() === 'HOST' ||
      parsed.pathname.toUpperCase() === '/DATABASE'
    )
      throw new Error(
        'Database connection still contains placeholders from .env.example. Set DATABASE_URL to the real PostgreSQL connection string.',
      );
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith('Database connection')
    )
      throw error;
    throw new Error(
      'DATABASE_URL must be a valid PostgreSQL connection string.',
    );
  }
  return value;
}

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  readonly pool = new Pool({ connectionString: databaseUrl() });
  async onModuleInit() {
    await this.pool.query('SELECT 1');
    await this.seed();
  }
  async onModuleDestroy() {
    await this.pool.end();
  }
  query<T extends QueryResultRow = QueryResultRow>(
    text: string,
    values?: unknown[],
  ) {
    return this.pool.query<T>(text, values);
  }
  async transaction<T>(work: (client: PoolClient) => Promise<T>) {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN ISOLATION LEVEL SERIALIZABLE');
      const result = await work(client);
      await client.query('COMMIT');
      return result;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
  private async seed() {
    const username =
        process.env.SeedUser__Username ?? process.env['SeedUser:Username'],
      password =
        process.env.SeedUser__Password ?? process.env['SeedUser:Password'];
    if (!username || !password) return;
    const normalized = username.trim().toUpperCase();
    let user = (
      await this.query<{ Id: number; PasswordHash: string }>(
        'SELECT "Id", "PasswordHash" FROM users WHERE "UsernameNormalized"=$1 LIMIT 1',
        [normalized],
      )
    ).rows[0];
    if (!user)
      user = (
        await this.query<{ Id: number; PasswordHash: string }>(
          'INSERT INTO users ("Username","UsernameNormalized","PasswordHash","IsActive","CreatedAtUtc") VALUES ($1,$2,$3,TRUE,NOW()) RETURNING "Id","PasswordHash"',
          [username.trim(), normalized, await bcrypt.hash(password, 11)],
        )
      ).rows[0];
    else if (
      (
        process.env.SeedUser__ResetPasswordOnStartup ??
        process.env['SeedUser:ResetPasswordOnStartup']
      )?.toLowerCase() === 'true' &&
      !(await bcrypt.compare(password, user.PasswordHash).catch(() => false))
    )
      await this.query('UPDATE users SET "PasswordHash"=$1 WHERE "Id"=$2', [
        await bcrypt.hash(password, 11),
        user.Id,
      ]);
    const linked = await this.query(
      'SELECT 1 FROM store_users WHERE "UserId"=$1 LIMIT 1',
      [user.Id],
    );
    if (!linked.rowCount) {
      let store = (
        await this.query<{ Id: number }>(
          'SELECT "Id" FROM stores ORDER BY "Id" LIMIT 1',
        )
      ).rows[0];
      if (!store)
        store = (
          await this.query<{ Id: number }>(
            'INSERT INTO stores ("Name","IsActive","CreatedAtUtc") VALUES ($1,TRUE,NOW()) RETURNING "Id"',
            ['Loja Principal'],
          )
        ).rows[0];
      await this.query(
        'INSERT INTO store_users ("StoreId","UserId","Role","IsActive","CreatedAtUtc") VALUES ($1,$2,$3,TRUE,NOW())',
        [store.Id, user.Id, 'Owner'],
      );
    }
  }
}
