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
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { AuthRequest } from '../auth/jwt-auth.guard';
import { invalidPage } from '../common/pagination';
import {
  ProductImageError,
  ProductImagesService,
} from './product-images.service';
import {
  ProductError,
  ProductsService,
  type ProductInput,
} from './products.service';

@Controller('api/products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(
    private readonly products: ProductsService,
    private readonly images: ProductImagesService,
  ) {}

  @Get()
  list(@Req() request: AuthRequest, @Query('search') search?: string) {
    return this.products.list(request.user!.storeId, search);
  }

  @Get('paged')
  async paged(
    @Req() request: AuthRequest,
    @Query('search') search: string | undefined,
    @Query('page') pageRaw = '1',
    @Query('pageSize') sizeRaw = '50',
    @Res() res: Response,
  ) {
    const page = Number(pageRaw);
    const pageSize = Number(sizeRaw);
    const error = invalidPage(page, pageSize);
    if (error) return res.status(400).json({ message: error });
    return res.json(
      await this.products.paged(request.user!.storeId, search, page, pageSize),
    );
  }

  @Get(':id')
  async byId(
    @Param('id') id: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    return this.respond(res, () =>
      this.products.byId(Number(id), request.user!.storeId),
    );
  }

  @Post()
  async create(
    @Body() body: ProductInput,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    return this.respond(
      res,
      () => this.products.create(request.user!.storeId, body),
      201,
    );
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
    return this.respond(res, () =>
      this.products.update(Number(rawId), request.user!.storeId, body),
    );
  }

  @Delete(':id')
  async remove(
    @Param('id') rawId: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    return this.respond(
      res,
      () => this.products.remove(Number(rawId), request.user!.storeId),
      204,
    );
  }

  @Post(':productId/images/:slot')
  @UseInterceptors(
    FileInterceptor('file', { limits: { fileSize: 5 * 1024 * 1024 } }),
  )
  async upload(
    @Param('productId') productId: string,
    @Param('slot') slot: string,
    @UploadedFile() file: Express.Multer.File | undefined,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    return this.respondImage(res, async () => {
      const product = await this.images.upload(
        request.user!.storeId,
        Number(productId),
        Number(slot),
        file,
      );
      return this.products.toResponse(product);
    });
  }

  @Delete(':productId/images/:slot')
  async deleteImage(
    @Param('productId') productId: string,
    @Param('slot') slot: string,
    @Req() request: AuthRequest,
    @Res() res: Response,
  ) {
    return this.respondImage(res, async () => {
      const product = await this.images.delete(
        request.user!.storeId,
        Number(productId),
        Number(slot),
      );
      return this.products.toResponse(product);
    });
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
    return this.respond(res, () =>
      this.products.import(request.user!.storeId, file),
    );
  }

  private async respond(
    res: Response,
    work: () => Promise<unknown>,
    status = 200,
  ) {
    try {
      const result = await work();
      return status === 204
        ? res.status(status).send()
        : res.status(status).json(result);
    } catch (error) {
      if (error instanceof ProductError)
        return res
          .status(error.status)
          .json({ message: error.message, ...error.extra });
      throw error;
    }
  }

  private async respondImage(res: Response, work: () => Promise<unknown>) {
    try {
      return res.json(await work());
    } catch (error) {
      if (error instanceof ProductImageError)
        return res.status(error.status).json({ message: error.message });
      return res
        .status(500)
        .json({ message: 'Nao foi possivel processar a imagem do produto.' });
    }
  }
}
