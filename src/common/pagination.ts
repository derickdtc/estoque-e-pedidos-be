import { PoolClient, QueryResultRow } from 'pg';

export const normalize = (value?: string | null) => value?.trim() || null;
export const required = (value?: string | null) => value?.trim() || '';
export const invalidPage = (page: number, pageSize: number) =>
  page < 1
    ? 'O parametro page deve ser maior ou igual a 1.'
    : pageSize < 1 || pageSize > 100
      ? 'O parametro pageSize deve estar entre 1 e 100.'
      : page > Math.floor(2147483647 / pageSize) + 1
        ? 'A combinacao de page e pageSize e muito grande.'
        : null;
export const pages = (count: number, size: number) =>
  count === 0 ? 0 : Math.ceil(count / size);
export const responseDate = (value: Date | string) =>
  new Date(value).toISOString();
export async function rows<T extends QueryResultRow>(
  db: PoolClient,
  sql: string,
  parameters: unknown[] = [],
) {
  return (await db.query<T>(sql, parameters)).rows;
}
