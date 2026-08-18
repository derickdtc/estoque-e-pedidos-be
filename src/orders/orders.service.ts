import {
  Body,
  Injectable,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { PoolClient } from 'pg';
import { DatabaseService } from '../database/database.service';
import type { AuthRequest } from '../auth/jwt-auth.guard';
import {
  invalidPage,
  normalize,
  pages,
  responseDate,
} from '../common/pagination';

type Product = {
  Id: number;
  ItemCode: string;
  Description: string;
  Reference: string;
  Cfop: string;
  Csosn: string;
  Ncm: string;
  Cst: string;
  SalePrice: number;
  StockBalance: number;
};
type Item = {
  Id: number;
  OrderId: number;
  ProductId: number | null;
  ProductItemCode: string;
  ProductDescription: string;
  ProductReference: string;
  Cfop: string;
  Csosn: string;
  Ncm: string;
  Cst: string;
  Quantity: number;
  SalePrice: number;
  LineTotal: number;
};
type Order = {
  Id: number;
  StoreId: number;
  CreatedByUsername: string;
  CustomerName: string | null;
  Observations: string | null;
  Status: string;
  TotalAmount: number;
  CreatedAtUtc: Date;
};
export type OrderRequest = {
  customerName?: string;
  observations?: string;
  items?: Array<{ productId?: number; quantity?: number; salePrice?: number }>;
};

@Injectable()
export class OrdersService {
  constructor(private readonly db: DatabaseService) {}

  @Get()
  async list(
    @Req() request: AuthRequest,
    @Query('customerName') customerName?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('orderIds') orderIds?: string,
    @Res() res?: Response,
  ) {
    const filter = this.filters(
      request.user!.storeId,
      customerName,
      startDate,
      endDate,
      orderIds,
    );
    if (typeof filter === 'string')
      return res!.status(400).json({ message: filter });
    const orders = (
      await this.db.query<Order>(
        `SELECT * FROM orders ${filter.where} ORDER BY "CreatedAtUtc" DESC, "Id" DESC`,
        filter.values,
      )
    ).rows;
    return res!.json(await this.outputs(this.db.pool, orders));
  }
  @Get('paged')
  async paged(
    @Req() request: AuthRequest,
    @Query('customerName') customerName: string | undefined,
    @Query('startDate') startDate: string | undefined,
    @Query('endDate') endDate: string | undefined,
    @Query('orderIds') orderIds: string | undefined,
    @Query('page') rawPage = '1',
    @Query('pageSize') rawSize = '50',
    @Res() res: Response,
  ) {
    const page = Number(rawPage),
      pageSize = Number(rawSize),
      pageError = invalidPage(page, pageSize);
    if (pageError) return res.status(400).json({ message: pageError });
    const filter = this.filters(
      request.user!.storeId,
      customerName,
      startDate,
      endDate,
      orderIds,
    );
    if (typeof filter === 'string')
      return res.status(400).json({ message: filter });
    const [totalResult, ordersResult] = await Promise.all([
      this.db.query<{ count: string }>(
        `SELECT COUNT(*)::text AS count FROM orders ${filter.where}`,
        filter.values,
      ),
      this.db.query<Order>(
        `SELECT * FROM orders ${filter.where} ORDER BY "CreatedAtUtc" DESC,"Id" DESC OFFSET $${filter.values.length + 1} LIMIT $${filter.values.length + 2}`,
        [...filter.values, (page - 1) * pageSize, pageSize],
      ),
    ]);
    const total = Number(totalResult.rows[0].count);
    const orders = ordersResult.rows;
    return res.json({
      page,
      pageSize,
      totalCount: total,
      totalPages: pages(total, pageSize),
      items: await this.outputs(this.db.pool, orders),
    });
  }
  @Post()
  async create(
    @Body() body: OrderRequest,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    const checked = this.validate(body);
    if (typeof checked === 'string')
      return res.status(400).json({ message: checked });
    const customerName = normalize(body.customerName),
      observations = normalize(body.observations);
    if (customerName && customerName.length > 120)
      return res.status(400).json({
        message: 'O nome do cliente deve ter no maximo 120 caracteres.',
      });
    if (observations && observations.length > 1000)
      return res.status(400).json({
        message: 'As observacoes devem ter no maximo 1000 caracteres.',
      });
    const order = await this.db.transaction(async (client) => {
      const ids = checked.map((i) => i.productId);
      const products = (
        await client.query<Product>(
          'SELECT * FROM products WHERE "StoreId"=$1 AND "Id" = ANY($2::int[])',
          [request.user!.storeId, ids],
        )
      ).rows;
      const map = new Map(products.map((p) => [p.Id, p]));
      const created = (
        await client.query<Order>(
          'INSERT INTO orders ("StoreId","CreatedByUserId","CreatedByUsername","CustomerName","Observations","Status","TotalAmount","CreatedAtUtc") VALUES ($1,$2,$3,$4,$5,$6,0,NOW()) RETURNING *',
          [
            request.user!.storeId,
            request.user!.userId,
            request.user!.username,
            customerName,
            observations,
            'created',
          ],
        )
      ).rows[0];
      let total = 0;
      for (const input of checked) {
        const p = map.get(input.productId);
        if (!p)
          throw new BusinessError(
            'Um dos produtos selecionados nao esta disponivel.',
          );
        const price = input.salePrice ?? Number(p.SalePrice),
          line = input.quantity * price;
        await client.query(
          'UPDATE products SET "StockBalance"="StockBalance"-$1,"UpdatedAtUtc"=NOW() WHERE "Id"=$2',
          [input.quantity, p.Id],
        );
        await this.insertItem(
          client,
          created.Id,
          p,
          input.quantity,
          price,
          line,
        );
        total += line;
      }
      return (
        await client.query<Order>(
          'UPDATE orders SET "TotalAmount"=$1 WHERE "Id"=$2 RETURNING *',
          [total, created.Id],
        )
      ).rows[0];
    });
    return res.status(201).json(await this.output(this.db.pool, order));
  }
  @Put(':id')
  async update(
    @Param('id') rawId: string,
    @Body() body: OrderRequest,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    if (!body)
      return res
        .status(400)
        .json({ message: 'Selecione pelo menos um produto.' });
    const checked = this.validate(body);
    if (typeof checked === 'string')
      return res.status(400).json({ message: checked });
    const customerName = normalize(body.customerName),
      observations = normalize(body.observations);
    if (customerName && customerName.length > 120)
      return res.status(400).json({
        message: 'O nome do cliente deve ter no maximo 120 caracteres.',
      });
    if (observations && observations.length > 1000)
      return res.status(400).json({
        message: 'As observacoes devem ter no maximo 1000 caracteres.',
      });
    try {
      const order = await this.db.transaction(async (client) => {
        const id = Number(rawId),
          storeId = request.user!.storeId;
        const order = (
          await client.query<Order>(
            'SELECT * FROM orders WHERE "Id"=$1 AND "StoreId"=$2 FOR UPDATE',
            [id, storeId],
          )
        ).rows[0];
        if (!order) throw new BusinessError('Pedido nao encontrado.', 404);
        if (order.Status.toLowerCase() !== 'created')
          throw new BusinessError('Este pedido nao pode mais ser editado.');
        const old = (
          await client.query<Item>(
            'SELECT * FROM order_items WHERE "OrderId"=$1',
            [id],
          )
        ).rows;
        const allIds = [
          ...new Set([
            ...checked.map((x) => x.productId),
            ...old.flatMap((x) => (x.ProductId ? [x.ProductId] : [])),
          ]),
        ];
        const products = (
          await client.query<Product>(
            'SELECT * FROM products WHERE "StoreId"=$1 AND "Id"=ANY($2::int[]) FOR UPDATE',
            [storeId, allIds],
          )
        ).rows;
        const map = new Map(products.map((p) => [p.Id, p]));
        const oldQty = new Map<number, number>();
        for (const item of old) {
          let pid = item.ProductId;
          if (!pid) {
            pid =
              products.find(
                (p) =>
                  p.ItemCode.toLowerCase() ===
                  item.ProductItemCode.toLowerCase(),
              )?.Id ?? null;
            if (!pid)
              throw new BusinessError(
                `Nao foi possivel localizar o produto antigo ${item.ProductItemCode} para editar o pedido.`,
              );
          }
          oldQty.set(pid, (oldQty.get(pid) ?? 0) + item.Quantity);
        }
        const missing = checked
          .filter((x) => !map.has(x.productId))
          .map((x) => x.productId)
          .sort((a, b) => a - b);
        if (missing.length)
          throw new BusinessError(
            'Um ou mais produtos selecionados nao existem.',
            400,
            { productIds: missing },
          );
        const requested = new Map(
          checked.map((x) => [x.productId, x.quantity]),
        );
        for (const pid of new Set([...oldQty.keys(), ...requested.keys()])) {
          const delta = (requested.get(pid) ?? 0) - (oldQty.get(pid) ?? 0),
            product = map.get(pid);
          if (!product)
            throw new BusinessError(
              `Produto ${pid} nao encontrado para ajustar estoque.`,
            );
          if (delta > 0 && product.StockBalance < delta)
            throw new BusinessError(
              `Estoque insuficiente para ${product.Description}. Disponivel: ${product.StockBalance}. Necessario adicional: ${delta}.`,
            );
          if (delta)
            await client.query(
              'UPDATE products SET "StockBalance"="StockBalance"-$1,"UpdatedAtUtc"=NOW() WHERE "Id"=$2',
              [delta, pid],
            );
        }
        await client.query('DELETE FROM order_items WHERE "OrderId"=$1', [id]);
        let total = 0;
        for (const input of checked) {
          const p = map.get(input.productId)!;
          const price = input.salePrice ?? Number(p.SalePrice),
            line = input.quantity * price;
          await this.insertItem(client, id, p, input.quantity, price, line);
          total += line;
        }
        return (
          await client.query<Order>(
            'UPDATE orders SET "CustomerName"=$1,"Observations"=$2,"TotalAmount"=$3 WHERE "Id"=$4 RETURNING *',
            [customerName, observations, total, id],
          )
        ).rows[0];
      });
      return res.json(await this.output(this.db.pool, order));
    } catch (error) {
      return this.catchBusiness(res, error);
    }
  }
  @Post(':id/edit')
  async edit(
    @Param('id') rawId: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    try {
      const order = await this.db.transaction(async (client) => {
        const found = (
          await client.query<Order>(
            'SELECT * FROM orders WHERE "Id"=$1 AND "StoreId"=$2 FOR UPDATE',
            [Number(rawId), request.user!.storeId],
          )
        ).rows[0];
        if (!found) throw new BusinessError('Pedido nao encontrado.', 404);
        if (found.Status.toLowerCase() !== 'created')
          throw new BusinessError('Este pedido nao pode mais ser editado.');
        await this.restore(client, found.Id, request.user!.storeId);
        return (
          await client.query<Order>(
            'UPDATE orders SET "Status"=$1 WHERE "Id"=$2 RETURNING *',
            ['editing', found.Id],
          )
        ).rows[0];
      });
      return res.json(await this.output(this.db.pool, order));
    } catch (error) {
      return this.catchBusiness(res, error);
    }
  }
  @Delete()
  async remove(
    @Body() body: { orderIds?: number[] },
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    const input = body?.orderIds;
    if (!input?.length)
      return res
        .status(400)
        .json({ message: 'Informe pelo menos um pedido para excluir.' });
    const ids = [...new Set(input.filter((x) => Number.isInteger(x) && x > 0))];
    if (ids.length !== input.length)
      return res.status(400).json({
        message: 'A lista de pedidos contem ids invalidos ou repetidos.',
      });
    try {
      await this.db.transaction(async (client) => {
        const orders = (
          await client.query<Order>(
            'SELECT * FROM orders WHERE "StoreId"=$1 AND "Id"=ANY($2::int[]) FOR UPDATE',
            [request.user!.storeId, ids],
          )
        ).rows;
        if (orders.length !== ids.length)
          throw new BusinessError(
            'Um ou mais pedidos nao foram encontrados.',
            404,
          );
        const blocked = orders
          .filter((o) => o.Status.toLowerCase() !== 'created')
          .map((o) => o.Id)
          .sort((a, b) => a - b);
        if (blocked.length)
          throw new BusinessError(
            'Um ou mais pedidos nao podem ser excluidos.',
            400,
            { orderIds: blocked },
          );
        for (const order of orders)
          await this.restore(client, order.Id, request.user!.storeId);
        await client.query(
          'UPDATE orders SET "Status"=$1 WHERE "Id"=ANY($2::int[])',
          ['deleted', ids],
        );
      });
      return res.json({ deleted: ids.length, orderIds: ids });
    } catch (error) {
      return this.catchBusiness(res, error);
    }
  }
  @Get(':id')
  async byId(
    @Param('id') rawId: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    const order = (
      await this.db.query<Order>(
        'SELECT * FROM orders WHERE "Id"=$1 AND "StoreId"=$2 LIMIT 1',
        [Number(rawId), request.user!.storeId],
      )
    ).rows[0];
    return order
      ? res.json(await this.output(this.db.pool, order))
      : res.status(404).send();
  }

  private filters(
    storeId: number,
    customerName?: string,
    startDate?: string,
    endDate?: string,
    orderIds?: string,
  ) {
    const values: unknown[] = [storeId, 'created'],
      or: string[] = [];
    if (normalize(customerName)) {
      values.push(`%${normalize(customerName)}%`);
      or.push(`"CustomerName" ILIKE $${values.length}`);
    }
    if (orderIds?.trim()) {
      const parsed = orderIds.split(',').filter(Boolean).map(Number);
      if (!parsed.length || parsed.some((x) => !Number.isInteger(x) || x <= 0))
        return 'A lista orderIds deve conter apenas numeros positivos separados por virgula.';
      values.push([...new Set(parsed)]);
      or.push(`"Id"=ANY($${values.length}::int[])`);
    }
    const start = startDate ? new Date(`${startDate}T00:00:00.000Z`) : null,
      end = endDate ? new Date(`${endDate}T00:00:00.000Z`) : null;
    if (
      (startDate && !Number.isFinite(start!.getTime())) ||
      (endDate && !Number.isFinite(end!.getTime())) ||
      (start && end && start >= new Date(end.getTime() + 86400000))
    )
      return 'A data inicial deve ser menor ou igual a data final.';
    if (start || end) {
      if (start) {
        values.push(start);
      }
      const a = start ? `"CreatedAtUtc">=$${values.length}` : 'TRUE';
      if (end) {
        values.push(new Date(end.getTime() + 86400000));
      }
      const b = end ? `"CreatedAtUtc"<$${values.length}` : 'TRUE';
      or.push(`(${a} AND ${b})`);
    }
    return {
      where: `WHERE "StoreId"=$1 AND "Status"=$2${or.length ? ` AND (${or.join(' OR ')})` : ''}`,
      values,
    };
  }
  private validate(
    body: OrderRequest,
  ):
    | Array<{ productId: number; quantity: number; salePrice?: number }>
    | string {
    if (!body?.items?.length) return 'Selecione pelo menos um produto.';
    for (const item of body.items) {
      if (
        item.salePrice !== undefined &&
        (!Number.isFinite(item.salePrice) || item.salePrice <= 0)
      )
        return 'O preco de venda do item deve ser maior que zero.';
    }
    const valid = body.items.filter(
      (x) => Number.isInteger(x.quantity) && x.quantity! > 0,
    );
    if (!valid.length) return 'Informe uma quantidade valida.';
    const by = new Map<
      number,
      { productId: number; quantity: number; salePrice?: number }
    >();
    for (const item of valid) {
      if (!Number.isInteger(item.productId)) continue;
      const old = by.get(item.productId!);
      if (
        old &&
        old.salePrice !== item.salePrice &&
        old.salePrice !== undefined &&
        item.salePrice !== undefined
      )
        return 'Nao envie o mesmo produto com precos de venda diferentes no mesmo pedido.';
      by.set(item.productId!, {
        productId: item.productId!,
        quantity: (old?.quantity ?? 0) + item.quantity!,
        salePrice: item.salePrice ?? old?.salePrice,
      });
    }
    return [...by.values()];
  }
  private async insertItem(
    client: PoolClient,
    orderId: number,
    p: Product,
    quantity: number,
    price: number,
    line: number,
  ) {
    await client.query(
      'INSERT INTO order_items ("OrderId","ProductId","ProductItemCode","ProductDescription","ProductReference","Cfop","Csosn","Ncm","Cst","Quantity","SalePrice","LineTotal") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)',
      [
        orderId,
        p.Id,
        p.ItemCode,
        p.Description,
        p.Reference,
        p.Cfop,
        p.Csosn,
        p.Ncm,
        p.Cst,
        quantity,
        price,
        line,
      ],
    );
  }
  private async restore(client: PoolClient, orderId: number, storeId: number) {
    const items = (
      await client.query<Item>('SELECT * FROM order_items WHERE "OrderId"=$1', [
        orderId,
      ])
    ).rows;
    for (const item of items) {
      let product = (
        await client.query<Product>(
          'SELECT * FROM products WHERE "StoreId"=$1 AND "Id"=$2 FOR UPDATE',
          [storeId, item.ProductId],
        )
      ).rows[0];
      if (!product)
        product = (
          await client.query<Product>(
            'SELECT * FROM products WHERE "StoreId"=$1 AND LOWER("ItemCode")=LOWER($2) FOR UPDATE',
            [storeId, item.ProductItemCode],
          )
        ).rows[0];
      if (!product)
        throw new BusinessError(
          `Nao foi possivel devolver ao estoque o produto ${item.ProductItemCode}.`,
        );
      if (item.ProductId !== product.Id)
        await client.query(
          'UPDATE order_items SET "ProductId"=$1 WHERE "Id"=$2',
          [product.Id, item.Id],
        );
      await client.query(
        'UPDATE products SET "StockBalance"="StockBalance"+$1,"UpdatedAtUtc"=NOW() WHERE "Id"=$2',
        [item.Quantity, product.Id],
      );
    }
  }
  private async output(client: { query: PoolClient['query'] }, order: Order) {
    const items = await this.itemsForOrders(client, [order.Id]);
    return this.outputWithItems(order, items.get(order.Id) ?? []);
  }
  private async itemsForOrders(
    client: { query: PoolClient['query'] },
    orderIds: number[],
  ) {
    const items = (
      await client.query<Item>(
        'SELECT * FROM order_items WHERE "OrderId"=ANY($1::int[]) ORDER BY "OrderId", "ProductDescription"',
        [orderIds],
      )
    ).rows;
    const byOrderId = new Map<number, Item[]>();
    for (const item of items) {
      const orderItems = byOrderId.get(item.OrderId) ?? [];
      orderItems.push(item);
      byOrderId.set(item.OrderId, orderItems);
    }
    return byOrderId;
  }
  private outputWithItems(order: Order, items: Item[]) {
    return {
      id: order.Id,
      createdAtUtc: responseDate(order.CreatedAtUtc),
      createdByUsername: order.CreatedByUsername,
      customerName: order.CustomerName,
      observations: order.Observations,
      status: order.Status,
      totalAmount: Number(order.TotalAmount),
      itemsCount: items.reduce((n, x) => n + x.Quantity, 0),
      items: items.map((i) => ({
        productId: i.ProductId,
        productItemCode: i.ProductItemCode,
        productDescription: i.ProductDescription,
        productReference: i.ProductReference,
        cfop: i.Cfop,
        csosn: i.Csosn,
        ncm: i.Ncm,
        cst: i.Cst,
        quantity: i.Quantity,
        salePrice: Number(i.SalePrice),
        lineTotal: Number(i.LineTotal),
      })),
    };
  }
  private async outputs(
    client: { query: PoolClient['query'] },
    orders: Order[],
  ) {
    if (!orders.length) return [];
    const items = await this.itemsForOrders(
      client,
      orders.map((order) => order.Id),
    );
    return orders.map((order) =>
      this.outputWithItems(order, items.get(order.Id) ?? []),
    );
  }
  private catchBusiness(res: Response, error: unknown) {
    if (error instanceof BusinessError)
      return res
        .status(error.status)
        .json({ message: error.message, ...error.extra });
    throw error;
  }
}
class BusinessError extends Error {
  constructor(
    message: string,
    readonly status = 400,
    readonly extra: Record<string, unknown> = {},
  ) {
    super(message);
  }
}
