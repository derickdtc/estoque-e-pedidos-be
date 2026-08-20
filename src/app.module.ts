import { Module } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { AuthController } from './auth/auth.controller';
import { StoresController } from './stores/stores.controller';
import { ProductsController } from './products/products.controller';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ProductImagesService } from './products/product-images.service';
import { ProductsService } from './products/products.service';
import { PrismaService } from './database/prisma.service';

@Module({
  controllers: [
    AuthController,
    StoresController,
    ProductsController,
    OrdersController,
  ],
  providers: [
    DatabaseService,
    PrismaService,
    JwtAuthGuard,
    ProductImagesService,
    ProductsService,
    OrdersService,
  ],
})
export class AppModule {}
