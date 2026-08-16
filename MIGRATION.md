# Matriz de paridade ASP.NET → NestJS

| Referência ASP.NET | Implementação NestJS |
| --- | --- |
| `AuthController` e JWT bearer | `src/auth/auth.controller.ts`, `src/auth/jwt-auth.guard.ts` |
| `StoresController` e memberships | `src/stores/stores.controller.ts` |
| `ProductsController`, R2 e XLSX | `src/products/products.controller.ts`, `src/products/product-images.service.ts` |
| `OrdersController` e transações de estoque | `src/orders/orders.controller.ts`, `src/orders/orders.service.ts` |
| Entity Framework / PostgreSQL existente | `src/database/database.service.ts` com SQL parametrizado |

Decisão: a aplicação NestJS usa o mesmo schema PostgreSQL criado pelas migrations do projeto ASP.NET, sem aplicar migrations próprias. Isso evita alterar silenciosamente dados ou nomes de colunas do banco de referência.

Para executar, copie `.env.example` para `.env`, preencha a conexão e JWT, e execute `pnpm run start` dentro de `api-ep`.

## Prisma

O Prisma foi configurado sobre o banco existente em `prisma/schema.prisma`. O schema foi criado por introspecção, portanto não altera tabelas, dados ou o histórico de migrations do Entity Framework.

- Para novos módulos NestJS, injete `PrismaService` de `src/database/prisma.service.ts`.
- Use `pnpm prisma:generate` após trocar de ambiente ou atualizar o schema.
- Use `pnpm prisma:pull` somente para sincronizar o arquivo Prisma com uma mudança já aplicada ao PostgreSQL.
- Não execute `prisma migrate` enquanto o banco ainda for governado pelas migrations do ASP.NET; uma futura transição de ownership de migrations deve ser deliberada e única.
