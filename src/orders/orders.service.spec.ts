/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/unbound-method */
import type { Response } from 'express';
import { DatabaseService } from '../database/database.service';
import type { AuthRequest } from '../auth/jwt-auth.guard';
import { OrdersService } from './orders.service';

const request = {
  user: { storeId: 3, userId: 9, username: 'tester' },
} as AuthRequest;

function response() {
  const res = {
    status: jest.fn(),
    json: jest.fn(),
  };
  res.status.mockReturnValue(res);
  res.json.mockImplementation((value: unknown) => value);
  return res as unknown as Response & {
    status: jest.Mock;
    json: jest.Mock;
  };
}

describe('OrdersService', () => {
  it('creates an order with batched stock and item writes', async () => {
    const product = {
      Id: 4,
      ItemCode: 'A-1',
      Description: 'Produto A',
      Reference: 'REF-A',
      Cfop: '5102',
      Csosn: '102',
      Ncm: '1234',
      Cst: '00',
      SalePrice: 15,
      StockBalance: 8,
    };
    const order = {
      Id: 20,
      StoreId: 3,
      CreatedByUsername: 'tester',
      CustomerName: null,
      Observations: null,
      Status: 'created',
      TotalAmount: 30,
      CreatedAtUtc: new Date('2026-01-01T00:00:00Z'),
    };
    const client = {
      query: jest
        .fn()
        .mockResolvedValueOnce({ rows: [product] })
        .mockResolvedValueOnce({ rows: [{ ...order, TotalAmount: 0 }] })
        .mockResolvedValueOnce({ rows: [] })
        .mockResolvedValueOnce({ rows: [] })
        .mockResolvedValueOnce({ rows: [order] }),
    };
    const pool = { query: jest.fn().mockResolvedValue({ rows: [] }) };
    const db = {
      pool,
      serializable: jest.fn((work: (value: typeof client) => unknown) =>
        work(client),
      ),
    } as unknown as DatabaseService;
    const res = response();

    await new OrdersService(db).create(
      { items: [{ productId: 4, quantity: 2 }] },
      request,
      res,
    );

    expect(res.status).toHaveBeenCalledWith(201);
    expect(client.query).toHaveBeenCalledTimes(5);
    expect(client.query.mock.calls[2][0]).toContain('jsonb_to_recordset');
    expect(client.query.mock.calls[3][0]).toContain('jsonb_to_recordset');
  });

  it('rejects an order that would make stock negative', async () => {
    const client = {
      query: jest.fn().mockResolvedValue({
        rows: [
          {
            Id: 4,
            ItemCode: 'A-1',
            Description: 'Produto A',
            Reference: 'REF-A',
            Cfop: '5102',
            Csosn: '102',
            Ncm: '1234',
            Cst: '00',
            SalePrice: 15,
            StockBalance: 1,
          },
        ],
      }),
    };
    const db = {
      pool: { query: jest.fn() },
      serializable: jest.fn((work: (value: typeof client) => unknown) =>
        work(client),
      ),
    } as unknown as DatabaseService;
    const res = response();

    await new OrdersService(db).create(
      { items: [{ productId: 4, quantity: 2 }] },
      request,
      res,
    );

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Estoque insuficiente para Produto A. Disponivel: 1.',
    });
    expect(client.query).toHaveBeenCalledTimes(1);
  });
});
