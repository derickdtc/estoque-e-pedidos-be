# Auditoria de arquitetura e performance

## Escopo analisado

Foram revisados os modulos de autenticacao, lojas, produtos, imagens, pedidos,
acesso PostgreSQL, Prisma e bootstrap HTTP.

## Correcoes aplicadas

- `ProductsController` agora trata somente HTTP. Regras de produto, SQL,
  validacao, serializacao e importacao XLSX ficam em `ProductsService`.
- A importacao XLSX le o workbook uma unica vez e insere todos os produtos com
  `jsonb_to_recordset`, eliminando um round-trip por linha.
- Criacao e atualizacao de produto usam a constraint unica do PostgreSQL de
  forma atomica, sem consultas previas sujeitas a race condition.
- A importacao desvincula snapshots de itens de pedido antes de substituir o
  catalogo, preservando o historico e evitando violacao de chave estrangeira.
- Criacao e edicao de pedidos bloqueiam os produtos, validam estoque e fazem
  debitos e inserts em lote. A criacao nao permite mais estoque negativo.
- Devolucao de estoque de um ou varios pedidos carrega itens/produtos em lote e
  agrega quantidades por produto, removendo o N+1 de consultas.
- Transacoes comuns usam `READ COMMITTED`; somente fluxos criticos de estoque
  usam `SERIALIZABLE`, com retry para falhas transitorias de serializacao. Isso
  reduz abortos visiveis ao cliente e contencao desnecessaria nos outros fluxos.
- O cliente S3/R2 e reutilizado entre requisicoes em vez de ser recriado a cada
  upload ou exclusao.
- `database/performance-indexes.sql` fornece indices compostos e trigram para
  os filtros e ordenacoes mais usados, sem assumir ownership das migrations.

## Limites deliberados

- Os endpoints legados nao paginados foram mantidos para compatibilidade. Para
  catalogos e historicos grandes, consumidores devem preferir `/paged`.
- O schema existente usa `double precision` para valores monetarios. Migrar
  para `numeric(14,2)` exige uma migration coordenada no projeto ASP.NET que
  ainda governa o banco; essa mudanca nao deve ser feita silenciosamente aqui.
- `PrismaService` permanece disponivel para novos modulos, mas os fluxos
  transacionais existentes continuam em SQL parametrizado para preservar os
  locks explicitos.

## Operacao recomendada

Aplicar `database/performance-indexes.sql` uma vez por ambiente com um usuario
que possa criar a extensao `pg_trgm`. Os `CREATE INDEX CONCURRENTLY` devem ser
executados fora de uma transacao e evitam bloquear escritas durante a criacao.
