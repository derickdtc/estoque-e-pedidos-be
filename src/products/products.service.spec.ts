/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument */
import * as XLSX from 'xlsx';
import { DatabaseService } from '../database/database.service';
import { ProductError, ProductsService } from './products.service';

describe('ProductsService', () => {
  it('imports the spreadsheet with one bulk insert', async () => {
    const client = {
      query: jest
        .fn()
        .mockResolvedValueOnce({ rows: [{ count: '2' }] })
        .mockResolvedValue({ rows: [], rowCount: 0 }),
    };
    const db = {
      transaction: jest.fn((work: (value: typeof client) => unknown) =>
        work(client),
      ),
    } as unknown as DatabaseService;
    const worksheet = XLSX.utils.json_to_sheet([
      {
        codigo: 'A-1',
        descricao: 'Produto A',
        'preco de compra': '10,50',
        'preco de venda': '15,90',
        estoque: 4,
        cfop: '5102',
        csosn: '102',
        ncm: '1234',
        cst: '00',
        referencia: 'REF-A',
      },
      {
        codigo: 'B-2',
        descricao: 'Produto B',
        'preco de compra': 20,
        'preco de venda': 30,
        estoque: 7,
        cfop: '5102',
        csosn: '102',
        ncm: '5678',
        cst: '00',
        referencia: 'REF-B',
      },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Produtos');
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    const result = await new ProductsService(db).import(7, {
      size: buffer.length,
      originalname: 'produtos.xlsx',
      buffer,
    } as Express.Multer.File);

    expect(result).toMatchObject({ imported: 2, replaced: 2, skipped: 0 });
    expect(client.query).toHaveBeenCalledTimes(4);
    const bulkInsert = client.query.mock.calls[3];
    expect(bulkInsert[0]).toContain('jsonb_to_recordset');
    expect(JSON.parse(bulkInsert[1][1])).toHaveLength(2);
  });

  it('maps the unique constraint violation to a conflict', async () => {
    const db = {
      query: jest.fn().mockRejectedValue({ code: '23505' }),
    } as unknown as DatabaseService;
    const service = new ProductsService(db);

    await expect(
      service.create(1, {
        itemCode: 'A-1',
        description: 'Produto A',
        purchasePrice: 10,
        salePrice: 15,
        stockBalance: 1,
        cfop: '5102',
        csosn: '102',
        ncm: '1234',
        cst: '00',
        reference: 'REF-A',
      }),
    ).rejects.toMatchObject<ProductError>({
      status: 409,
      message: 'Ja existe um produto com este codigo nesta loja.',
    });
  });
});
