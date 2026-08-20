# Portfolio — Lojas & Pedidos

API REST para gestão de lojas, catálogo, estoque e pedidos. O projeto representa o núcleo de um sistema comercial multiempresa: cada usuário acessa somente os dados da loja à qual está vinculado.

## O desafio

Pequenos negócios precisam concentrar o cadastro de produtos, o controle de estoque e a criação de pedidos em uma única aplicação. Esta API organiza esse fluxo com autenticação, regras de acesso e persistência relacional, mantendo os dados separados por loja.

## Principais funcionalidades

- Cadastro e autenticação de usuários com sessões por JWT.
- Criação e administração de lojas, incluindo vínculo de usuários e papéis de acesso.
- Catálogo de produtos com preços, dados fiscais, saldo em estoque e até duas imagens por item.
- Importação de produtos a partir de planilhas XLSX.
- Criação, edição e cancelamento de pedidos com atualização consistente do estoque.
- Histórico de pedidos com busca por cliente, período ou identificadores.
- Listagens paginadas para produtos e pedidos, preparadas para catálogos maiores.
- Endpoint de saúde em `GET /health`.
- OpenAPI em `/openapi/v1.json` e Swagger em `/docs`.

## Decisões técnicas em destaque

- **Isolamento multiempresa:** produtos e pedidos são filtrados pela loja presente no token do usuário, reduzindo o risco de acesso cruzado.
- **Integridade de estoque:** os fluxos de pedido usam transações serializáveis para manter a baixa e a restauração de itens consistentes.
- **Autenticação segura:** senhas usam BCrypt; tokens JWT têm emissor, público e validade configuráveis.
- **Persistência evolutiva:** PostgreSQL com Prisma configurado por introspecção sobre o schema existente. O acesso SQL transacional foi mantido nos fluxos críticos para preservar a paridade de locking.
- **Armazenamento de mídia desacoplado:** imagens de produtos usam uma integração S3 compatível com Cloudflare R2.

## Stack

- TypeScript e NestJS
- PostgreSQL, `pg` e Prisma
- JWT e BCrypt
- AWS SDK S3 / Cloudflare R2
- XLSX para importação de planilhas
- Swagger / OpenAPI
- Jest e ESLint

## Estrutura do projeto

```text
src/
├── auth/       # Autenticação e guard JWT
├── common/     # Utilitários compartilhados
├── database/   # PostgreSQL, Prisma e inicialização
├── orders/     # Endpoints e regras transacionais de pedidos
├── products/   # Catálogo, imagens e importação
└── stores/     # Lojas e vínculos de usuário
prisma/         # Schema Prisma introspectado
```

## Configuração e execução

```bash
pnpm install
copy .env.example .env
pnpm run start
```

Preencha o `.env` com uma conexão PostgreSQL válida e uma chave JWT de pelo menos 32 bytes. O arquivo `.env` é ignorado pelo Git.

Comandos úteis:

```bash
pnpm run lint
pnpm run build
pnpm test -- --runInBand
pnpm prisma:validate
pnpm prisma:studio
```

