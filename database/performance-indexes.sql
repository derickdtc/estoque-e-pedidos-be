-- Execute uma vez no PostgreSQL de producao, fora de uma transacao.
-- O banco continua governado pelas migrations do projeto ASP.NET; por isso este
-- arquivo e deliberadamente opt-in e nao e executado no startup da API.

CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX CONCURRENTLY IF NOT EXISTS "IX_products_StoreId_Description_Id"
  ON products ("StoreId", "Description", "Id");

CREATE INDEX CONCURRENTLY IF NOT EXISTS "IX_products_Search_Trgm"
  ON products USING GIN
  (("Description" || ' ' || "ItemCode" || ' ' || "Reference" || ' ' ||
    "Cfop" || ' ' || "Csosn" || ' ' || "Ncm" || ' ' || "Cst") gin_trgm_ops);

CREATE INDEX CONCURRENTLY IF NOT EXISTS "IX_products_StoreId_LowerItemCode"
  ON products ("StoreId", LOWER("ItemCode"));

CREATE INDEX CONCURRENTLY IF NOT EXISTS "IX_orders_StoreId_Status_CreatedAtUtc_Id"
  ON orders ("StoreId", "Status", "CreatedAtUtc" DESC, "Id" DESC);

CREATE INDEX CONCURRENTLY IF NOT EXISTS "IX_order_items_OrderId_ProductDescription"
  ON order_items ("OrderId", "ProductDescription");
