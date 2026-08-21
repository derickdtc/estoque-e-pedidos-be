import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { json } from 'express';
import type { Request, Response } from 'express';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function loadEnv() {
  const file = join(process.cwd(), '.env');
  if (!existsSync(file)) return;
  for (const raw of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    const index = line.indexOf('=');
    if (!line || line.startsWith('#') || index < 1) continue;
    const key = line
      .slice(0, index)
      .replace(/^export\s+/i, '')
      .trim();
    if (!(key in process.env))
      process.env[key] = line
        .slice(index + 1)
        .trim()
        .replace(/^['"]|['"]$/g, '');
  }
}

async function bootstrap() {
  loadEnv();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
  });
  app.use(json({ limit: '10mb' }));
  const openApi = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Estoque e Pedidos API')
      .setVersion('1.0')
      .addBearerAuth()
      .build(),
  );
  SwaggerModule.setup('docs', app, openApi);
  app.use('/openapi/v1.json', (_req: Request, res: Response) =>
    res.json(openApi),
  );
  app.use('/health', (_req: Request, res: Response) =>
    res.status(200).json({ status: 'ok' }),
  );
  const port = Number(process.env.PORT ?? 3006);
  await app.listen(port, '0.0.0.0');
}
void bootstrap();
