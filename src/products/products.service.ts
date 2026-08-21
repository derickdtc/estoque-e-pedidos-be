import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { DatabaseService } from '../database/database.service';
import { normalize, pages, required } from '../common/pagination';

export type ProductRow = {
  Id: number;
  StoreId: number;
  ItemCode: string;
  Description: string;
  PurchasePrice: number;
  SalePrice: number;
  StockBalance: number;
  Cfop: string;
  Csosn: string;
  Ncm: string;
  Cst: string;
  Reference: string;
  ImageUrl1: string | null;
  ImageKey1: string | null;
  ImageUrl2: string | null;
  ImageKey2: string | null;
};

export type ProductInput = Partial<{
  itemCode: string;
  description: string;
  purchasePrice: number;
  salePrice: number;
  stockBalance: number;
  cfop: string;
  csosn: string;
  ncm: string;
  cst: string;
  reference: string;
  imageUrl1: string;
  imageKey1: string;
  imageUrl2: string;
  imageKey2: string;
}>;

type ImportedProduct = {
  itemCode: string;
  description: string;
  purchasePrice: number;
  salePrice: number;
  stockBalance: number;
  cfop: string;
  csosn: string;
  ncm: string;
  cst: string;
  reference: string;
};

const fields: Array<[keyof ProductInput, string, number]> = [
  ['itemCode', 'codigo', 80],
  ['description', 'descricao', 260],
  ['cfop', 'CFOP', 20],
  ['csosn', 'CSOSN', 20],
  ['ncm', 'NCM', 30],
  ['cst', 'CST', 20],
  ['reference', 'referencia', 80],
];

export class ProductError extends Error {
  constructor(
    readonly status: number,
    message: string,
    readonly extra: Record<string, unknown> = {},
  ) {
    super(message);
  }
}

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}

  async list(storeId: number, search?: string) {
    const { where, params } = this.searchWhere(storeId, search);
    const products = await this.db.query<ProductRow>(
      `SELECT * FROM products ${where} ORDER BY "Description", "Id"`,
      params,
    );
    return products.rows.map(this.output);
  }

  async paged(
    storeId: number,
    search: string | undefined,
    page: number,
    pageSize: number,
  ) {
    const { where, params } = this.searchWhere(storeId, search);
    const [totalResult, listResult] = await Promise.all([
      this.db.query<{ count: string }>(
        `SELECT COUNT(*)::text AS count FROM products ${where}`,
        params,
      ),
      this.db.query<ProductRow>(
        `SELECT * FROM products ${where} ORDER BY "Description", "Id" OFFSET $${params.length + 1} LIMIT $${params.length + 2}`,
        [...params, (page - 1) * pageSize, pageSize],
      ),
    ]);
    const total = Number(totalResult.rows[0].count);
    return {
      page,
      pageSize,
      totalCount: total,
      totalPages: pages(total, pageSize),
      items: listResult.rows.map(this.output),
    };
  }

  async byId(id: number, storeId: number) {
    this.assertId(id);
    const product = await this.get(id, storeId);
    if (!product) throw new ProductError(404, 'Produto nao encontrado.');
    return this.output(product);
  }

  async create(storeId: number, body: ProductInput) {
    if (!body) throw new ProductError(400, 'Informe os dados do produto.');
    const error = this.validate(body, true);
    if (error) throw new ProductError(400, error);
    try {
      const product = await this.db.query<ProductRow>(
        'INSERT INTO products ("StoreId","ItemCode","Description","PurchasePrice","SalePrice","StockBalance","Cfop","Csosn","Ncm","Cst","Reference","ImageUrl1","ImageKey1","ImageUrl2","ImageKey2","CreatedAtUtc") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,NOW()) RETURNING *',
        [
          storeId,
          required(body.itemCode),
          required(body.description),
          body.purchasePrice,
          body.salePrice,
          body.stockBalance,
          required(body.cfop),
          required(body.csosn),
          required(body.ncm),
          required(body.cst),
          required(body.reference),
          normalize(body.imageUrl1),
          normalize(body.imageKey1),
          normalize(body.imageUrl2),
          normalize(body.imageKey2),
        ],
      );
      return this.output(product.rows[0]);
    } catch (error) {
      this.rethrowDuplicate(error);
    }
  }

  async update(id: number, storeId: number, body: ProductInput) {
    this.assertId(id);
    if (!body) throw new ProductError(400, 'Informe os dados do produto.');
    const error = this.validate(body, false);
    if (error) throw new ProductError(400, error);
    const product = await this.get(id, storeId);
    if (!product) throw new ProductError(404, 'Produto nao encontrado.');
    const next = (key: keyof ProductInput, old: unknown) =>
      body[key] === undefined
        ? old
        : typeof body[key] === 'string' &&
            ['imageUrl1', 'imageKey1', 'imageUrl2', 'imageKey2'].includes(key)
          ? normalize(body[key])
          : body[key];
    try {
      const updated = await this.db.query<ProductRow>(
        'UPDATE products SET "ItemCode"=$1,"Description"=$2,"PurchasePrice"=$3,"SalePrice"=$4,"StockBalance"=$5,"Cfop"=$6,"Csosn"=$7,"Ncm"=$8,"Cst"=$9,"Reference"=$10,"ImageUrl1"=$11,"ImageKey1"=$12,"ImageUrl2"=$13,"ImageKey2"=$14,"UpdatedAtUtc"=NOW() WHERE "Id"=$15 AND "StoreId"=$16 RETURNING *',
        [
          body.itemCode === undefined
            ? product.ItemCode
            : required(body.itemCode),
          next('description', product.Description),
          next('purchasePrice', product.PurchasePrice),
          next('salePrice', product.SalePrice),
          next('stockBalance', product.StockBalance),
          next('cfop', product.Cfop),
          next('csosn', product.Csosn),
          next('ncm', product.Ncm),
          next('cst', product.Cst),
          next('reference', product.Reference),
          next('imageUrl1', product.ImageUrl1),
          next('imageKey1', product.ImageKey1),
          next('imageUrl2', product.ImageUrl2),
          next('imageKey2', product.ImageKey2),
          id,
          storeId,
        ],
      );
      return this.output(updated.rows[0]);
    } catch (error) {
      this.rethrowDuplicate(error);
    }
  }

  async remove(id: number, storeId: number) {
    this.assertId(id);
    const result = await this.db.query(
      'DELETE FROM products WHERE "Id"=$1 AND "StoreId"=$2',
      [id, storeId],
    );
    if (!result.rowCount)
      throw new ProductError(404, 'Produto nao encontrado.');
  }

  async import(storeId: number, file: Express.Multer.File | undefined) {
    if (!file?.size)
      throw new ProductError(400, 'Envie uma planilha .xlsx com o estoque.');
    if (!file.originalname.toLowerCase().endsWith('.xlsx'))
      throw new ProductError(400, 'O arquivo precisa estar no formato .xlsx.');
    const parsed = this.readSpreadsheet(file.buffer);
    if (!parsed.products.length)
      throw new ProductError(
        400,
        'Nenhum produto valido foi encontrado na planilha.',
        { warnings: parsed.warnings },
      );
    const replaced = await this.db.transaction(async (client) => {
      const countResult = await client.query<{ count: string }>(
        'SELECT COUNT(*)::text AS count FROM products WHERE "StoreId"=$1',
        [storeId],
      );
      await client.query(
        `UPDATE order_items AS i SET "ProductId"=NULL
         FROM products AS p
         WHERE i."ProductId"=p."Id" AND p."StoreId"=$1`,
        [storeId],
      );
      await client.query('DELETE FROM products WHERE "StoreId"=$1', [storeId]);
      await client.query(
        `INSERT INTO products ("StoreId","ItemCode","Description","PurchasePrice","SalePrice","StockBalance","Cfop","Csosn","Ncm","Cst","Reference","CreatedAtUtc")
         SELECT $1,x."itemCode",x."description",x."purchasePrice",x."salePrice",x."stockBalance",x."cfop",x."csosn",x."ncm",x."cst",x."reference",NOW()
         FROM jsonb_to_recordset($2::jsonb) AS x("itemCode" text,"description" text,"purchasePrice" double precision,"salePrice" double precision,"stockBalance" integer,"cfop" text,"csosn" text,"ncm" text,"cst" text,"reference" text)`,
        [storeId, JSON.stringify(parsed.products)],
      );
      return Number(countResult.rows[0].count);
    });
    return {
      imported: parsed.products.length,
      replaced,
      skipped: parsed.skipped,
      warnings: parsed.warnings.slice(0, 20),
    };
  }

  toResponse(product: ProductRow) {
    return this.output(product);
  }

  private searchWhere(storeId: number, search?: string) {
    const params: unknown[] = [storeId];
    let where = 'WHERE "StoreId"=$1';
    if (search?.trim()) {
      params.push(`%${search.trim()}%`);
      where += ` AND ("Description" || ' ' || "ItemCode" || ' ' || "Reference" || ' ' || "Cfop" || ' ' || "Csosn" || ' ' || "Ncm" || ' ' || "Cst") ILIKE $2`;
    }
    return { where, params };
  }

  private async get(id: number, storeId: number) {
    const result = await this.db.query<ProductRow>(
      'SELECT * FROM products WHERE "Id"=$1 AND "StoreId"=$2 LIMIT 1',
      [id, storeId],
    );
    return result.rows[0];
  }

  private output = (p: ProductRow) => ({
    id: p.Id,
    itemCode: p.ItemCode,
    description: p.Description,
    purchasePrice: Number(p.PurchasePrice),
    salePrice: Number(p.SalePrice),
    stockBalance: p.StockBalance,
    cfop: p.Cfop,
    csosn: p.Csosn,
    ncm: p.Ncm,
    cst: p.Cst,
    reference: p.Reference,
    imageUrl1: p.ImageUrl1,
    imageKey1: p.ImageKey1,
    imageUrl2: p.ImageUrl2,
    imageKey2: p.ImageKey2,
  });

  private validate(input: ProductInput, create: boolean) {
    for (const [key, label, max] of fields) {
      if (create || input[key] !== undefined) {
        const value = normalize(input[key] as string);
        if (!value) return `Informe o campo ${label}.`;
        if (value.length > max)
          return `O campo ${label} deve ter no maximo ${max} caracteres.`;
      }
    }
    for (const [key, label] of [
      ['purchasePrice', 'preco de compra'],
      ['salePrice', 'preco de venda'],
    ] as const) {
      const value = input[key];
      if (
        (create || value !== undefined) &&
        (!(typeof value === 'number') || !Number.isFinite(value) || value <= 0)
      )
        return `O campo ${label} deve ser maior que zero.`;
    }
    if (
      (create || input.stockBalance !== undefined) &&
      (!(typeof input.stockBalance === 'number') ||
        !Number.isInteger(input.stockBalance) ||
        input.stockBalance < 0)
    )
      return 'O saldo de estoque deve ser um inteiro maior ou igual a zero.';
    for (const [key, label, max] of [
      ['imageUrl1', 'URL da imagem 1', 2048],
      ['imageKey1', 'chave da imagem 1', 512],
      ['imageUrl2', 'URL da imagem 2', 2048],
      ['imageKey2', 'chave da imagem 2', 512],
    ] as const) {
      const value = normalize(input[key]);
      if (value && value.length > max)
        return `O campo ${label} deve ter no maximo ${max} caracteres.`;
    }
    return null;
  }

  private readSpreadsheet(buffer: Buffer) {
    let workbook: XLSX.WorkBook;
    try {
      workbook = XLSX.read(buffer, { type: 'buffer' });
    } catch {
      throw new ProductError(400, 'Nao foi possivel ler a planilha enviada.');
    }
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    if (!sheet)
      throw new ProductError(400, 'A planilha nao possui abas validas.');
    const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
      defval: '',
    });
    const aliases: Record<string, keyof ImportedProduct> = {
      codigo: 'itemCode',
      codigodoitem: 'itemCode',
      coditem: 'itemCode',
      item: 'itemCode',
      descricao: 'description',
      descrio: 'description',
      descrica: 'description',
      desc: 'description',
      precodecompra: 'purchasePrice',
      precocompra: 'purchasePrice',
      pocompra: 'purchasePrice',
      pcompra: 'purchasePrice',
      precodevenda: 'salePrice',
      precovenda: 'salePrice',
      povenda: 'salePrice',
      pvenda: 'salePrice',
      saldodeitens: 'stockBalance',
      saldo: 'stockBalance',
      estoque: 'stockBalance',
      quantidade: 'stockBalance',
      cfop: 'cfop',
      csosn: 'csosn',
      ncm: 'ncm',
      cst: 'cst',
      referencia: 'reference',
      referncia: 'reference',
      refer: 'reference',
    };
    const text = (value: unknown) =>
      typeof value === 'string' || typeof value === 'number'
        ? String(value)
        : '';
    const clean = (value: unknown) =>
      text(value)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
    const number = (value: unknown) =>
      Number(
        text(value)
          .replace('R$', '')
          .trim()
          .replace(/\.(?=.*,)/g, '')
          .replace(',', '.'),
      ) || 0;
    const products = new Map<string, ImportedProduct>();
    const warnings: string[] = [];
    let skipped = 0;
    raw.forEach((row, index) => {
      const values: Partial<Record<keyof ImportedProduct, unknown>> = {};
      for (const [key, value] of Object.entries(row)) {
        const alias = aliases[clean(key)];
        if (alias) values[alias] = value;
      }
      const code = required(text(values.itemCode)).replace(/\.0+$/, '');
      const description = required(text(values.description)).replace(
        /\s+/g,
        ' ',
      );
      if (!code && !description) return;
      if (!code || !description) {
        skipped++;
        if (warnings.length < 20)
          warnings.push(
            !code
              ? `Linha ${index + 2}: produto sem codigo foi ignorado.`
              : `Linha ${index + 2}: produto ${code} sem descricao foi ignorado.`,
          );
        return;
      }
      if (products.has(code) && warnings.length < 20)
        warnings.push(
          `Linha ${index + 2}: codigo ${code} repetido; mantive a ultima ocorrencia.`,
        );
      products.set(code, {
        itemCode: code,
        description,
        purchasePrice: number(values.purchasePrice),
        salePrice: number(values.salePrice),
        stockBalance: Math.trunc(number(values.stockBalance)),
        cfop: required(text(values.cfop)),
        csosn: required(text(values.csosn)),
        ncm: required(text(values.ncm)),
        cst: required(text(values.cst)),
        reference: required(text(values.reference)),
      });
    });
    return {
      products: [...products.values()].sort((a, b) =>
        a.description.localeCompare(b.description),
      ),
      skipped,
      warnings,
    };
  }

  private assertId(id: number) {
    if (!Number.isInteger(id) || id <= 0)
      throw new ProductError(
        400,
        'O id do produto deve ser um inteiro positivo.',
      );
  }

  private rethrowDuplicate(error: unknown): never {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      error.code === '23505'
    )
      throw new ProductError(
        409,
        'Ja existe um produto com este codigo nesta loja.',
      );
    throw error;
  }
}
