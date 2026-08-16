import { Injectable } from '@nestjs/common';
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import type { Express } from 'express';
import { DatabaseService } from '../database/database.service';
import type { Product } from './products.controller';

type ProductImageRow = Product;

export class ProductImageError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

@Injectable()
export class ProductImagesService {
  constructor(private readonly db: DatabaseService) {}

  async upload(
    storeId: number,
    productId: number,
    slot: number,
    file: Express.Multer.File | undefined,
  ) {
    this.assertSlot(slot);
    this.assertFile(file);
    const product = await this.product(productId, storeId);
    const { key, url } = await this.put(storeId, product.Id, slot, file!);
    const previousKey = slot === 1 ? product.ImageKey1 : product.ImageKey2;
    const columns =
      slot === 1 ? ['ImageUrl1', 'ImageKey1'] : ['ImageUrl2', 'ImageKey2'];
    const updated = (
      await this.db.query<ProductImageRow>(
        `UPDATE products SET "${columns[0]}"=$1,"${columns[1]}"=$2,"UpdatedAtUtc"=NOW() WHERE "Id"=$3 RETURNING *`,
        [url, key, product.Id],
      )
    ).rows[0];
    if (previousKey && previousKey !== key)
      void this.removeStored(previousKey).catch(() => undefined);
    return updated;
  }

  async delete(storeId: number, productId: number, slot: number) {
    this.assertSlot(slot);
    const product = await this.product(productId, storeId);
    const key = slot === 1 ? product.ImageKey1 : product.ImageKey2;
    if (key) {
      try {
        await this.removeStored(key);
      } catch {
        throw new ProductImageError(
          500,
          'Nao foi possivel remover a imagem do produto.',
        );
      }
    }
    const columns =
      slot === 1 ? ['ImageUrl1', 'ImageKey1'] : ['ImageUrl2', 'ImageKey2'];
    return (
      await this.db.query<ProductImageRow>(
        `UPDATE products SET "${columns[0]}"=NULL,"${columns[1]}"=NULL,"UpdatedAtUtc"=NOW() WHERE "Id"=$1 RETURNING *`,
        [product.Id],
      )
    ).rows[0];
  }

  private async product(id: number, storeId: number) {
    const product = (
      await this.db.query<ProductImageRow>(
        'SELECT * FROM products WHERE "Id"=$1 AND "StoreId"=$2 LIMIT 1',
        [id, storeId],
      )
    ).rows[0];
    if (!product) throw new ProductImageError(404, 'Produto nao encontrado.');
    return product;
  }
  private assertSlot(slot: number) {
    if (![1, 2].includes(slot))
      throw new ProductImageError(400, 'O slot da imagem deve ser 1 ou 2.');
  }
  private assertFile(file?: Express.Multer.File) {
    if (!file?.size)
      throw new ProductImageError(400, 'Envie uma imagem no campo file.');
    if (file.size > 5 * 1024 * 1024)
      throw new ProductImageError(400, 'A imagem deve ter no maximo 5 MB.');
    const extension = file.originalname.split('.').pop()?.toLowerCase();
    if (!['jpg', 'jpeg', 'png', 'webp'].includes(extension ?? ''))
      throw new ProductImageError(
        400,
        'A imagem deve estar em um dos formatos: jpg, jpeg, png ou webp.',
      );
  }
  private client() {
    const accessKeyId =
      process.env.R2_ACCESS_KEY_ID ??
      process.env.R2__AccessKeyId ??
      process.env['R2:AccessKeyId'];
    const secretAccessKey =
      process.env.R2_SECRET_ACCESS_KEY ??
      process.env.R2__SecretAccessKey ??
      process.env['R2:SecretAccessKey'];
    const endpoint =
      process.env.R2_ENDPOINT ??
      process.env.R2__Endpoint ??
      process.env['R2:Endpoint'];
    if (!accessKeyId || !secretAccessKey || !endpoint)
      throw new Error('R2 storage is not configured.');
    return new S3Client({
      endpoint,
      region: 'auto',
      credentials: { accessKeyId, secretAccessKey },
      forcePathStyle: true,
    });
  }
  private bucket() {
    const bucket =
      process.env.R2_BUCKET_NAME ??
      process.env.R2__BucketName ??
      process.env['R2:BucketName'];
    if (!bucket) throw new Error('R2 storage is not configured.');
    return bucket;
  }
  private async put(
    storeId: number,
    productId: number,
    slot: number,
    file: Express.Multer.File,
  ) {
    const extension = (file.originalname.split('.').pop() ?? '')
      .toLowerCase()
      .replace('jpeg', 'jpg');
    const key = `stores/${storeId}/products/${productId}/image-${slot}-${crypto.randomUUID().replaceAll('-', '')}.${extension}`;
    await this.client().send(
      new PutObjectCommand({
        Bucket: this.bucket(),
        Key: key,
        Body: file.buffer,
        ContentType: extension === 'jpg' ? 'image/jpeg' : `image/${extension}`,
      }),
    );
    const base =
      process.env.R2_PUBLIC_URL ??
      process.env.R2__PublicUrl ??
      process.env['R2:PublicUrl'];
    if (!base) throw new Error('R2 public URL is not configured.');
    return {
      key,
      url: `${base.trim().replace(/\/$/, '')}/${key.split('/').map(encodeURIComponent).join('/')}`,
    };
  }
  private async removeStored(key: string) {
    await this.client().send(
      new DeleteObjectCommand({ Bucket: this.bucket(), Key: key }),
    );
  }
}
