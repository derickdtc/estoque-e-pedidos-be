import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { AuthRequest } from '../auth/jwt-auth.guard';
import { OrdersService } from './orders.service';
import type { OrderRequest } from './orders.service';

@Controller('api/orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}
  @Get() list(
    @Req() req: AuthRequest,
    @Query('customerName') customerName: string | undefined,
    @Query('startDate') startDate: string | undefined,
    @Query('endDate') endDate: string | undefined,
    @Query('orderIds') orderIds: string | undefined,
    @Res() res: Response,
  ) {
    return this.orders.list(
      req,
      customerName,
      startDate,
      endDate,
      orderIds,
      res,
    );
  }
  @Get('paged') paged(
    @Req() req: AuthRequest,
    @Query('customerName') customerName: string | undefined,
    @Query('startDate') startDate: string | undefined,
    @Query('endDate') endDate: string | undefined,
    @Query('orderIds') orderIds: string | undefined,
    @Query('page') page = '1',
    @Query('pageSize') pageSize = '50',
    @Res() res: Response,
  ) {
    return this.orders.paged(
      req,
      customerName,
      startDate,
      endDate,
      orderIds,
      page,
      pageSize,
      res,
    );
  }
  @Post() create(
    @Body() body: OrderRequest,
    @Req() req: AuthRequest,
    @Res() res: Response,
  ) {
    return this.orders.create(body, req, res);
  }
  @Put(':id') update(
    @Param('id') id: string,
    @Body() body: OrderRequest,
    @Req() req: AuthRequest,
    @Res() res: Response,
  ) {
    return this.orders.update(id, body, req, res);
  }
  @Post(':id/edit') edit(
    @Param('id') id: string,
    @Req() req: AuthRequest,
    @Res() res: Response,
  ) {
    return this.orders.edit(id, req, res);
  }
  @Delete() remove(
    @Body() body: { orderIds?: number[] },
    @Req() req: AuthRequest,
    @Res() res: Response,
  ) {
    return this.orders.remove(body, req, res);
  }
  @Get(':id') byId(
    @Param('id') id: string,
    @Req() req: AuthRequest,
    @Res() res: Response,
  ) {
    return this.orders.byId(id, req, res);
  }
}
