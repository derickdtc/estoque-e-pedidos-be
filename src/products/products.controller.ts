import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import * as XLSX from 'xlsx';
import { DatabaseService } from '../database/database.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { AuthRequest } from '../auth/jwt-auth.guard';
import { invalidPage, normalize, pages, required } from '../common/pagination';
import {
  ProductImageError,
  ProductImagesService,
} from './product-images.service';

export type Product = {
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
type ProductInput = Partial<{
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
const fields: Array<[keyof ProductInput, string, number]> = [
  ['itemCode', 'codigo', 80],
  ['description', 'descricao', 260],
  ['cfop', 'CFOP', 20],
  ['csosn', 'CSOSN', 20],
  ['ncm', 'NCM', 30],
  ['cst', 'CST', 20],
  ['reference', 'referencia', 80],
];

@Controller('api/products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(
    private readonly db: DatabaseService,
    private readonly images: ProductImagesService,
  ) {}

  @Get()
  async list(@Req() request: AuthRequest, @Query('search') search?: string) {
    return this.find(request.user!.storeId, search);
  }
  @Get('paged')
  async paged(
    @Req() request: AuthRequest,
    @Query('search') search: string | undefined,
    @Query('page') pageRaw = '1',
    @Query('pageSize') sizeRaw = '50',
    @Res() res: Response,
  ) {
    const page = Number(pageRaw),
      pageSize = Number(sizeRaw),
      error = invalidPage(page, pageSize);
    if (error) return res.status(400).json({ message: error });
    const { where, params } = this.searchWhere(request.user!.storeId, search);
    const total = Number(
      (
        await this.db.query<{ count: string }>(
          `SELECT COUNT(*)::text AS count FROM products ${where}`,
          params,
        )
      ).rows[0].count,
    );
    const list = (
      await this.db.query<Product>(
        `SELECT * FROM products ${where} ORDER BY "Description", "Id" OFFSET $${params.length + 1} LIMIT $${params.length + 2}`,
        [...params, (page - 1) * pageSize, pageSize],
      )
    ).rows.map(this.output);
    return res.json({
      page,
      pageSize,
      totalCount: total,
      totalPages: pages(total, pageSize),
      items: list,
    });
  }
  @Get(':id')
  async byId(
    @Param('id') id: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    const product = await this.get(Number(id), request.user!.storeId);
    return product ? res.json(this.output(product)) : res.status(404).send();
  }

  @Post()
  async create(
    @Body() body: ProductInput,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    if (!body)
      return res.status(400).json({ message: 'Informe os dados do produto.' });
    const error = this.validate(body, true);
    if (error) return res.status(400).json({ message: error });
    const storeId = request.user!.storeId,
      itemCode = required(body.itemCode);
    if (
      (
        await this.db.query(
          'SELECT 1 FROM products WHERE "StoreId"=$1 AND "ItemCode"=$2',
          [storeId, itemCode],
        )
      ).rowCount
    )
      return res
        .status(400)
        .json({ message: 'Ja existe um produto com este codigo nesta loja.' });
    const product = (
      await this.db.query<Product>(
        'INSERT INTO products ("StoreId","ItemCode","Description","PurchasePrice","SalePrice","StockBalance","Cfop","Csosn","Ncm","Cst","Reference","ImageUrl1","ImageKey1","ImageUrl2","ImageKey2","CreatedAtUtc") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,NOW()) RETURNING *',
        [
          storeId,
          itemCode,
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
      )
    ).rows[0];
    return res.status(201).json(this.output(product));
  }

  @Put(':id')
  @Patch(':id')
  @Put(':id/sale-price')
  @Patch(':id/sale-price')
  async update(
    @Param('id') rawId: string,
    @Body() body: ProductInput,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    if (!body)
      return res.status(400).json({ message: 'Informe os dados do produto.' });
    const error = this.validate(body, false);
    if (error) return res.status(400).json({ message: error });
    const id = Number(rawId),
      storeId = request.user!.storeId,
      product = await this.get(id, storeId);
    if (!product)
      return res.status(404).json({ message: 'Produto nao encontrado.' });
    const itemCode =
      body.itemCode === undefined ? product.ItemCode : required(body.itemCode);
    if (
      body.itemCode !== undefined &&
      (
        await this.db.query(
          'SELECT 1 FROM products WHERE "StoreId"=$1 AND "Id"<>$2 AND "ItemCode"=$3',
          [storeId, id, itemCode],
        )
      ).rowCount
    )
      return res
        .status(400)
        .json({ message: 'Ja existe um produto com este codigo nesta loja.' });
    const next = (key: keyof ProductInput, old: unknown) =>
      body[key] === undefined
        ? old
        : typeof body[key] === 'string' &&
            ['imageUrl1', 'imageKey1', 'imageUrl2', 'imageKey2'].includes(key)
          ? normalize(body[key])
          : body[key];
    const updated = (
      await this.db.query<Product>(
        'UPDATE products SET "ItemCode"=$1,"Description"=$2,"PurchasePrice"=$3,"SalePrice"=$4,"StockBalance"=$5,"Cfop"=$6,"Csosn"=$7,"Ncm"=$8,"Cst"=$9,"Reference"=$10,"ImageUrl1"=$11,"ImageKey1"=$12,"ImageUrl2"=$13,"ImageKey2"=$14,"UpdatedAtUtc"=NOW() WHERE "Id"=$15 RETURNING *',
        [
          itemCode,
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
        ],
      )
    ).rows[0];
    return res.json(this.output(updated));
  }

  @Delete(':id')
  async remove(
    @Param('id') rawId: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    const product = await this.get(Number(rawId), request.user!.storeId);
    if (!product)
      return res.status(404).json({ message: 'Produto nao encontrado.' });
    await this.db.query('DELETE FROM products WHERE "Id"=$1', [product.Id]);
    return res.status(204).send();
  }

  @Post(':productId/images/:slot')
  @UseInterceptors(
    FileInterceptor('file', { limits: { fileSize: 6 * 1024 * 1024 } }),
  )
  async upload(
    @Param('productId') pid: string,
    @Param('slot') slotRaw: string,
    @UploadedFile() file: Express.Multer.File | undefined,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    try {
      const updated = await this.images.upload(
        request.user!.storeId,
        Number(pid),
        Number(slotRaw),
        file,
      );
      return res.json(this.output(updated));
    } catch (error) {
      if (error instanceof ProductImageError)
        return res.status(error.status).json({ message: error.message });
      return res
        .status(500)
        .json({ message: 'Nao foi possivel enviar a imagem do produto.' });
    }
  }
  @Delete(':productId/images/:slot')
  async deleteImage(
    @Param('productId') pid: string,
    @Param('slot') slotRaw: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    try {
      const updated = await this.images.delete(
        request.user!.storeId,
        Number(pid),
        Number(slotRaw),
      );
      return res.json(this.output(updated));
    } catch (error) {
      if (error instanceof ProductImageError)
        return res.status(error.status).json({ message: error.message });
      return res
        .status(500)
        .json({ message: 'Nao foi possivel remover a imagem do produto.' });
    }
  }

  @Post('import')
  @UseInterceptors(
    FileInterceptor('file', { limits: { fileSize: 10_000_000 } }),
  )
  async import(
    @UploadedFile() file: Express.Multer.File | undefined,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    if (!file?.size)
      return res
        .status(400)
        .json({ message: 'Envie uma planilha .xlsx com o estoque.' });
    if (!file.originalname.toLowerCase().endsWith('.xlsx'))
      return res
        .status(400)
        .json({ message: 'O arquivo precisa estar no formato .xlsx.' });
    const parsed = this.readSpreadsheet(file.buffer);
    if (!parsed.products.length)
      return res.status(400).json({
        message: 'Nenhum produto valido foi encontrado na planilha.',
        warnings: parsed.warnings,
      });
    const storeId = request.user!.storeId;
    const replaced = await this.db.transaction(async (client) => {
      const count = Number(
        (
          await client.query<{ count: string }>(
            'SELECT COUNT(*)::text AS count FROM products WHERE "StoreId"=$1',
            [storeId],
          )
        ).rows[0].count,
      );
      await client.query('DELETE FROM products WHERE "StoreId"=$1', [storeId]);
      for (const p of parsed.products)
        await client.query(
          'INSERT INTO products ("StoreId","ItemCode","Description","PurchasePrice","SalePrice","StockBalance","Cfop","Csosn","Ncm","Cst","Reference","CreatedAtUtc") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,NOW())',
          [
            storeId,
            p.itemCode,
            p.description,
            p.purchasePrice,
            p.salePrice,
            p.stockBalance,
            p.cfop,
            p.csosn,
            p.ncm,
            p.cst,
            p.reference,
          ],
        );
      return count;
    });
    return res.json({
      imported: parsed.products.length,
      replaced,
      skipped: parsed.skipped,
      warnings: parsed.warnings.slice(0, 20),
    });
  }

  private async find(storeId: number, search?: string) {
    const { where, params } = this.searchWhere(storeId, search);
    return (
      await this.db.query<Product>(
        `SELECT * FROM products ${where} ORDER BY "Description", "Id"`,
        params,
      )
    ).rows.map(this.output);
  }
  private searchWhere(storeId: number, search?: string) {
    const params: unknown[] = [storeId];
    let where = 'WHERE "StoreId"=$1';
    if (search?.trim()) {
      params.push(`%${search.trim()}%`);
      where += ` AND ("Description" ILIKE $2 OR "ItemCode" ILIKE $2 OR "Reference" ILIKE $2 OR "Cfop" ILIKE $2 OR "Csosn" ILIKE $2 OR "Ncm" ILIKE $2 OR "Cst" ILIKE $2)`;
    }
    return { where, params };
  }
  private async get(id: number, storeId: number) {
    return (
      await this.db.query<Product>(
        'SELECT * FROM products WHERE "Id"=$1 AND "StoreId"=$2 LIMIT 1',
        [id, storeId],
      )
    ).rows[0];
  }
  private output = (p: Product) => ({
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
      (!(typeof input.stockBalance === 'number') || input.stockBalance < 0)
    )
      return 'O saldo de estoque deve ser maior ou igual a zero.';
    for (const [key, label, max] of [
      ['imageUrl1', 'URL da imagem 1', 2048],
      ['imageKey1', 'chave da imagem 1', 512],
      ['imageUrl2', 'URL da imagem 2', 2048],
      ['imageKey2', 'chave da imagem 2', 512],
    ] as const)
      if (normalize(input[key]) && normalize(input[key])!.length > max)
        return `O campo ${label} deve ter no maximo ${max} caracteres.`;
    return null;
  }
  private readSpreadsheet(buffer: Buffer) {
    const sheet = XLSX.read(buffer, { type: 'buffer' }).Sheets[
      XLSX.read(buffer, { type: 'buffer' }).SheetNames[0]
    ];
    const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
      defval: '',
    });
    const aliases: Record<string, string> = {
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
    const clean = (s: unknown) =>
      text(s)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
    const number = (s: unknown) =>
      Number(
        text(s)
          .replace('R$', '')
          .trim()
          .replace(/\.(?=.*,)/g, '')
          .replace(',', '.'),
      ) || 0;
    const products = new Map<string, Record<string, unknown>>(),
      warnings: string[] = [];
    let skipped = 0;
    raw.forEach((row, index) => {
      const p: Record<string, unknown> = {};
      Object.entries(row).forEach(([k, v]) => {
        if (aliases[clean(k)]) p[aliases[clean(k)]] = v;
      });
      const code = required(text(p.itemCode)).replace(/\.0+$/, '');
      const description = required(text(p.description)).replace(/\s+/g, ' ');
      if (!code && !description) return;
      if (!code) {
        skipped++;
        if (warnings.length < 20)
          warnings.push(`Linha ${index + 2}: produto sem codigo foi ignorado.`);
        return;
      }
      if (!description) {
        skipped++;
        if (warnings.length < 20)
          warnings.push(
            `Linha ${index + 2}: produto ${code} sem descricao foi ignorado.`,
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
        purchasePrice: number(p.purchasePrice),
        salePrice: number(p.salePrice),
        stockBalance: Math.trunc(number(p.stockBalance)),
        cfop: required(text(p.cfop)),
        csosn: required(text(p.csosn)),
        ncm: required(text(p.ncm)),
        cst: required(text(p.cst)),
        reference: required(text(p.reference)),
      });
    });
    return {
      products: [...products.values()].sort((a, b) =>
        String(a.description).localeCompare(String(b.description)),
      ),
      skipped,
      warnings,
    };
  }
}
