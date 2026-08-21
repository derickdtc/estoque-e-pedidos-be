
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EFMigrationsHistory
 * 
 */
export type EFMigrationsHistory = $Result.DefaultSelection<Prisma.$EFMigrationsHistoryPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model store_users
 * 
 */
export type store_users = $Result.DefaultSelection<Prisma.$store_usersPayload>
/**
 * Model stores
 * 
 */
export type stores = $Result.DefaultSelection<Prisma.$storesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EFMigrationsHistories
 * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EFMigrationsHistories
   * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.eFMigrationsHistory`: Exposes CRUD operations for the **EFMigrationsHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EFMigrationsHistories
    * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
    * ```
    */
  get eFMigrationsHistory(): Prisma.EFMigrationsHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store_users`: Exposes CRUD operations for the **store_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Store_users
    * const store_users = await prisma.store_users.findMany()
    * ```
    */
  get store_users(): Prisma.store_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stores`: Exposes CRUD operations for the **stores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.stores.findMany()
    * ```
    */
  get stores(): Prisma.storesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    EFMigrationsHistory: 'EFMigrationsHistory',
    order_items: 'order_items',
    orders: 'orders',
    products: 'products',
    store_users: 'store_users',
    stores: 'stores',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "eFMigrationsHistory" | "order_items" | "orders" | "products" | "store_users" | "stores" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EFMigrationsHistory: {
        payload: Prisma.$EFMigrationsHistoryPayload<ExtArgs>
        fields: Prisma.EFMigrationsHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EFMigrationsHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          findFirst: {
            args: Prisma.EFMigrationsHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          findMany: {
            args: Prisma.EFMigrationsHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[]
          }
          create: {
            args: Prisma.EFMigrationsHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          createMany: {
            args: Prisma.EFMigrationsHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[]
          }
          delete: {
            args: Prisma.EFMigrationsHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          update: {
            args: Prisma.EFMigrationsHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          deleteMany: {
            args: Prisma.EFMigrationsHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EFMigrationsHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EFMigrationsHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[]
          }
          upsert: {
            args: Prisma.EFMigrationsHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          aggregate: {
            args: Prisma.EFMigrationsHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEFMigrationsHistory>
          }
          groupBy: {
            args: Prisma.EFMigrationsHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EFMigrationsHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EFMigrationsHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<EFMigrationsHistoryCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      store_users: {
        payload: Prisma.$store_usersPayload<ExtArgs>
        fields: Prisma.store_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.store_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.store_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>
          }
          findFirst: {
            args: Prisma.store_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.store_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>
          }
          findMany: {
            args: Prisma.store_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>[]
          }
          create: {
            args: Prisma.store_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>
          }
          createMany: {
            args: Prisma.store_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.store_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>[]
          }
          delete: {
            args: Prisma.store_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>
          }
          update: {
            args: Prisma.store_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>
          }
          deleteMany: {
            args: Prisma.store_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.store_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.store_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>[]
          }
          upsert: {
            args: Prisma.store_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_usersPayload>
          }
          aggregate: {
            args: Prisma.Store_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore_users>
          }
          groupBy: {
            args: Prisma.store_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Store_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.store_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Store_usersCountAggregateOutputType> | number
          }
        }
      }
      stores: {
        payload: Prisma.$storesPayload<ExtArgs>
        fields: Prisma.storesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findFirst: {
            args: Prisma.storesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findMany: {
            args: Prisma.storesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          create: {
            args: Prisma.storesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          createMany: {
            args: Prisma.storesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          delete: {
            args: Prisma.storesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          update: {
            args: Prisma.storesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          deleteMany: {
            args: Prisma.storesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          upsert: {
            args: Prisma.storesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          aggregate: {
            args: Prisma.StoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStores>
          }
          groupBy: {
            args: Prisma.storesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.storesCountArgs<ExtArgs>
            result: $Utils.Optional<StoresCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    eFMigrationsHistory?: EFMigrationsHistoryOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    products?: productsOmit
    store_users?: store_usersOmit
    stores?: storesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    order_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type StoresCountOutputType
   */

  export type StoresCountOutputType = {
    orders: number
    products: number
    store_users: number
  }

  export type StoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | StoresCountOutputTypeCountOrdersArgs
    products?: boolean | StoresCountOutputTypeCountProductsArgs
    store_users?: boolean | StoresCountOutputTypeCountStore_usersArgs
  }

  // Custom InputTypes
  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoresCountOutputType
     */
    select?: StoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountStore_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: store_usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    store_users: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store_users?: boolean | UsersCountOutputTypeCountStore_usersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStore_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: store_usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EFMigrationsHistory
   */

  export type AggregateEFMigrationsHistory = {
    _count: EFMigrationsHistoryCountAggregateOutputType | null
    _min: EFMigrationsHistoryMinAggregateOutputType | null
    _max: EFMigrationsHistoryMaxAggregateOutputType | null
  }

  export type EFMigrationsHistoryMinAggregateOutputType = {
    MigrationId: string | null
    ProductVersion: string | null
  }

  export type EFMigrationsHistoryMaxAggregateOutputType = {
    MigrationId: string | null
    ProductVersion: string | null
  }

  export type EFMigrationsHistoryCountAggregateOutputType = {
    MigrationId: number
    ProductVersion: number
    _all: number
  }


  export type EFMigrationsHistoryMinAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
  }

  export type EFMigrationsHistoryMaxAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
  }

  export type EFMigrationsHistoryCountAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
    _all?: true
  }

  export type EFMigrationsHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EFMigrationsHistory to aggregate.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EFMigrationsHistories
    **/
    _count?: true | EFMigrationsHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EFMigrationsHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EFMigrationsHistoryMaxAggregateInputType
  }

  export type GetEFMigrationsHistoryAggregateType<T extends EFMigrationsHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEFMigrationsHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEFMigrationsHistory[P]>
      : GetScalarType<T[P], AggregateEFMigrationsHistory[P]>
  }




  export type EFMigrationsHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EFMigrationsHistoryWhereInput
    orderBy?: EFMigrationsHistoryOrderByWithAggregationInput | EFMigrationsHistoryOrderByWithAggregationInput[]
    by: EFMigrationsHistoryScalarFieldEnum[] | EFMigrationsHistoryScalarFieldEnum
    having?: EFMigrationsHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EFMigrationsHistoryCountAggregateInputType | true
    _min?: EFMigrationsHistoryMinAggregateInputType
    _max?: EFMigrationsHistoryMaxAggregateInputType
  }

  export type EFMigrationsHistoryGroupByOutputType = {
    MigrationId: string
    ProductVersion: string
    _count: EFMigrationsHistoryCountAggregateOutputType | null
    _min: EFMigrationsHistoryMinAggregateOutputType | null
    _max: EFMigrationsHistoryMaxAggregateOutputType | null
  }

  type GetEFMigrationsHistoryGroupByPayload<T extends EFMigrationsHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EFMigrationsHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EFMigrationsHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]>
        }
      >
    >


  export type EFMigrationsHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MigrationId?: boolean
    ProductVersion?: boolean
  }, ExtArgs["result"]["eFMigrationsHistory"]>

  export type EFMigrationsHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MigrationId?: boolean
    ProductVersion?: boolean
  }, ExtArgs["result"]["eFMigrationsHistory"]>

  export type EFMigrationsHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MigrationId?: boolean
    ProductVersion?: boolean
  }, ExtArgs["result"]["eFMigrationsHistory"]>

  export type EFMigrationsHistorySelectScalar = {
    MigrationId?: boolean
    ProductVersion?: boolean
  }

  export type EFMigrationsHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MigrationId" | "ProductVersion", ExtArgs["result"]["eFMigrationsHistory"]>

  export type $EFMigrationsHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EFMigrationsHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MigrationId: string
      ProductVersion: string
    }, ExtArgs["result"]["eFMigrationsHistory"]>
    composites: {}
  }

  type EFMigrationsHistoryGetPayload<S extends boolean | null | undefined | EFMigrationsHistoryDefaultArgs> = $Result.GetResult<Prisma.$EFMigrationsHistoryPayload, S>

  type EFMigrationsHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EFMigrationsHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EFMigrationsHistoryCountAggregateInputType | true
    }

  export interface EFMigrationsHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EFMigrationsHistory'], meta: { name: 'EFMigrationsHistory' } }
    /**
     * Find zero or one EFMigrationsHistory that matches the filter.
     * @param {EFMigrationsHistoryFindUniqueArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EFMigrationsHistoryFindUniqueArgs>(args: SelectSubset<T, EFMigrationsHistoryFindUniqueArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EFMigrationsHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EFMigrationsHistoryFindUniqueOrThrowArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EFMigrationsHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EFMigrationsHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindFirstArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EFMigrationsHistoryFindFirstArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindFirstArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EFMigrationsHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindFirstOrThrowArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EFMigrationsHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EFMigrationsHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EFMigrationsHistories
     * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
     * 
     * // Get first 10 EFMigrationsHistories
     * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany({ take: 10 })
     * 
     * // Only select the `MigrationId`
     * const eFMigrationsHistoryWithMigrationIdOnly = await prisma.eFMigrationsHistory.findMany({ select: { MigrationId: true } })
     * 
     */
    findMany<T extends EFMigrationsHistoryFindManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EFMigrationsHistory.
     * @param {EFMigrationsHistoryCreateArgs} args - Arguments to create a EFMigrationsHistory.
     * @example
     * // Create one EFMigrationsHistory
     * const EFMigrationsHistory = await prisma.eFMigrationsHistory.create({
     *   data: {
     *     // ... data to create a EFMigrationsHistory
     *   }
     * })
     * 
     */
    create<T extends EFMigrationsHistoryCreateArgs>(args: SelectSubset<T, EFMigrationsHistoryCreateArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EFMigrationsHistories.
     * @param {EFMigrationsHistoryCreateManyArgs} args - Arguments to create many EFMigrationsHistories.
     * @example
     * // Create many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EFMigrationsHistoryCreateManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EFMigrationsHistories and returns the data saved in the database.
     * @param {EFMigrationsHistoryCreateManyAndReturnArgs} args - Arguments to create many EFMigrationsHistories.
     * @example
     * // Create many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EFMigrationsHistories and only return the `MigrationId`
     * const eFMigrationsHistoryWithMigrationIdOnly = await prisma.eFMigrationsHistory.createManyAndReturn({
     *   select: { MigrationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EFMigrationsHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EFMigrationsHistory.
     * @param {EFMigrationsHistoryDeleteArgs} args - Arguments to delete one EFMigrationsHistory.
     * @example
     * // Delete one EFMigrationsHistory
     * const EFMigrationsHistory = await prisma.eFMigrationsHistory.delete({
     *   where: {
     *     // ... filter to delete one EFMigrationsHistory
     *   }
     * })
     * 
     */
    delete<T extends EFMigrationsHistoryDeleteArgs>(args: SelectSubset<T, EFMigrationsHistoryDeleteArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EFMigrationsHistory.
     * @param {EFMigrationsHistoryUpdateArgs} args - Arguments to update one EFMigrationsHistory.
     * @example
     * // Update one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EFMigrationsHistoryUpdateArgs>(args: SelectSubset<T, EFMigrationsHistoryUpdateArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EFMigrationsHistories.
     * @param {EFMigrationsHistoryDeleteManyArgs} args - Arguments to filter EFMigrationsHistories to delete.
     * @example
     * // Delete a few EFMigrationsHistories
     * const { count } = await prisma.eFMigrationsHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EFMigrationsHistoryDeleteManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EFMigrationsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EFMigrationsHistoryUpdateManyArgs>(args: SelectSubset<T, EFMigrationsHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EFMigrationsHistories and returns the data updated in the database.
     * @param {EFMigrationsHistoryUpdateManyAndReturnArgs} args - Arguments to update many EFMigrationsHistories.
     * @example
     * // Update many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EFMigrationsHistories and only return the `MigrationId`
     * const eFMigrationsHistoryWithMigrationIdOnly = await prisma.eFMigrationsHistory.updateManyAndReturn({
     *   select: { MigrationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EFMigrationsHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EFMigrationsHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EFMigrationsHistory.
     * @param {EFMigrationsHistoryUpsertArgs} args - Arguments to update or create a EFMigrationsHistory.
     * @example
     * // Update or create a EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.upsert({
     *   create: {
     *     // ... data to create a EFMigrationsHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EFMigrationsHistory we want to update
     *   }
     * })
     */
    upsert<T extends EFMigrationsHistoryUpsertArgs>(args: SelectSubset<T, EFMigrationsHistoryUpsertArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EFMigrationsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryCountArgs} args - Arguments to filter EFMigrationsHistories to count.
     * @example
     * // Count the number of EFMigrationsHistories
     * const count = await prisma.eFMigrationsHistory.count({
     *   where: {
     *     // ... the filter for the EFMigrationsHistories we want to count
     *   }
     * })
    **/
    count<T extends EFMigrationsHistoryCountArgs>(
      args?: Subset<T, EFMigrationsHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EFMigrationsHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EFMigrationsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EFMigrationsHistoryAggregateArgs>(args: Subset<T, EFMigrationsHistoryAggregateArgs>): Prisma.PrismaPromise<GetEFMigrationsHistoryAggregateType<T>>

    /**
     * Group by EFMigrationsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EFMigrationsHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EFMigrationsHistoryGroupByArgs['orderBy'] }
        : { orderBy?: EFMigrationsHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EFMigrationsHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEFMigrationsHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EFMigrationsHistory model
   */
  readonly fields: EFMigrationsHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EFMigrationsHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EFMigrationsHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EFMigrationsHistory model
   */
  interface EFMigrationsHistoryFieldRefs {
    readonly MigrationId: FieldRef<"EFMigrationsHistory", 'String'>
    readonly ProductVersion: FieldRef<"EFMigrationsHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EFMigrationsHistory findUnique
   */
  export type EFMigrationsHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory findUniqueOrThrow
   */
  export type EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory findFirst
   */
  export type EFMigrationsHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EFMigrationsHistories.
     */
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory findFirstOrThrow
   */
  export type EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EFMigrationsHistories.
     */
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory findMany
   */
  export type EFMigrationsHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistories to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory create
   */
  export type EFMigrationsHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a EFMigrationsHistory.
     */
    data: XOR<EFMigrationsHistoryCreateInput, EFMigrationsHistoryUncheckedCreateInput>
  }

  /**
   * EFMigrationsHistory createMany
   */
  export type EFMigrationsHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EFMigrationsHistories.
     */
    data: EFMigrationsHistoryCreateManyInput | EFMigrationsHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EFMigrationsHistory createManyAndReturn
   */
  export type EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many EFMigrationsHistories.
     */
    data: EFMigrationsHistoryCreateManyInput | EFMigrationsHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EFMigrationsHistory update
   */
  export type EFMigrationsHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a EFMigrationsHistory.
     */
    data: XOR<EFMigrationsHistoryUpdateInput, EFMigrationsHistoryUncheckedUpdateInput>
    /**
     * Choose, which EFMigrationsHistory to update.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory updateMany
   */
  export type EFMigrationsHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EFMigrationsHistories.
     */
    data: XOR<EFMigrationsHistoryUpdateManyMutationInput, EFMigrationsHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EFMigrationsHistories to update
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * Limit how many EFMigrationsHistories to update.
     */
    limit?: number
  }

  /**
   * EFMigrationsHistory updateManyAndReturn
   */
  export type EFMigrationsHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The data used to update EFMigrationsHistories.
     */
    data: XOR<EFMigrationsHistoryUpdateManyMutationInput, EFMigrationsHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EFMigrationsHistories to update
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * Limit how many EFMigrationsHistories to update.
     */
    limit?: number
  }

  /**
   * EFMigrationsHistory upsert
   */
  export type EFMigrationsHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the EFMigrationsHistory to update in case it exists.
     */
    where: EFMigrationsHistoryWhereUniqueInput
    /**
     * In case the EFMigrationsHistory found by the `where` argument doesn't exist, create a new EFMigrationsHistory with this data.
     */
    create: XOR<EFMigrationsHistoryCreateInput, EFMigrationsHistoryUncheckedCreateInput>
    /**
     * In case the EFMigrationsHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EFMigrationsHistoryUpdateInput, EFMigrationsHistoryUncheckedUpdateInput>
  }

  /**
   * EFMigrationsHistory delete
   */
  export type EFMigrationsHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter which EFMigrationsHistory to delete.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory deleteMany
   */
  export type EFMigrationsHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EFMigrationsHistories to delete
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * Limit how many EFMigrationsHistories to delete.
     */
    limit?: number
  }

  /**
   * EFMigrationsHistory without action
   */
  export type EFMigrationsHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    ProductId: number | null
    Quantity: number | null
    LineTotal: number | null
    SalePrice: number | null
  }

  export type Order_itemsSumAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    ProductId: number | null
    Quantity: number | null
    LineTotal: number | null
    SalePrice: number | null
  }

  export type Order_itemsMinAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    ProductId: number | null
    Quantity: number | null
    LineTotal: number | null
    Cfop: string | null
    Csosn: string | null
    Cst: string | null
    Ncm: string | null
    ProductDescription: string | null
    ProductItemCode: string | null
    ProductReference: string | null
    SalePrice: number | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    ProductId: number | null
    Quantity: number | null
    LineTotal: number | null
    Cfop: string | null
    Csosn: string | null
    Cst: string | null
    Ncm: string | null
    ProductDescription: string | null
    ProductItemCode: string | null
    ProductReference: string | null
    SalePrice: number | null
  }

  export type Order_itemsCountAggregateOutputType = {
    Id: number
    OrderId: number
    ProductId: number
    Quantity: number
    LineTotal: number
    Cfop: number
    Csosn: number
    Cst: number
    Ncm: number
    ProductDescription: number
    ProductItemCode: number
    ProductReference: number
    SalePrice: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    Id?: true
    OrderId?: true
    ProductId?: true
    Quantity?: true
    LineTotal?: true
    SalePrice?: true
  }

  export type Order_itemsSumAggregateInputType = {
    Id?: true
    OrderId?: true
    ProductId?: true
    Quantity?: true
    LineTotal?: true
    SalePrice?: true
  }

  export type Order_itemsMinAggregateInputType = {
    Id?: true
    OrderId?: true
    ProductId?: true
    Quantity?: true
    LineTotal?: true
    Cfop?: true
    Csosn?: true
    Cst?: true
    Ncm?: true
    ProductDescription?: true
    ProductItemCode?: true
    ProductReference?: true
    SalePrice?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    Id?: true
    OrderId?: true
    ProductId?: true
    Quantity?: true
    LineTotal?: true
    Cfop?: true
    Csosn?: true
    Cst?: true
    Ncm?: true
    ProductDescription?: true
    ProductItemCode?: true
    ProductReference?: true
    SalePrice?: true
  }

  export type Order_itemsCountAggregateInputType = {
    Id?: true
    OrderId?: true
    ProductId?: true
    Quantity?: true
    LineTotal?: true
    Cfop?: true
    Csosn?: true
    Cst?: true
    Ncm?: true
    ProductDescription?: true
    ProductItemCode?: true
    ProductReference?: true
    SalePrice?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    Id: number
    OrderId: number
    ProductId: number | null
    Quantity: number
    LineTotal: number
    Cfop: string
    Csosn: string
    Cst: string
    Ncm: string
    ProductDescription: string
    ProductItemCode: string
    ProductReference: string
    SalePrice: number
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OrderId?: boolean
    ProductId?: boolean
    Quantity?: boolean
    LineTotal?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    Ncm?: boolean
    ProductDescription?: boolean
    ProductItemCode?: boolean
    ProductReference?: boolean
    SalePrice?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OrderId?: boolean
    ProductId?: boolean
    Quantity?: boolean
    LineTotal?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    Ncm?: boolean
    ProductDescription?: boolean
    ProductItemCode?: boolean
    ProductReference?: boolean
    SalePrice?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OrderId?: boolean
    ProductId?: boolean
    Quantity?: boolean
    LineTotal?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    Ncm?: boolean
    ProductDescription?: boolean
    ProductItemCode?: boolean
    ProductReference?: boolean
    SalePrice?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    Id?: boolean
    OrderId?: boolean
    ProductId?: boolean
    Quantity?: boolean
    LineTotal?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    Ncm?: boolean
    ProductDescription?: boolean
    ProductItemCode?: boolean
    ProductReference?: boolean
    SalePrice?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "OrderId" | "ProductId" | "Quantity" | "LineTotal" | "Cfop" | "Csosn" | "Cst" | "Ncm" | "ProductDescription" | "ProductItemCode" | "ProductReference" | "SalePrice", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }
  export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }
  export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      OrderId: number
      ProductId: number | null
      Quantity: number
      LineTotal: number
      Cfop: string
      Csosn: string
      Cst: string
      Ncm: string
      ProductDescription: string
      ProductItemCode: string
      ProductReference: string
      SalePrice: number
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemsCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `Id`
     * const order_itemsWithIdOnly = await prisma.order_items.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemsUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `Id`
     * const order_itemsWithIdOnly = await prisma.order_items.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends order_items$productsArgs<ExtArgs> = {}>(args?: Subset<T, order_items$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly Id: FieldRef<"order_items", 'Int'>
    readonly OrderId: FieldRef<"order_items", 'Int'>
    readonly ProductId: FieldRef<"order_items", 'Int'>
    readonly Quantity: FieldRef<"order_items", 'Int'>
    readonly LineTotal: FieldRef<"order_items", 'Float'>
    readonly Cfop: FieldRef<"order_items", 'String'>
    readonly Csosn: FieldRef<"order_items", 'String'>
    readonly Cst: FieldRef<"order_items", 'String'>
    readonly Ncm: FieldRef<"order_items", 'String'>
    readonly ProductDescription: FieldRef<"order_items", 'String'>
    readonly ProductItemCode: FieldRef<"order_items", 'String'>
    readonly ProductReference: FieldRef<"order_items", 'String'>
    readonly SalePrice: FieldRef<"order_items", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items createManyAndReturn
   */
  export type order_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items updateManyAndReturn
   */
  export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items.products
   */
  export type order_items$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    Id: number | null
    CreatedByUserId: number | null
    TotalAmount: number | null
    StoreId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    Id: number | null
    CreatedByUserId: number | null
    TotalAmount: number | null
    StoreId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    Id: number | null
    CreatedByUserId: number | null
    CreatedByUsername: string | null
    Status: string | null
    TotalAmount: number | null
    CreatedAtUtc: Date | null
    CustomerName: string | null
    Observations: string | null
    StoreId: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    Id: number | null
    CreatedByUserId: number | null
    CreatedByUsername: string | null
    Status: string | null
    TotalAmount: number | null
    CreatedAtUtc: Date | null
    CustomerName: string | null
    Observations: string | null
    StoreId: number | null
  }

  export type OrdersCountAggregateOutputType = {
    Id: number
    CreatedByUserId: number
    CreatedByUsername: number
    Status: number
    TotalAmount: number
    CreatedAtUtc: number
    CustomerName: number
    Observations: number
    StoreId: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    Id?: true
    CreatedByUserId?: true
    TotalAmount?: true
    StoreId?: true
  }

  export type OrdersSumAggregateInputType = {
    Id?: true
    CreatedByUserId?: true
    TotalAmount?: true
    StoreId?: true
  }

  export type OrdersMinAggregateInputType = {
    Id?: true
    CreatedByUserId?: true
    CreatedByUsername?: true
    Status?: true
    TotalAmount?: true
    CreatedAtUtc?: true
    CustomerName?: true
    Observations?: true
    StoreId?: true
  }

  export type OrdersMaxAggregateInputType = {
    Id?: true
    CreatedByUserId?: true
    CreatedByUsername?: true
    Status?: true
    TotalAmount?: true
    CreatedAtUtc?: true
    CustomerName?: true
    Observations?: true
    StoreId?: true
  }

  export type OrdersCountAggregateInputType = {
    Id?: true
    CreatedByUserId?: true
    CreatedByUsername?: true
    Status?: true
    TotalAmount?: true
    CreatedAtUtc?: true
    CustomerName?: true
    Observations?: true
    StoreId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    Id: number
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc: Date
    CustomerName: string | null
    Observations: string | null
    StoreId: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    CreatedByUserId?: boolean
    CreatedByUsername?: boolean
    Status?: boolean
    TotalAmount?: boolean
    CreatedAtUtc?: boolean
    CustomerName?: boolean
    Observations?: boolean
    StoreId?: boolean
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    CreatedByUserId?: boolean
    CreatedByUsername?: boolean
    Status?: boolean
    TotalAmount?: boolean
    CreatedAtUtc?: boolean
    CustomerName?: boolean
    Observations?: boolean
    StoreId?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    CreatedByUserId?: boolean
    CreatedByUsername?: boolean
    Status?: boolean
    TotalAmount?: boolean
    CreatedAtUtc?: boolean
    CustomerName?: boolean
    Observations?: boolean
    StoreId?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    Id?: boolean
    CreatedByUserId?: boolean
    CreatedByUsername?: boolean
    Status?: boolean
    TotalAmount?: boolean
    CreatedAtUtc?: boolean
    CustomerName?: boolean
    Observations?: boolean
    StoreId?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "CreatedByUserId" | "CreatedByUsername" | "Status" | "TotalAmount" | "CreatedAtUtc" | "CustomerName" | "Observations" | "StoreId", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      stores: Prisma.$storesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      CreatedByUserId: number
      CreatedByUsername: string
      Status: string
      TotalAmount: number
      CreatedAtUtc: Date
      CustomerName: string | null
      Observations: string | null
      StoreId: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `Id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `Id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends storesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storesDefaultArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly Id: FieldRef<"orders", 'Int'>
    readonly CreatedByUserId: FieldRef<"orders", 'Int'>
    readonly CreatedByUsername: FieldRef<"orders", 'String'>
    readonly Status: FieldRef<"orders", 'String'>
    readonly TotalAmount: FieldRef<"orders", 'Float'>
    readonly CreatedAtUtc: FieldRef<"orders", 'DateTime'>
    readonly CustomerName: FieldRef<"orders", 'String'>
    readonly Observations: FieldRef<"orders", 'String'>
    readonly StoreId: FieldRef<"orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    Id: number | null
    PurchasePrice: number | null
    SalePrice: number | null
    StockBalance: number | null
    StoreId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    Id: number | null
    PurchasePrice: number | null
    SalePrice: number | null
    StockBalance: number | null
    StoreId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    Id: number | null
    Description: string | null
    CreatedAtUtc: Date | null
    UpdatedAtUtc: Date | null
    Cfop: string | null
    Csosn: string | null
    Cst: string | null
    ItemCode: string | null
    Ncm: string | null
    PurchasePrice: number | null
    Reference: string | null
    SalePrice: number | null
    StockBalance: number | null
    StoreId: number | null
    ImageKey1: string | null
    ImageKey2: string | null
    ImageUrl1: string | null
    ImageUrl2: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    Id: number | null
    Description: string | null
    CreatedAtUtc: Date | null
    UpdatedAtUtc: Date | null
    Cfop: string | null
    Csosn: string | null
    Cst: string | null
    ItemCode: string | null
    Ncm: string | null
    PurchasePrice: number | null
    Reference: string | null
    SalePrice: number | null
    StockBalance: number | null
    StoreId: number | null
    ImageKey1: string | null
    ImageKey2: string | null
    ImageUrl1: string | null
    ImageUrl2: string | null
  }

  export type ProductsCountAggregateOutputType = {
    Id: number
    Description: number
    CreatedAtUtc: number
    UpdatedAtUtc: number
    Cfop: number
    Csosn: number
    Cst: number
    ItemCode: number
    Ncm: number
    PurchasePrice: number
    Reference: number
    SalePrice: number
    StockBalance: number
    StoreId: number
    ImageKey1: number
    ImageKey2: number
    ImageUrl1: number
    ImageUrl2: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    Id?: true
    PurchasePrice?: true
    SalePrice?: true
    StockBalance?: true
    StoreId?: true
  }

  export type ProductsSumAggregateInputType = {
    Id?: true
    PurchasePrice?: true
    SalePrice?: true
    StockBalance?: true
    StoreId?: true
  }

  export type ProductsMinAggregateInputType = {
    Id?: true
    Description?: true
    CreatedAtUtc?: true
    UpdatedAtUtc?: true
    Cfop?: true
    Csosn?: true
    Cst?: true
    ItemCode?: true
    Ncm?: true
    PurchasePrice?: true
    Reference?: true
    SalePrice?: true
    StockBalance?: true
    StoreId?: true
    ImageKey1?: true
    ImageKey2?: true
    ImageUrl1?: true
    ImageUrl2?: true
  }

  export type ProductsMaxAggregateInputType = {
    Id?: true
    Description?: true
    CreatedAtUtc?: true
    UpdatedAtUtc?: true
    Cfop?: true
    Csosn?: true
    Cst?: true
    ItemCode?: true
    Ncm?: true
    PurchasePrice?: true
    Reference?: true
    SalePrice?: true
    StockBalance?: true
    StoreId?: true
    ImageKey1?: true
    ImageKey2?: true
    ImageUrl1?: true
    ImageUrl2?: true
  }

  export type ProductsCountAggregateInputType = {
    Id?: true
    Description?: true
    CreatedAtUtc?: true
    UpdatedAtUtc?: true
    Cfop?: true
    Csosn?: true
    Cst?: true
    ItemCode?: true
    Ncm?: true
    PurchasePrice?: true
    Reference?: true
    SalePrice?: true
    StockBalance?: true
    StoreId?: true
    ImageKey1?: true
    ImageKey2?: true
    ImageUrl1?: true
    ImageUrl2?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    Id: number
    Description: string
    CreatedAtUtc: Date
    UpdatedAtUtc: Date | null
    Cfop: string
    Csosn: string
    Cst: string
    ItemCode: string
    Ncm: string
    PurchasePrice: number
    Reference: string
    SalePrice: number
    StockBalance: number
    StoreId: number
    ImageKey1: string | null
    ImageKey2: string | null
    ImageUrl1: string | null
    ImageUrl2: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Description?: boolean
    CreatedAtUtc?: boolean
    UpdatedAtUtc?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    ItemCode?: boolean
    Ncm?: boolean
    PurchasePrice?: boolean
    Reference?: boolean
    SalePrice?: boolean
    StockBalance?: boolean
    StoreId?: boolean
    ImageKey1?: boolean
    ImageKey2?: boolean
    ImageUrl1?: boolean
    ImageUrl2?: boolean
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Description?: boolean
    CreatedAtUtc?: boolean
    UpdatedAtUtc?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    ItemCode?: boolean
    Ncm?: boolean
    PurchasePrice?: boolean
    Reference?: boolean
    SalePrice?: boolean
    StockBalance?: boolean
    StoreId?: boolean
    ImageKey1?: boolean
    ImageKey2?: boolean
    ImageUrl1?: boolean
    ImageUrl2?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Description?: boolean
    CreatedAtUtc?: boolean
    UpdatedAtUtc?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    ItemCode?: boolean
    Ncm?: boolean
    PurchasePrice?: boolean
    Reference?: boolean
    SalePrice?: boolean
    StockBalance?: boolean
    StoreId?: boolean
    ImageKey1?: boolean
    ImageKey2?: boolean
    ImageUrl1?: boolean
    ImageUrl2?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    Id?: boolean
    Description?: boolean
    CreatedAtUtc?: boolean
    UpdatedAtUtc?: boolean
    Cfop?: boolean
    Csosn?: boolean
    Cst?: boolean
    ItemCode?: boolean
    Ncm?: boolean
    PurchasePrice?: boolean
    Reference?: boolean
    SalePrice?: boolean
    StockBalance?: boolean
    StoreId?: boolean
    ImageKey1?: boolean
    ImageKey2?: boolean
    ImageUrl1?: boolean
    ImageUrl2?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Description" | "CreatedAtUtc" | "UpdatedAtUtc" | "Cfop" | "Csosn" | "Cst" | "ItemCode" | "Ncm" | "PurchasePrice" | "Reference" | "SalePrice" | "StockBalance" | "StoreId" | "ImageKey1" | "ImageKey2" | "ImageUrl1" | "ImageUrl2", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      stores: Prisma.$storesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Description: string
      CreatedAtUtc: Date
      UpdatedAtUtc: Date | null
      Cfop: string
      Csosn: string
      Cst: string
      ItemCode: string
      Ncm: string
      PurchasePrice: number
      Reference: string
      SalePrice: number
      StockBalance: number
      StoreId: number
      ImageKey1: string | null
      ImageKey2: string | null
      ImageUrl1: string | null
      ImageUrl2: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `Id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `Id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends storesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storesDefaultArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly Id: FieldRef<"products", 'Int'>
    readonly Description: FieldRef<"products", 'String'>
    readonly CreatedAtUtc: FieldRef<"products", 'DateTime'>
    readonly UpdatedAtUtc: FieldRef<"products", 'DateTime'>
    readonly Cfop: FieldRef<"products", 'String'>
    readonly Csosn: FieldRef<"products", 'String'>
    readonly Cst: FieldRef<"products", 'String'>
    readonly ItemCode: FieldRef<"products", 'String'>
    readonly Ncm: FieldRef<"products", 'String'>
    readonly PurchasePrice: FieldRef<"products", 'Float'>
    readonly Reference: FieldRef<"products", 'String'>
    readonly SalePrice: FieldRef<"products", 'Float'>
    readonly StockBalance: FieldRef<"products", 'Int'>
    readonly StoreId: FieldRef<"products", 'Int'>
    readonly ImageKey1: FieldRef<"products", 'String'>
    readonly ImageKey2: FieldRef<"products", 'String'>
    readonly ImageUrl1: FieldRef<"products", 'String'>
    readonly ImageUrl2: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model store_users
   */

  export type AggregateStore_users = {
    _count: Store_usersCountAggregateOutputType | null
    _avg: Store_usersAvgAggregateOutputType | null
    _sum: Store_usersSumAggregateOutputType | null
    _min: Store_usersMinAggregateOutputType | null
    _max: Store_usersMaxAggregateOutputType | null
  }

  export type Store_usersAvgAggregateOutputType = {
    Id: number | null
    StoreId: number | null
    UserId: number | null
  }

  export type Store_usersSumAggregateOutputType = {
    Id: number | null
    StoreId: number | null
    UserId: number | null
  }

  export type Store_usersMinAggregateOutputType = {
    Id: number | null
    StoreId: number | null
    UserId: number | null
    Role: string | null
    CreatedAtUtc: Date | null
    IsActive: boolean | null
  }

  export type Store_usersMaxAggregateOutputType = {
    Id: number | null
    StoreId: number | null
    UserId: number | null
    Role: string | null
    CreatedAtUtc: Date | null
    IsActive: boolean | null
  }

  export type Store_usersCountAggregateOutputType = {
    Id: number
    StoreId: number
    UserId: number
    Role: number
    CreatedAtUtc: number
    IsActive: number
    _all: number
  }


  export type Store_usersAvgAggregateInputType = {
    Id?: true
    StoreId?: true
    UserId?: true
  }

  export type Store_usersSumAggregateInputType = {
    Id?: true
    StoreId?: true
    UserId?: true
  }

  export type Store_usersMinAggregateInputType = {
    Id?: true
    StoreId?: true
    UserId?: true
    Role?: true
    CreatedAtUtc?: true
    IsActive?: true
  }

  export type Store_usersMaxAggregateInputType = {
    Id?: true
    StoreId?: true
    UserId?: true
    Role?: true
    CreatedAtUtc?: true
    IsActive?: true
  }

  export type Store_usersCountAggregateInputType = {
    Id?: true
    StoreId?: true
    UserId?: true
    Role?: true
    CreatedAtUtc?: true
    IsActive?: true
    _all?: true
  }

  export type Store_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store_users to aggregate.
     */
    where?: store_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_users to fetch.
     */
    orderBy?: store_usersOrderByWithRelationInput | store_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: store_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned store_users
    **/
    _count?: true | Store_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Store_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Store_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Store_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Store_usersMaxAggregateInputType
  }

  export type GetStore_usersAggregateType<T extends Store_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateStore_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore_users[P]>
      : GetScalarType<T[P], AggregateStore_users[P]>
  }




  export type store_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: store_usersWhereInput
    orderBy?: store_usersOrderByWithAggregationInput | store_usersOrderByWithAggregationInput[]
    by: Store_usersScalarFieldEnum[] | Store_usersScalarFieldEnum
    having?: store_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Store_usersCountAggregateInputType | true
    _avg?: Store_usersAvgAggregateInputType
    _sum?: Store_usersSumAggregateInputType
    _min?: Store_usersMinAggregateInputType
    _max?: Store_usersMaxAggregateInputType
  }

  export type Store_usersGroupByOutputType = {
    Id: number
    StoreId: number
    UserId: number
    Role: string
    CreatedAtUtc: Date
    IsActive: boolean
    _count: Store_usersCountAggregateOutputType | null
    _avg: Store_usersAvgAggregateOutputType | null
    _sum: Store_usersSumAggregateOutputType | null
    _min: Store_usersMinAggregateOutputType | null
    _max: Store_usersMaxAggregateOutputType | null
  }

  type GetStore_usersGroupByPayload<T extends store_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Store_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Store_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Store_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Store_usersGroupByOutputType[P]>
        }
      >
    >


  export type store_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    StoreId?: boolean
    UserId?: boolean
    Role?: boolean
    CreatedAtUtc?: boolean
    IsActive?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store_users"]>

  export type store_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    StoreId?: boolean
    UserId?: boolean
    Role?: boolean
    CreatedAtUtc?: boolean
    IsActive?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store_users"]>

  export type store_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    StoreId?: boolean
    UserId?: boolean
    Role?: boolean
    CreatedAtUtc?: boolean
    IsActive?: boolean
    stores?: boolean | storesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store_users"]>

  export type store_usersSelectScalar = {
    Id?: boolean
    StoreId?: boolean
    UserId?: boolean
    Role?: boolean
    CreatedAtUtc?: boolean
    IsActive?: boolean
  }

  export type store_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "StoreId" | "UserId" | "Role" | "CreatedAtUtc" | "IsActive", ExtArgs["result"]["store_users"]>
  export type store_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type store_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type store_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | storesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $store_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "store_users"
    objects: {
      stores: Prisma.$storesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      StoreId: number
      UserId: number
      Role: string
      CreatedAtUtc: Date
      IsActive: boolean
    }, ExtArgs["result"]["store_users"]>
    composites: {}
  }

  type store_usersGetPayload<S extends boolean | null | undefined | store_usersDefaultArgs> = $Result.GetResult<Prisma.$store_usersPayload, S>

  type store_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<store_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Store_usersCountAggregateInputType | true
    }

  export interface store_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store_users'], meta: { name: 'store_users' } }
    /**
     * Find zero or one Store_users that matches the filter.
     * @param {store_usersFindUniqueArgs} args - Arguments to find a Store_users
     * @example
     * // Get one Store_users
     * const store_users = await prisma.store_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends store_usersFindUniqueArgs>(args: SelectSubset<T, store_usersFindUniqueArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {store_usersFindUniqueOrThrowArgs} args - Arguments to find a Store_users
     * @example
     * // Get one Store_users
     * const store_users = await prisma.store_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends store_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, store_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_usersFindFirstArgs} args - Arguments to find a Store_users
     * @example
     * // Get one Store_users
     * const store_users = await prisma.store_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends store_usersFindFirstArgs>(args?: SelectSubset<T, store_usersFindFirstArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_usersFindFirstOrThrowArgs} args - Arguments to find a Store_users
     * @example
     * // Get one Store_users
     * const store_users = await prisma.store_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends store_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, store_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Store_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Store_users
     * const store_users = await prisma.store_users.findMany()
     * 
     * // Get first 10 Store_users
     * const store_users = await prisma.store_users.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const store_usersWithIdOnly = await prisma.store_users.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends store_usersFindManyArgs>(args?: SelectSubset<T, store_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store_users.
     * @param {store_usersCreateArgs} args - Arguments to create a Store_users.
     * @example
     * // Create one Store_users
     * const Store_users = await prisma.store_users.create({
     *   data: {
     *     // ... data to create a Store_users
     *   }
     * })
     * 
     */
    create<T extends store_usersCreateArgs>(args: SelectSubset<T, store_usersCreateArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Store_users.
     * @param {store_usersCreateManyArgs} args - Arguments to create many Store_users.
     * @example
     * // Create many Store_users
     * const store_users = await prisma.store_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends store_usersCreateManyArgs>(args?: SelectSubset<T, store_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Store_users and returns the data saved in the database.
     * @param {store_usersCreateManyAndReturnArgs} args - Arguments to create many Store_users.
     * @example
     * // Create many Store_users
     * const store_users = await prisma.store_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Store_users and only return the `Id`
     * const store_usersWithIdOnly = await prisma.store_users.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends store_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, store_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store_users.
     * @param {store_usersDeleteArgs} args - Arguments to delete one Store_users.
     * @example
     * // Delete one Store_users
     * const Store_users = await prisma.store_users.delete({
     *   where: {
     *     // ... filter to delete one Store_users
     *   }
     * })
     * 
     */
    delete<T extends store_usersDeleteArgs>(args: SelectSubset<T, store_usersDeleteArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store_users.
     * @param {store_usersUpdateArgs} args - Arguments to update one Store_users.
     * @example
     * // Update one Store_users
     * const store_users = await prisma.store_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends store_usersUpdateArgs>(args: SelectSubset<T, store_usersUpdateArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Store_users.
     * @param {store_usersDeleteManyArgs} args - Arguments to filter Store_users to delete.
     * @example
     * // Delete a few Store_users
     * const { count } = await prisma.store_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends store_usersDeleteManyArgs>(args?: SelectSubset<T, store_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Store_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Store_users
     * const store_users = await prisma.store_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends store_usersUpdateManyArgs>(args: SelectSubset<T, store_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Store_users and returns the data updated in the database.
     * @param {store_usersUpdateManyAndReturnArgs} args - Arguments to update many Store_users.
     * @example
     * // Update many Store_users
     * const store_users = await prisma.store_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Store_users and only return the `Id`
     * const store_usersWithIdOnly = await prisma.store_users.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends store_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, store_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store_users.
     * @param {store_usersUpsertArgs} args - Arguments to update or create a Store_users.
     * @example
     * // Update or create a Store_users
     * const store_users = await prisma.store_users.upsert({
     *   create: {
     *     // ... data to create a Store_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store_users we want to update
     *   }
     * })
     */
    upsert<T extends store_usersUpsertArgs>(args: SelectSubset<T, store_usersUpsertArgs<ExtArgs>>): Prisma__store_usersClient<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Store_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_usersCountArgs} args - Arguments to filter Store_users to count.
     * @example
     * // Count the number of Store_users
     * const count = await prisma.store_users.count({
     *   where: {
     *     // ... the filter for the Store_users we want to count
     *   }
     * })
    **/
    count<T extends store_usersCountArgs>(
      args?: Subset<T, store_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Store_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Store_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Store_usersAggregateArgs>(args: Subset<T, Store_usersAggregateArgs>): Prisma.PrismaPromise<GetStore_usersAggregateType<T>>

    /**
     * Group by Store_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends store_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: store_usersGroupByArgs['orderBy'] }
        : { orderBy?: store_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, store_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStore_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the store_users model
   */
  readonly fields: store_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__store_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stores<T extends storesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storesDefaultArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the store_users model
   */
  interface store_usersFieldRefs {
    readonly Id: FieldRef<"store_users", 'Int'>
    readonly StoreId: FieldRef<"store_users", 'Int'>
    readonly UserId: FieldRef<"store_users", 'Int'>
    readonly Role: FieldRef<"store_users", 'String'>
    readonly CreatedAtUtc: FieldRef<"store_users", 'DateTime'>
    readonly IsActive: FieldRef<"store_users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * store_users findUnique
   */
  export type store_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * Filter, which store_users to fetch.
     */
    where: store_usersWhereUniqueInput
  }

  /**
   * store_users findUniqueOrThrow
   */
  export type store_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * Filter, which store_users to fetch.
     */
    where: store_usersWhereUniqueInput
  }

  /**
   * store_users findFirst
   */
  export type store_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * Filter, which store_users to fetch.
     */
    where?: store_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_users to fetch.
     */
    orderBy?: store_usersOrderByWithRelationInput | store_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for store_users.
     */
    cursor?: store_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of store_users.
     */
    distinct?: Store_usersScalarFieldEnum | Store_usersScalarFieldEnum[]
  }

  /**
   * store_users findFirstOrThrow
   */
  export type store_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * Filter, which store_users to fetch.
     */
    where?: store_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_users to fetch.
     */
    orderBy?: store_usersOrderByWithRelationInput | store_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for store_users.
     */
    cursor?: store_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of store_users.
     */
    distinct?: Store_usersScalarFieldEnum | Store_usersScalarFieldEnum[]
  }

  /**
   * store_users findMany
   */
  export type store_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * Filter, which store_users to fetch.
     */
    where?: store_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_users to fetch.
     */
    orderBy?: store_usersOrderByWithRelationInput | store_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing store_users.
     */
    cursor?: store_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_users.
     */
    skip?: number
    distinct?: Store_usersScalarFieldEnum | Store_usersScalarFieldEnum[]
  }

  /**
   * store_users create
   */
  export type store_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a store_users.
     */
    data: XOR<store_usersCreateInput, store_usersUncheckedCreateInput>
  }

  /**
   * store_users createMany
   */
  export type store_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many store_users.
     */
    data: store_usersCreateManyInput | store_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store_users createManyAndReturn
   */
  export type store_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * The data used to create many store_users.
     */
    data: store_usersCreateManyInput | store_usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * store_users update
   */
  export type store_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a store_users.
     */
    data: XOR<store_usersUpdateInput, store_usersUncheckedUpdateInput>
    /**
     * Choose, which store_users to update.
     */
    where: store_usersWhereUniqueInput
  }

  /**
   * store_users updateMany
   */
  export type store_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update store_users.
     */
    data: XOR<store_usersUpdateManyMutationInput, store_usersUncheckedUpdateManyInput>
    /**
     * Filter which store_users to update
     */
    where?: store_usersWhereInput
    /**
     * Limit how many store_users to update.
     */
    limit?: number
  }

  /**
   * store_users updateManyAndReturn
   */
  export type store_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * The data used to update store_users.
     */
    data: XOR<store_usersUpdateManyMutationInput, store_usersUncheckedUpdateManyInput>
    /**
     * Filter which store_users to update
     */
    where?: store_usersWhereInput
    /**
     * Limit how many store_users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * store_users upsert
   */
  export type store_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the store_users to update in case it exists.
     */
    where: store_usersWhereUniqueInput
    /**
     * In case the store_users found by the `where` argument doesn't exist, create a new store_users with this data.
     */
    create: XOR<store_usersCreateInput, store_usersUncheckedCreateInput>
    /**
     * In case the store_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<store_usersUpdateInput, store_usersUncheckedUpdateInput>
  }

  /**
   * store_users delete
   */
  export type store_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    /**
     * Filter which store_users to delete.
     */
    where: store_usersWhereUniqueInput
  }

  /**
   * store_users deleteMany
   */
  export type store_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store_users to delete
     */
    where?: store_usersWhereInput
    /**
     * Limit how many store_users to delete.
     */
    limit?: number
  }

  /**
   * store_users without action
   */
  export type store_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
  }


  /**
   * Model stores
   */

  export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  export type StoresAvgAggregateOutputType = {
    Id: number | null
  }

  export type StoresSumAggregateOutputType = {
    Id: number | null
  }

  export type StoresMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Cnpj: string | null
    Phone: string | null
    Address: string | null
    IsActive: boolean | null
    CreatedAtUtc: Date | null
  }

  export type StoresMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Cnpj: string | null
    Phone: string | null
    Address: string | null
    IsActive: boolean | null
    CreatedAtUtc: Date | null
  }

  export type StoresCountAggregateOutputType = {
    Id: number
    Name: number
    Cnpj: number
    Phone: number
    Address: number
    IsActive: number
    CreatedAtUtc: number
    _all: number
  }


  export type StoresAvgAggregateInputType = {
    Id?: true
  }

  export type StoresSumAggregateInputType = {
    Id?: true
  }

  export type StoresMinAggregateInputType = {
    Id?: true
    Name?: true
    Cnpj?: true
    Phone?: true
    Address?: true
    IsActive?: true
    CreatedAtUtc?: true
  }

  export type StoresMaxAggregateInputType = {
    Id?: true
    Name?: true
    Cnpj?: true
    Phone?: true
    Address?: true
    IsActive?: true
    CreatedAtUtc?: true
  }

  export type StoresCountAggregateInputType = {
    Id?: true
    Name?: true
    Cnpj?: true
    Phone?: true
    Address?: true
    IsActive?: true
    CreatedAtUtc?: true
    _all?: true
  }

  export type StoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to aggregate.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType
  }

  export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
        [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStores[P]>
      : GetScalarType<T[P], AggregateStores[P]>
  }




  export type storesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storesWhereInput
    orderBy?: storesOrderByWithAggregationInput | storesOrderByWithAggregationInput[]
    by: StoresScalarFieldEnum[] | StoresScalarFieldEnum
    having?: storesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoresCountAggregateInputType | true
    _avg?: StoresAvgAggregateInputType
    _sum?: StoresSumAggregateInputType
    _min?: StoresMinAggregateInputType
    _max?: StoresMaxAggregateInputType
  }

  export type StoresGroupByOutputType = {
    Id: number
    Name: string
    Cnpj: string | null
    Phone: string | null
    Address: string | null
    IsActive: boolean
    CreatedAtUtc: Date
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoresGroupByOutputType[P]>
            : GetScalarType<T[P], StoresGroupByOutputType[P]>
        }
      >
    >


  export type storesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Cnpj?: boolean
    Phone?: boolean
    Address?: boolean
    IsActive?: boolean
    CreatedAtUtc?: boolean
    orders?: boolean | stores$ordersArgs<ExtArgs>
    products?: boolean | stores$productsArgs<ExtArgs>
    store_users?: boolean | stores$store_usersArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stores"]>

  export type storesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Cnpj?: boolean
    Phone?: boolean
    Address?: boolean
    IsActive?: boolean
    CreatedAtUtc?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Cnpj?: boolean
    Phone?: boolean
    Address?: boolean
    IsActive?: boolean
    CreatedAtUtc?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectScalar = {
    Id?: boolean
    Name?: boolean
    Cnpj?: boolean
    Phone?: boolean
    Address?: boolean
    IsActive?: boolean
    CreatedAtUtc?: boolean
  }

  export type storesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Cnpj" | "Phone" | "Address" | "IsActive" | "CreatedAtUtc", ExtArgs["result"]["stores"]>
  export type storesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | stores$ordersArgs<ExtArgs>
    products?: boolean | stores$productsArgs<ExtArgs>
    store_users?: boolean | stores$store_usersArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type storesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $storesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stores"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
      store_users: Prisma.$store_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Cnpj: string | null
      Phone: string | null
      Address: string | null
      IsActive: boolean
      CreatedAtUtc: Date
    }, ExtArgs["result"]["stores"]>
    composites: {}
  }

  type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = $Result.GetResult<Prisma.$storesPayload, S>

  type storesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoresCountAggregateInputType | true
    }

  export interface storesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stores'], meta: { name: 'stores' } }
    /**
     * Find zero or one Stores that matches the filter.
     * @param {storesFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storesFindUniqueArgs>(args: SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storesFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storesFindFirstArgs>(args?: SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const storesWithIdOnly = await prisma.stores.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends storesFindManyArgs>(args?: SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stores.
     * @param {storesCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     * 
     */
    create<T extends storesCreateArgs>(args: SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storesCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storesCreateManyArgs>(args?: SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storesCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `Id`
     * const storesWithIdOnly = await prisma.stores.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storesCreateManyAndReturnArgs>(args?: SelectSubset<T, storesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stores.
     * @param {storesDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     * 
     */
    delete<T extends storesDeleteArgs>(args: SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stores.
     * @param {storesUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storesUpdateArgs>(args: SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storesDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storesDeleteManyArgs>(args?: SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storesUpdateManyArgs>(args: SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storesUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `Id`
     * const storesWithIdOnly = await prisma.stores.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends storesUpdateManyAndReturnArgs>(args: SelectSubset<T, storesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stores.
     * @param {storesUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends storesUpsertArgs>(args: SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storesCountArgs>(
      args?: Subset<T, storesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoresAggregateArgs>(args: Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>

    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storesGroupByArgs['orderBy'] }
        : { orderBy?: storesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stores model
   */
  readonly fields: storesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends stores$ordersArgs<ExtArgs> = {}>(args?: Subset<T, stores$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends stores$productsArgs<ExtArgs> = {}>(args?: Subset<T, stores$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    store_users<T extends stores$store_usersArgs<ExtArgs> = {}>(args?: Subset<T, stores$store_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stores model
   */
  interface storesFieldRefs {
    readonly Id: FieldRef<"stores", 'Int'>
    readonly Name: FieldRef<"stores", 'String'>
    readonly Cnpj: FieldRef<"stores", 'String'>
    readonly Phone: FieldRef<"stores", 'String'>
    readonly Address: FieldRef<"stores", 'String'>
    readonly IsActive: FieldRef<"stores", 'Boolean'>
    readonly CreatedAtUtc: FieldRef<"stores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stores findUnique
   */
  export type storesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findUniqueOrThrow
   */
  export type storesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findFirst
   */
  export type storesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findFirstOrThrow
   */
  export type storesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findMany
   */
  export type storesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores create
   */
  export type storesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to create a stores.
     */
    data: XOR<storesCreateInput, storesUncheckedCreateInput>
  }

  /**
   * stores createMany
   */
  export type storesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores createManyAndReturn
   */
  export type storesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores update
   */
  export type storesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to update a stores.
     */
    data: XOR<storesUpdateInput, storesUncheckedUpdateInput>
    /**
     * Choose, which stores to update.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores updateMany
   */
  export type storesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores updateManyAndReturn
   */
  export type storesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores upsert
   */
  export type storesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The filter to search for the stores to update in case it exists.
     */
    where: storesWhereUniqueInput
    /**
     * In case the stores found by the `where` argument doesn't exist, create a new stores with this data.
     */
    create: XOR<storesCreateInput, storesUncheckedCreateInput>
    /**
     * In case the stores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storesUpdateInput, storesUncheckedUpdateInput>
  }

  /**
   * stores delete
   */
  export type storesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter which stores to delete.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores deleteMany
   */
  export type storesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * stores.orders
   */
  export type stores$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * stores.products
   */
  export type stores$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * stores.store_users
   */
  export type stores$store_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    where?: store_usersWhereInput
    orderBy?: store_usersOrderByWithRelationInput | store_usersOrderByWithRelationInput[]
    cursor?: store_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Store_usersScalarFieldEnum | Store_usersScalarFieldEnum[]
  }

  /**
   * stores without action
   */
  export type storesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    Id: number | null
  }

  export type UsersSumAggregateOutputType = {
    Id: number | null
  }

  export type UsersMinAggregateOutputType = {
    Id: number | null
    Username: string | null
    UsernameNormalized: string | null
    PasswordHash: string | null
    CreatedAtUtc: Date | null
    LastLoginAtUtc: Date | null
    Email: string | null
    IsActive: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    Id: number | null
    Username: string | null
    UsernameNormalized: string | null
    PasswordHash: string | null
    CreatedAtUtc: Date | null
    LastLoginAtUtc: Date | null
    Email: string | null
    IsActive: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    Id: number
    Username: number
    UsernameNormalized: number
    PasswordHash: number
    CreatedAtUtc: number
    LastLoginAtUtc: number
    Email: number
    IsActive: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    Id?: true
  }

  export type UsersSumAggregateInputType = {
    Id?: true
  }

  export type UsersMinAggregateInputType = {
    Id?: true
    Username?: true
    UsernameNormalized?: true
    PasswordHash?: true
    CreatedAtUtc?: true
    LastLoginAtUtc?: true
    Email?: true
    IsActive?: true
  }

  export type UsersMaxAggregateInputType = {
    Id?: true
    Username?: true
    UsernameNormalized?: true
    PasswordHash?: true
    CreatedAtUtc?: true
    LastLoginAtUtc?: true
    Email?: true
    IsActive?: true
  }

  export type UsersCountAggregateInputType = {
    Id?: true
    Username?: true
    UsernameNormalized?: true
    PasswordHash?: true
    CreatedAtUtc?: true
    LastLoginAtUtc?: true
    Email?: true
    IsActive?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    Id: number
    Username: string
    UsernameNormalized: string
    PasswordHash: string
    CreatedAtUtc: Date
    LastLoginAtUtc: Date | null
    Email: string | null
    IsActive: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    UsernameNormalized?: boolean
    PasswordHash?: boolean
    CreatedAtUtc?: boolean
    LastLoginAtUtc?: boolean
    Email?: boolean
    IsActive?: boolean
    store_users?: boolean | users$store_usersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    UsernameNormalized?: boolean
    PasswordHash?: boolean
    CreatedAtUtc?: boolean
    LastLoginAtUtc?: boolean
    Email?: boolean
    IsActive?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    UsernameNormalized?: boolean
    PasswordHash?: boolean
    CreatedAtUtc?: boolean
    LastLoginAtUtc?: boolean
    Email?: boolean
    IsActive?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    Id?: boolean
    Username?: boolean
    UsernameNormalized?: boolean
    PasswordHash?: boolean
    CreatedAtUtc?: boolean
    LastLoginAtUtc?: boolean
    Email?: boolean
    IsActive?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Username" | "UsernameNormalized" | "PasswordHash" | "CreatedAtUtc" | "LastLoginAtUtc" | "Email" | "IsActive", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store_users?: boolean | users$store_usersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      store_users: Prisma.$store_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Username: string
      UsernameNormalized: string
      PasswordHash: string
      CreatedAtUtc: Date
      LastLoginAtUtc: Date | null
      Email: string | null
      IsActive: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `Id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `Id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store_users<T extends users$store_usersArgs<ExtArgs> = {}>(args?: Subset<T, users$store_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly Id: FieldRef<"users", 'Int'>
    readonly Username: FieldRef<"users", 'String'>
    readonly UsernameNormalized: FieldRef<"users", 'String'>
    readonly PasswordHash: FieldRef<"users", 'String'>
    readonly CreatedAtUtc: FieldRef<"users", 'DateTime'>
    readonly LastLoginAtUtc: FieldRef<"users", 'DateTime'>
    readonly Email: FieldRef<"users", 'String'>
    readonly IsActive: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.store_users
   */
  export type users$store_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_users
     */
    select?: store_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_users
     */
    omit?: store_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: store_usersInclude<ExtArgs> | null
    where?: store_usersWhereInput
    orderBy?: store_usersOrderByWithRelationInput | store_usersOrderByWithRelationInput[]
    cursor?: store_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Store_usersScalarFieldEnum | Store_usersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EFMigrationsHistoryScalarFieldEnum: {
    MigrationId: 'MigrationId',
    ProductVersion: 'ProductVersion'
  };

  export type EFMigrationsHistoryScalarFieldEnum = (typeof EFMigrationsHistoryScalarFieldEnum)[keyof typeof EFMigrationsHistoryScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    Id: 'Id',
    OrderId: 'OrderId',
    ProductId: 'ProductId',
    Quantity: 'Quantity',
    LineTotal: 'LineTotal',
    Cfop: 'Cfop',
    Csosn: 'Csosn',
    Cst: 'Cst',
    Ncm: 'Ncm',
    ProductDescription: 'ProductDescription',
    ProductItemCode: 'ProductItemCode',
    ProductReference: 'ProductReference',
    SalePrice: 'SalePrice'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    Id: 'Id',
    CreatedByUserId: 'CreatedByUserId',
    CreatedByUsername: 'CreatedByUsername',
    Status: 'Status',
    TotalAmount: 'TotalAmount',
    CreatedAtUtc: 'CreatedAtUtc',
    CustomerName: 'CustomerName',
    Observations: 'Observations',
    StoreId: 'StoreId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    Id: 'Id',
    Description: 'Description',
    CreatedAtUtc: 'CreatedAtUtc',
    UpdatedAtUtc: 'UpdatedAtUtc',
    Cfop: 'Cfop',
    Csosn: 'Csosn',
    Cst: 'Cst',
    ItemCode: 'ItemCode',
    Ncm: 'Ncm',
    PurchasePrice: 'PurchasePrice',
    Reference: 'Reference',
    SalePrice: 'SalePrice',
    StockBalance: 'StockBalance',
    StoreId: 'StoreId',
    ImageKey1: 'ImageKey1',
    ImageKey2: 'ImageKey2',
    ImageUrl1: 'ImageUrl1',
    ImageUrl2: 'ImageUrl2'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Store_usersScalarFieldEnum: {
    Id: 'Id',
    StoreId: 'StoreId',
    UserId: 'UserId',
    Role: 'Role',
    CreatedAtUtc: 'CreatedAtUtc',
    IsActive: 'IsActive'
  };

  export type Store_usersScalarFieldEnum = (typeof Store_usersScalarFieldEnum)[keyof typeof Store_usersScalarFieldEnum]


  export const StoresScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Cnpj: 'Cnpj',
    Phone: 'Phone',
    Address: 'Address',
    IsActive: 'IsActive',
    CreatedAtUtc: 'CreatedAtUtc'
  };

  export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    UsernameNormalized: 'UsernameNormalized',
    PasswordHash: 'PasswordHash',
    CreatedAtUtc: 'CreatedAtUtc',
    LastLoginAtUtc: 'LastLoginAtUtc',
    Email: 'Email',
    IsActive: 'IsActive'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type EFMigrationsHistoryWhereInput = {
    AND?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    OR?: EFMigrationsHistoryWhereInput[]
    NOT?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    MigrationId?: StringFilter<"EFMigrationsHistory"> | string
    ProductVersion?: StringFilter<"EFMigrationsHistory"> | string
  }

  export type EFMigrationsHistoryOrderByWithRelationInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryWhereUniqueInput = Prisma.AtLeast<{
    MigrationId?: string
    AND?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    OR?: EFMigrationsHistoryWhereInput[]
    NOT?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    ProductVersion?: StringFilter<"EFMigrationsHistory"> | string
  }, "MigrationId">

  export type EFMigrationsHistoryOrderByWithAggregationInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
    _count?: EFMigrationsHistoryCountOrderByAggregateInput
    _max?: EFMigrationsHistoryMaxOrderByAggregateInput
    _min?: EFMigrationsHistoryMinOrderByAggregateInput
  }

  export type EFMigrationsHistoryScalarWhereWithAggregatesInput = {
    AND?: EFMigrationsHistoryScalarWhereWithAggregatesInput | EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    OR?: EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    NOT?: EFMigrationsHistoryScalarWhereWithAggregatesInput | EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    MigrationId?: StringWithAggregatesFilter<"EFMigrationsHistory"> | string
    ProductVersion?: StringWithAggregatesFilter<"EFMigrationsHistory"> | string
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    Id?: IntFilter<"order_items"> | number
    OrderId?: IntFilter<"order_items"> | number
    ProductId?: IntNullableFilter<"order_items"> | number | null
    Quantity?: IntFilter<"order_items"> | number
    LineTotal?: FloatFilter<"order_items"> | number
    Cfop?: StringFilter<"order_items"> | string
    Csosn?: StringFilter<"order_items"> | string
    Cst?: StringFilter<"order_items"> | string
    Ncm?: StringFilter<"order_items"> | string
    ProductDescription?: StringFilter<"order_items"> | string
    ProductItemCode?: StringFilter<"order_items"> | string
    ProductReference?: StringFilter<"order_items"> | string
    SalePrice?: FloatFilter<"order_items"> | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type order_itemsOrderByWithRelationInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    ProductId?: SortOrderInput | SortOrder
    Quantity?: SortOrder
    LineTotal?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    Ncm?: SortOrder
    ProductDescription?: SortOrder
    ProductItemCode?: SortOrder
    ProductReference?: SortOrder
    SalePrice?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    OrderId?: IntFilter<"order_items"> | number
    ProductId?: IntNullableFilter<"order_items"> | number | null
    Quantity?: IntFilter<"order_items"> | number
    LineTotal?: FloatFilter<"order_items"> | number
    Cfop?: StringFilter<"order_items"> | string
    Csosn?: StringFilter<"order_items"> | string
    Cst?: StringFilter<"order_items"> | string
    Ncm?: StringFilter<"order_items"> | string
    ProductDescription?: StringFilter<"order_items"> | string
    ProductItemCode?: StringFilter<"order_items"> | string
    ProductReference?: StringFilter<"order_items"> | string
    SalePrice?: FloatFilter<"order_items"> | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "Id">

  export type order_itemsOrderByWithAggregationInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    ProductId?: SortOrderInput | SortOrder
    Quantity?: SortOrder
    LineTotal?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    Ncm?: SortOrder
    ProductDescription?: SortOrder
    ProductItemCode?: SortOrder
    ProductReference?: SortOrder
    SalePrice?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"order_items"> | number
    OrderId?: IntWithAggregatesFilter<"order_items"> | number
    ProductId?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    Quantity?: IntWithAggregatesFilter<"order_items"> | number
    LineTotal?: FloatWithAggregatesFilter<"order_items"> | number
    Cfop?: StringWithAggregatesFilter<"order_items"> | string
    Csosn?: StringWithAggregatesFilter<"order_items"> | string
    Cst?: StringWithAggregatesFilter<"order_items"> | string
    Ncm?: StringWithAggregatesFilter<"order_items"> | string
    ProductDescription?: StringWithAggregatesFilter<"order_items"> | string
    ProductItemCode?: StringWithAggregatesFilter<"order_items"> | string
    ProductReference?: StringWithAggregatesFilter<"order_items"> | string
    SalePrice?: FloatWithAggregatesFilter<"order_items"> | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    Id?: IntFilter<"orders"> | number
    CreatedByUserId?: IntFilter<"orders"> | number
    CreatedByUsername?: StringFilter<"orders"> | string
    Status?: StringFilter<"orders"> | string
    TotalAmount?: FloatFilter<"orders"> | number
    CreatedAtUtc?: DateTimeFilter<"orders"> | Date | string
    CustomerName?: StringNullableFilter<"orders"> | string | null
    Observations?: StringNullableFilter<"orders"> | string | null
    StoreId?: IntFilter<"orders"> | number
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    Id?: SortOrder
    CreatedByUserId?: SortOrder
    CreatedByUsername?: SortOrder
    Status?: SortOrder
    TotalAmount?: SortOrder
    CreatedAtUtc?: SortOrder
    CustomerName?: SortOrderInput | SortOrder
    Observations?: SortOrderInput | SortOrder
    StoreId?: SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    stores?: storesOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    CreatedByUserId?: IntFilter<"orders"> | number
    CreatedByUsername?: StringFilter<"orders"> | string
    Status?: StringFilter<"orders"> | string
    TotalAmount?: FloatFilter<"orders"> | number
    CreatedAtUtc?: DateTimeFilter<"orders"> | Date | string
    CustomerName?: StringNullableFilter<"orders"> | string | null
    Observations?: StringNullableFilter<"orders"> | string | null
    StoreId?: IntFilter<"orders"> | number
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }, "Id">

  export type ordersOrderByWithAggregationInput = {
    Id?: SortOrder
    CreatedByUserId?: SortOrder
    CreatedByUsername?: SortOrder
    Status?: SortOrder
    TotalAmount?: SortOrder
    CreatedAtUtc?: SortOrder
    CustomerName?: SortOrderInput | SortOrder
    Observations?: SortOrderInput | SortOrder
    StoreId?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"orders"> | number
    CreatedByUserId?: IntWithAggregatesFilter<"orders"> | number
    CreatedByUsername?: StringWithAggregatesFilter<"orders"> | string
    Status?: StringWithAggregatesFilter<"orders"> | string
    TotalAmount?: FloatWithAggregatesFilter<"orders"> | number
    CreatedAtUtc?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    CustomerName?: StringNullableWithAggregatesFilter<"orders"> | string | null
    Observations?: StringNullableWithAggregatesFilter<"orders"> | string | null
    StoreId?: IntWithAggregatesFilter<"orders"> | number
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    Id?: IntFilter<"products"> | number
    Description?: StringFilter<"products"> | string
    CreatedAtUtc?: DateTimeFilter<"products"> | Date | string
    UpdatedAtUtc?: DateTimeNullableFilter<"products"> | Date | string | null
    Cfop?: StringFilter<"products"> | string
    Csosn?: StringFilter<"products"> | string
    Cst?: StringFilter<"products"> | string
    ItemCode?: StringFilter<"products"> | string
    Ncm?: StringFilter<"products"> | string
    PurchasePrice?: FloatFilter<"products"> | number
    Reference?: StringFilter<"products"> | string
    SalePrice?: FloatFilter<"products"> | number
    StockBalance?: IntFilter<"products"> | number
    StoreId?: IntFilter<"products"> | number
    ImageKey1?: StringNullableFilter<"products"> | string | null
    ImageKey2?: StringNullableFilter<"products"> | string | null
    ImageUrl1?: StringNullableFilter<"products"> | string | null
    ImageUrl2?: StringNullableFilter<"products"> | string | null
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }

  export type productsOrderByWithRelationInput = {
    Id?: SortOrder
    Description?: SortOrder
    CreatedAtUtc?: SortOrder
    UpdatedAtUtc?: SortOrderInput | SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    ItemCode?: SortOrder
    Ncm?: SortOrder
    PurchasePrice?: SortOrder
    Reference?: SortOrder
    SalePrice?: SortOrder
    StockBalance?: SortOrder
    StoreId?: SortOrder
    ImageKey1?: SortOrderInput | SortOrder
    ImageKey2?: SortOrderInput | SortOrder
    ImageUrl1?: SortOrderInput | SortOrder
    ImageUrl2?: SortOrderInput | SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    stores?: storesOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    StoreId_ItemCode?: productsStoreIdItemCodeCompoundUniqueInput
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    Description?: StringFilter<"products"> | string
    CreatedAtUtc?: DateTimeFilter<"products"> | Date | string
    UpdatedAtUtc?: DateTimeNullableFilter<"products"> | Date | string | null
    Cfop?: StringFilter<"products"> | string
    Csosn?: StringFilter<"products"> | string
    Cst?: StringFilter<"products"> | string
    ItemCode?: StringFilter<"products"> | string
    Ncm?: StringFilter<"products"> | string
    PurchasePrice?: FloatFilter<"products"> | number
    Reference?: StringFilter<"products"> | string
    SalePrice?: FloatFilter<"products"> | number
    StockBalance?: IntFilter<"products"> | number
    StoreId?: IntFilter<"products"> | number
    ImageKey1?: StringNullableFilter<"products"> | string | null
    ImageKey2?: StringNullableFilter<"products"> | string | null
    ImageUrl1?: StringNullableFilter<"products"> | string | null
    ImageUrl2?: StringNullableFilter<"products"> | string | null
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }, "Id" | "StoreId_ItemCode">

  export type productsOrderByWithAggregationInput = {
    Id?: SortOrder
    Description?: SortOrder
    CreatedAtUtc?: SortOrder
    UpdatedAtUtc?: SortOrderInput | SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    ItemCode?: SortOrder
    Ncm?: SortOrder
    PurchasePrice?: SortOrder
    Reference?: SortOrder
    SalePrice?: SortOrder
    StockBalance?: SortOrder
    StoreId?: SortOrder
    ImageKey1?: SortOrderInput | SortOrder
    ImageKey2?: SortOrderInput | SortOrder
    ImageUrl1?: SortOrderInput | SortOrder
    ImageUrl2?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"products"> | number
    Description?: StringWithAggregatesFilter<"products"> | string
    CreatedAtUtc?: DateTimeWithAggregatesFilter<"products"> | Date | string
    UpdatedAtUtc?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    Cfop?: StringWithAggregatesFilter<"products"> | string
    Csosn?: StringWithAggregatesFilter<"products"> | string
    Cst?: StringWithAggregatesFilter<"products"> | string
    ItemCode?: StringWithAggregatesFilter<"products"> | string
    Ncm?: StringWithAggregatesFilter<"products"> | string
    PurchasePrice?: FloatWithAggregatesFilter<"products"> | number
    Reference?: StringWithAggregatesFilter<"products"> | string
    SalePrice?: FloatWithAggregatesFilter<"products"> | number
    StockBalance?: IntWithAggregatesFilter<"products"> | number
    StoreId?: IntWithAggregatesFilter<"products"> | number
    ImageKey1?: StringNullableWithAggregatesFilter<"products"> | string | null
    ImageKey2?: StringNullableWithAggregatesFilter<"products"> | string | null
    ImageUrl1?: StringNullableWithAggregatesFilter<"products"> | string | null
    ImageUrl2?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type store_usersWhereInput = {
    AND?: store_usersWhereInput | store_usersWhereInput[]
    OR?: store_usersWhereInput[]
    NOT?: store_usersWhereInput | store_usersWhereInput[]
    Id?: IntFilter<"store_users"> | number
    StoreId?: IntFilter<"store_users"> | number
    UserId?: IntFilter<"store_users"> | number
    Role?: StringFilter<"store_users"> | string
    CreatedAtUtc?: DateTimeFilter<"store_users"> | Date | string
    IsActive?: BoolFilter<"store_users"> | boolean
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type store_usersOrderByWithRelationInput = {
    Id?: SortOrder
    StoreId?: SortOrder
    UserId?: SortOrder
    Role?: SortOrder
    CreatedAtUtc?: SortOrder
    IsActive?: SortOrder
    stores?: storesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type store_usersWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    StoreId_UserId?: store_usersStoreIdUserIdCompoundUniqueInput
    AND?: store_usersWhereInput | store_usersWhereInput[]
    OR?: store_usersWhereInput[]
    NOT?: store_usersWhereInput | store_usersWhereInput[]
    StoreId?: IntFilter<"store_users"> | number
    UserId?: IntFilter<"store_users"> | number
    Role?: StringFilter<"store_users"> | string
    CreatedAtUtc?: DateTimeFilter<"store_users"> | Date | string
    IsActive?: BoolFilter<"store_users"> | boolean
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "Id" | "StoreId_UserId">

  export type store_usersOrderByWithAggregationInput = {
    Id?: SortOrder
    StoreId?: SortOrder
    UserId?: SortOrder
    Role?: SortOrder
    CreatedAtUtc?: SortOrder
    IsActive?: SortOrder
    _count?: store_usersCountOrderByAggregateInput
    _avg?: store_usersAvgOrderByAggregateInput
    _max?: store_usersMaxOrderByAggregateInput
    _min?: store_usersMinOrderByAggregateInput
    _sum?: store_usersSumOrderByAggregateInput
  }

  export type store_usersScalarWhereWithAggregatesInput = {
    AND?: store_usersScalarWhereWithAggregatesInput | store_usersScalarWhereWithAggregatesInput[]
    OR?: store_usersScalarWhereWithAggregatesInput[]
    NOT?: store_usersScalarWhereWithAggregatesInput | store_usersScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"store_users"> | number
    StoreId?: IntWithAggregatesFilter<"store_users"> | number
    UserId?: IntWithAggregatesFilter<"store_users"> | number
    Role?: StringWithAggregatesFilter<"store_users"> | string
    CreatedAtUtc?: DateTimeWithAggregatesFilter<"store_users"> | Date | string
    IsActive?: BoolWithAggregatesFilter<"store_users"> | boolean
  }

  export type storesWhereInput = {
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    Id?: IntFilter<"stores"> | number
    Name?: StringFilter<"stores"> | string
    Cnpj?: StringNullableFilter<"stores"> | string | null
    Phone?: StringNullableFilter<"stores"> | string | null
    Address?: StringNullableFilter<"stores"> | string | null
    IsActive?: BoolFilter<"stores"> | boolean
    CreatedAtUtc?: DateTimeFilter<"stores"> | Date | string
    orders?: OrdersListRelationFilter
    products?: ProductsListRelationFilter
    store_users?: Store_usersListRelationFilter
  }

  export type storesOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Cnpj?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    CreatedAtUtc?: SortOrder
    orders?: ordersOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
    store_users?: store_usersOrderByRelationAggregateInput
  }

  export type storesWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    Name?: StringFilter<"stores"> | string
    Cnpj?: StringNullableFilter<"stores"> | string | null
    Phone?: StringNullableFilter<"stores"> | string | null
    Address?: StringNullableFilter<"stores"> | string | null
    IsActive?: BoolFilter<"stores"> | boolean
    CreatedAtUtc?: DateTimeFilter<"stores"> | Date | string
    orders?: OrdersListRelationFilter
    products?: ProductsListRelationFilter
    store_users?: Store_usersListRelationFilter
  }, "Id">

  export type storesOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Cnpj?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    CreatedAtUtc?: SortOrder
    _count?: storesCountOrderByAggregateInput
    _avg?: storesAvgOrderByAggregateInput
    _max?: storesMaxOrderByAggregateInput
    _min?: storesMinOrderByAggregateInput
    _sum?: storesSumOrderByAggregateInput
  }

  export type storesScalarWhereWithAggregatesInput = {
    AND?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    OR?: storesScalarWhereWithAggregatesInput[]
    NOT?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"stores"> | number
    Name?: StringWithAggregatesFilter<"stores"> | string
    Cnpj?: StringNullableWithAggregatesFilter<"stores"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"stores"> | string | null
    Address?: StringNullableWithAggregatesFilter<"stores"> | string | null
    IsActive?: BoolWithAggregatesFilter<"stores"> | boolean
    CreatedAtUtc?: DateTimeWithAggregatesFilter<"stores"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    Id?: IntFilter<"users"> | number
    Username?: StringFilter<"users"> | string
    UsernameNormalized?: StringFilter<"users"> | string
    PasswordHash?: StringFilter<"users"> | string
    CreatedAtUtc?: DateTimeFilter<"users"> | Date | string
    LastLoginAtUtc?: DateTimeNullableFilter<"users"> | Date | string | null
    Email?: StringNullableFilter<"users"> | string | null
    IsActive?: BoolFilter<"users"> | boolean
    store_users?: Store_usersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    Id?: SortOrder
    Username?: SortOrder
    UsernameNormalized?: SortOrder
    PasswordHash?: SortOrder
    CreatedAtUtc?: SortOrder
    LastLoginAtUtc?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    store_users?: store_usersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    UsernameNormalized?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    Username?: StringFilter<"users"> | string
    PasswordHash?: StringFilter<"users"> | string
    CreatedAtUtc?: DateTimeFilter<"users"> | Date | string
    LastLoginAtUtc?: DateTimeNullableFilter<"users"> | Date | string | null
    Email?: StringNullableFilter<"users"> | string | null
    IsActive?: BoolFilter<"users"> | boolean
    store_users?: Store_usersListRelationFilter
  }, "Id" | "UsernameNormalized">

  export type usersOrderByWithAggregationInput = {
    Id?: SortOrder
    Username?: SortOrder
    UsernameNormalized?: SortOrder
    PasswordHash?: SortOrder
    CreatedAtUtc?: SortOrder
    LastLoginAtUtc?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"users"> | number
    Username?: StringWithAggregatesFilter<"users"> | string
    UsernameNormalized?: StringWithAggregatesFilter<"users"> | string
    PasswordHash?: StringWithAggregatesFilter<"users"> | string
    CreatedAtUtc?: DateTimeWithAggregatesFilter<"users"> | Date | string
    LastLoginAtUtc?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    Email?: StringNullableWithAggregatesFilter<"users"> | string | null
    IsActive?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type EFMigrationsHistoryCreateInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUncheckedCreateInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUpdateInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryUncheckedUpdateInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryCreateManyInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUpdateManyMutationInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryUncheckedUpdateManyInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsCreateInput = {
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
    products?: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    Id?: number
    OrderId: number
    ProductId?: number | null
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
  }

  export type order_itemsUpdateInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    ProductId?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemsCreateManyInput = {
    Id?: number
    OrderId: number
    ProductId?: number | null
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
  }

  export type order_itemsUpdateManyMutationInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    ProductId?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ordersCreateInput = {
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    stores: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    Id?: number
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
    StoreId: number
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    stores?: storesUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
    StoreId?: IntFieldUpdateOperationsInput | number
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    Id?: number
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
    StoreId: number
  }

  export type ordersUpdateManyMutationInput = {
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
    StoreId?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateInput = {
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    stores: storesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    Id?: number
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    StoreId: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    stores?: storesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    Id?: number
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    StoreId: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
  }

  export type productsUpdateManyMutationInput = {
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type store_usersCreateInput = {
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
    stores: storesCreateNestedOneWithoutStore_usersInput
    users: usersCreateNestedOneWithoutStore_usersInput
  }

  export type store_usersUncheckedCreateInput = {
    Id?: number
    StoreId: number
    UserId: number
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
  }

  export type store_usersUpdateInput = {
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    stores?: storesUpdateOneRequiredWithoutStore_usersNestedInput
    users?: usersUpdateOneRequiredWithoutStore_usersNestedInput
  }

  export type store_usersUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type store_usersCreateManyInput = {
    Id?: number
    StoreId: number
    UserId: number
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
  }

  export type store_usersUpdateManyMutationInput = {
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type store_usersUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type storesCreateInput = {
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    orders?: ordersCreateNestedManyWithoutStoresInput
    products?: productsCreateNestedManyWithoutStoresInput
    store_users?: store_usersCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateInput = {
    Id?: number
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    products?: productsUncheckedCreateNestedManyWithoutStoresInput
    store_users?: store_usersUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutStoresNestedInput
    products?: productsUpdateManyWithoutStoresNestedInput
    store_users?: store_usersUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    products?: productsUncheckedUpdateManyWithoutStoresNestedInput
    store_users?: store_usersUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type storesCreateManyInput = {
    Id?: number
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
  }

  export type storesUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storesUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    Username: string
    UsernameNormalized: string
    PasswordHash: string
    CreatedAtUtc?: Date | string
    LastLoginAtUtc?: Date | string | null
    Email?: string | null
    IsActive?: boolean
    store_users?: store_usersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    Id?: number
    Username: string
    UsernameNormalized: string
    PasswordHash: string
    CreatedAtUtc?: Date | string
    LastLoginAtUtc?: Date | string | null
    Email?: string | null
    IsActive?: boolean
    store_users?: store_usersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    Username?: StringFieldUpdateOperationsInput | string
    UsernameNormalized?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLoginAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    store_users?: store_usersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    UsernameNormalized?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLoginAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    store_users?: store_usersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    Id?: number
    Username: string
    UsernameNormalized: string
    PasswordHash: string
    CreatedAtUtc?: Date | string
    LastLoginAtUtc?: Date | string | null
    Email?: string | null
    IsActive?: boolean
  }

  export type usersUpdateManyMutationInput = {
    Username?: StringFieldUpdateOperationsInput | string
    UsernameNormalized?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLoginAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    UsernameNormalized?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLoginAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EFMigrationsHistoryCountOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryMaxOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryMinOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null
    isNot?: productsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type order_itemsCountOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
    LineTotal?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    Ncm?: SortOrder
    ProductDescription?: SortOrder
    ProductItemCode?: SortOrder
    ProductReference?: SortOrder
    SalePrice?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
    LineTotal?: SortOrder
    SalePrice?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
    LineTotal?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    Ncm?: SortOrder
    ProductDescription?: SortOrder
    ProductItemCode?: SortOrder
    ProductReference?: SortOrder
    SalePrice?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
    LineTotal?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    Ncm?: SortOrder
    ProductDescription?: SortOrder
    ProductItemCode?: SortOrder
    ProductReference?: SortOrder
    SalePrice?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
    LineTotal?: SortOrder
    SalePrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type StoresScalarRelationFilter = {
    is?: storesWhereInput
    isNot?: storesWhereInput
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    Id?: SortOrder
    CreatedByUserId?: SortOrder
    CreatedByUsername?: SortOrder
    Status?: SortOrder
    TotalAmount?: SortOrder
    CreatedAtUtc?: SortOrder
    CustomerName?: SortOrder
    Observations?: SortOrder
    StoreId?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    Id?: SortOrder
    CreatedByUserId?: SortOrder
    TotalAmount?: SortOrder
    StoreId?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    Id?: SortOrder
    CreatedByUserId?: SortOrder
    CreatedByUsername?: SortOrder
    Status?: SortOrder
    TotalAmount?: SortOrder
    CreatedAtUtc?: SortOrder
    CustomerName?: SortOrder
    Observations?: SortOrder
    StoreId?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    Id?: SortOrder
    CreatedByUserId?: SortOrder
    CreatedByUsername?: SortOrder
    Status?: SortOrder
    TotalAmount?: SortOrder
    CreatedAtUtc?: SortOrder
    CustomerName?: SortOrder
    Observations?: SortOrder
    StoreId?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    Id?: SortOrder
    CreatedByUserId?: SortOrder
    TotalAmount?: SortOrder
    StoreId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type productsStoreIdItemCodeCompoundUniqueInput = {
    StoreId: number
    ItemCode: string
  }

  export type productsCountOrderByAggregateInput = {
    Id?: SortOrder
    Description?: SortOrder
    CreatedAtUtc?: SortOrder
    UpdatedAtUtc?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    ItemCode?: SortOrder
    Ncm?: SortOrder
    PurchasePrice?: SortOrder
    Reference?: SortOrder
    SalePrice?: SortOrder
    StockBalance?: SortOrder
    StoreId?: SortOrder
    ImageKey1?: SortOrder
    ImageKey2?: SortOrder
    ImageUrl1?: SortOrder
    ImageUrl2?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    Id?: SortOrder
    PurchasePrice?: SortOrder
    SalePrice?: SortOrder
    StockBalance?: SortOrder
    StoreId?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Description?: SortOrder
    CreatedAtUtc?: SortOrder
    UpdatedAtUtc?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    ItemCode?: SortOrder
    Ncm?: SortOrder
    PurchasePrice?: SortOrder
    Reference?: SortOrder
    SalePrice?: SortOrder
    StockBalance?: SortOrder
    StoreId?: SortOrder
    ImageKey1?: SortOrder
    ImageKey2?: SortOrder
    ImageUrl1?: SortOrder
    ImageUrl2?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    Id?: SortOrder
    Description?: SortOrder
    CreatedAtUtc?: SortOrder
    UpdatedAtUtc?: SortOrder
    Cfop?: SortOrder
    Csosn?: SortOrder
    Cst?: SortOrder
    ItemCode?: SortOrder
    Ncm?: SortOrder
    PurchasePrice?: SortOrder
    Reference?: SortOrder
    SalePrice?: SortOrder
    StockBalance?: SortOrder
    StoreId?: SortOrder
    ImageKey1?: SortOrder
    ImageKey2?: SortOrder
    ImageUrl1?: SortOrder
    ImageUrl2?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    Id?: SortOrder
    PurchasePrice?: SortOrder
    SalePrice?: SortOrder
    StockBalance?: SortOrder
    StoreId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type store_usersStoreIdUserIdCompoundUniqueInput = {
    StoreId: number
    UserId: number
  }

  export type store_usersCountOrderByAggregateInput = {
    Id?: SortOrder
    StoreId?: SortOrder
    UserId?: SortOrder
    Role?: SortOrder
    CreatedAtUtc?: SortOrder
    IsActive?: SortOrder
  }

  export type store_usersAvgOrderByAggregateInput = {
    Id?: SortOrder
    StoreId?: SortOrder
    UserId?: SortOrder
  }

  export type store_usersMaxOrderByAggregateInput = {
    Id?: SortOrder
    StoreId?: SortOrder
    UserId?: SortOrder
    Role?: SortOrder
    CreatedAtUtc?: SortOrder
    IsActive?: SortOrder
  }

  export type store_usersMinOrderByAggregateInput = {
    Id?: SortOrder
    StoreId?: SortOrder
    UserId?: SortOrder
    Role?: SortOrder
    CreatedAtUtc?: SortOrder
    IsActive?: SortOrder
  }

  export type store_usersSumOrderByAggregateInput = {
    Id?: SortOrder
    StoreId?: SortOrder
    UserId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type Store_usersListRelationFilter = {
    every?: store_usersWhereInput
    some?: store_usersWhereInput
    none?: store_usersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type store_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storesCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Cnpj?: SortOrder
    Phone?: SortOrder
    Address?: SortOrder
    IsActive?: SortOrder
    CreatedAtUtc?: SortOrder
  }

  export type storesAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type storesMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Cnpj?: SortOrder
    Phone?: SortOrder
    Address?: SortOrder
    IsActive?: SortOrder
    CreatedAtUtc?: SortOrder
  }

  export type storesMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Cnpj?: SortOrder
    Phone?: SortOrder
    Address?: SortOrder
    IsActive?: SortOrder
    CreatedAtUtc?: SortOrder
  }

  export type storesSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    UsernameNormalized?: SortOrder
    PasswordHash?: SortOrder
    CreatedAtUtc?: SortOrder
    LastLoginAtUtc?: SortOrder
    Email?: SortOrder
    IsActive?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    UsernameNormalized?: SortOrder
    PasswordHash?: SortOrder
    CreatedAtUtc?: SortOrder
    LastLoginAtUtc?: SortOrder
    Email?: SortOrder
    IsActive?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    UsernameNormalized?: SortOrder
    PasswordHash?: SortOrder
    CreatedAtUtc?: SortOrder
    LastLoginAtUtc?: SortOrder
    Email?: SortOrder
    IsActive?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type storesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    connect?: storesWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type storesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    upsert?: storesUpsertWithoutOrdersInput
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutOrdersInput, storesUpdateWithoutOrdersInput>, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type storesCreateNestedOneWithoutProductsInput = {
    create?: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storesCreateOrConnectWithoutProductsInput
    connect?: storesWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type storesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storesCreateOrConnectWithoutProductsInput
    upsert?: storesUpsertWithoutProductsInput
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutProductsInput, storesUpdateWithoutProductsInput>, storesUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type storesCreateNestedOneWithoutStore_usersInput = {
    create?: XOR<storesCreateWithoutStore_usersInput, storesUncheckedCreateWithoutStore_usersInput>
    connectOrCreate?: storesCreateOrConnectWithoutStore_usersInput
    connect?: storesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutStore_usersInput = {
    create?: XOR<usersCreateWithoutStore_usersInput, usersUncheckedCreateWithoutStore_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutStore_usersInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type storesUpdateOneRequiredWithoutStore_usersNestedInput = {
    create?: XOR<storesCreateWithoutStore_usersInput, storesUncheckedCreateWithoutStore_usersInput>
    connectOrCreate?: storesCreateOrConnectWithoutStore_usersInput
    upsert?: storesUpsertWithoutStore_usersInput
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutStore_usersInput, storesUpdateWithoutStore_usersInput>, storesUncheckedUpdateWithoutStore_usersInput>
  }

  export type usersUpdateOneRequiredWithoutStore_usersNestedInput = {
    create?: XOR<usersCreateWithoutStore_usersInput, usersUncheckedCreateWithoutStore_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutStore_usersInput
    upsert?: usersUpsertWithoutStore_usersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStore_usersInput, usersUpdateWithoutStore_usersInput>, usersUncheckedUpdateWithoutStore_usersInput>
  }

  export type ordersCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutStoresInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type store_usersCreateNestedManyWithoutStoresInput = {
    create?: XOR<store_usersCreateWithoutStoresInput, store_usersUncheckedCreateWithoutStoresInput> | store_usersCreateWithoutStoresInput[] | store_usersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutStoresInput | store_usersCreateOrConnectWithoutStoresInput[]
    createMany?: store_usersCreateManyStoresInputEnvelope
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type store_usersUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<store_usersCreateWithoutStoresInput, store_usersUncheckedCreateWithoutStoresInput> | store_usersCreateWithoutStoresInput[] | store_usersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutStoresInput | store_usersCreateOrConnectWithoutStoresInput[]
    createMany?: store_usersCreateManyStoresInputEnvelope
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type productsUpdateManyWithoutStoresNestedInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutStoresInput | productsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutStoresInput | productsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: productsUpdateManyWithWhereWithoutStoresInput | productsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type store_usersUpdateManyWithoutStoresNestedInput = {
    create?: XOR<store_usersCreateWithoutStoresInput, store_usersUncheckedCreateWithoutStoresInput> | store_usersCreateWithoutStoresInput[] | store_usersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutStoresInput | store_usersCreateOrConnectWithoutStoresInput[]
    upsert?: store_usersUpsertWithWhereUniqueWithoutStoresInput | store_usersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: store_usersCreateManyStoresInputEnvelope
    set?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    disconnect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    delete?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    update?: store_usersUpdateWithWhereUniqueWithoutStoresInput | store_usersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: store_usersUpdateManyWithWhereWithoutStoresInput | store_usersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: store_usersScalarWhereInput | store_usersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutStoresInput | productsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutStoresInput | productsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: productsUpdateManyWithWhereWithoutStoresInput | productsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type store_usersUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<store_usersCreateWithoutStoresInput, store_usersUncheckedCreateWithoutStoresInput> | store_usersCreateWithoutStoresInput[] | store_usersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutStoresInput | store_usersCreateOrConnectWithoutStoresInput[]
    upsert?: store_usersUpsertWithWhereUniqueWithoutStoresInput | store_usersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: store_usersCreateManyStoresInputEnvelope
    set?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    disconnect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    delete?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    update?: store_usersUpdateWithWhereUniqueWithoutStoresInput | store_usersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: store_usersUpdateManyWithWhereWithoutStoresInput | store_usersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: store_usersScalarWhereInput | store_usersScalarWhereInput[]
  }

  export type store_usersCreateNestedManyWithoutUsersInput = {
    create?: XOR<store_usersCreateWithoutUsersInput, store_usersUncheckedCreateWithoutUsersInput> | store_usersCreateWithoutUsersInput[] | store_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutUsersInput | store_usersCreateOrConnectWithoutUsersInput[]
    createMany?: store_usersCreateManyUsersInputEnvelope
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
  }

  export type store_usersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<store_usersCreateWithoutUsersInput, store_usersUncheckedCreateWithoutUsersInput> | store_usersCreateWithoutUsersInput[] | store_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutUsersInput | store_usersCreateOrConnectWithoutUsersInput[]
    createMany?: store_usersCreateManyUsersInputEnvelope
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
  }

  export type store_usersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<store_usersCreateWithoutUsersInput, store_usersUncheckedCreateWithoutUsersInput> | store_usersCreateWithoutUsersInput[] | store_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutUsersInput | store_usersCreateOrConnectWithoutUsersInput[]
    upsert?: store_usersUpsertWithWhereUniqueWithoutUsersInput | store_usersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: store_usersCreateManyUsersInputEnvelope
    set?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    disconnect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    delete?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    update?: store_usersUpdateWithWhereUniqueWithoutUsersInput | store_usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: store_usersUpdateManyWithWhereWithoutUsersInput | store_usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: store_usersScalarWhereInput | store_usersScalarWhereInput[]
  }

  export type store_usersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<store_usersCreateWithoutUsersInput, store_usersUncheckedCreateWithoutUsersInput> | store_usersCreateWithoutUsersInput[] | store_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: store_usersCreateOrConnectWithoutUsersInput | store_usersCreateOrConnectWithoutUsersInput[]
    upsert?: store_usersUpsertWithWhereUniqueWithoutUsersInput | store_usersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: store_usersCreateManyUsersInputEnvelope
    set?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    disconnect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    delete?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    connect?: store_usersWhereUniqueInput | store_usersWhereUniqueInput[]
    update?: store_usersUpdateWithWhereUniqueWithoutUsersInput | store_usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: store_usersUpdateManyWithWhereWithoutUsersInput | store_usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: store_usersScalarWhereInput | store_usersScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
    stores: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    Id?: number
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
    StoreId: number
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
    stores: storesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    Id?: number
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    StoreId: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
    stores?: storesUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
    StoreId?: IntFieldUpdateOperationsInput | number
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    stores?: storesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateWithoutOrdersInput = {
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
    products?: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    Id?: number
    ProductId?: number | null
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type storesCreateWithoutOrdersInput = {
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    products?: productsCreateNestedManyWithoutStoresInput
    store_users?: store_usersCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutOrdersInput = {
    Id?: number
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    products?: productsUncheckedCreateNestedManyWithoutStoresInput
    store_users?: store_usersUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutOrdersInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    Id?: IntFilter<"order_items"> | number
    OrderId?: IntFilter<"order_items"> | number
    ProductId?: IntNullableFilter<"order_items"> | number | null
    Quantity?: IntFilter<"order_items"> | number
    LineTotal?: FloatFilter<"order_items"> | number
    Cfop?: StringFilter<"order_items"> | string
    Csosn?: StringFilter<"order_items"> | string
    Cst?: StringFilter<"order_items"> | string
    Ncm?: StringFilter<"order_items"> | string
    ProductDescription?: StringFilter<"order_items"> | string
    ProductItemCode?: StringFilter<"order_items"> | string
    ProductReference?: StringFilter<"order_items"> | string
    SalePrice?: FloatFilter<"order_items"> | number
  }

  export type storesUpsertWithoutOrdersInput = {
    update: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type storesUpdateWithoutOrdersInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateManyWithoutStoresNestedInput
    store_users?: store_usersUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutOrdersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUncheckedUpdateManyWithoutStoresNestedInput
    store_users?: store_usersUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type order_itemsCreateWithoutProductsInput = {
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    Id?: number
    OrderId: number
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type storesCreateWithoutProductsInput = {
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    orders?: ordersCreateNestedManyWithoutStoresInput
    store_users?: store_usersCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutProductsInput = {
    Id?: number
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    store_users?: store_usersUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutProductsInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type storesUpsertWithoutProductsInput = {
    update: XOR<storesUpdateWithoutProductsInput, storesUncheckedUpdateWithoutProductsInput>
    create: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutProductsInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutProductsInput, storesUncheckedUpdateWithoutProductsInput>
  }

  export type storesUpdateWithoutProductsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutStoresNestedInput
    store_users?: store_usersUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    store_users?: store_usersUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type storesCreateWithoutStore_usersInput = {
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    orders?: ordersCreateNestedManyWithoutStoresInput
    products?: productsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutStore_usersInput = {
    Id?: number
    Name: string
    Cnpj?: string | null
    Phone?: string | null
    Address?: string | null
    IsActive?: boolean
    CreatedAtUtc?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    products?: productsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutStore_usersInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutStore_usersInput, storesUncheckedCreateWithoutStore_usersInput>
  }

  export type usersCreateWithoutStore_usersInput = {
    Username: string
    UsernameNormalized: string
    PasswordHash: string
    CreatedAtUtc?: Date | string
    LastLoginAtUtc?: Date | string | null
    Email?: string | null
    IsActive?: boolean
  }

  export type usersUncheckedCreateWithoutStore_usersInput = {
    Id?: number
    Username: string
    UsernameNormalized: string
    PasswordHash: string
    CreatedAtUtc?: Date | string
    LastLoginAtUtc?: Date | string | null
    Email?: string | null
    IsActive?: boolean
  }

  export type usersCreateOrConnectWithoutStore_usersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStore_usersInput, usersUncheckedCreateWithoutStore_usersInput>
  }

  export type storesUpsertWithoutStore_usersInput = {
    update: XOR<storesUpdateWithoutStore_usersInput, storesUncheckedUpdateWithoutStore_usersInput>
    create: XOR<storesCreateWithoutStore_usersInput, storesUncheckedCreateWithoutStore_usersInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutStore_usersInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutStore_usersInput, storesUncheckedUpdateWithoutStore_usersInput>
  }

  export type storesUpdateWithoutStore_usersInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutStoresNestedInput
    products?: productsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutStore_usersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    products?: productsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type usersUpsertWithoutStore_usersInput = {
    update: XOR<usersUpdateWithoutStore_usersInput, usersUncheckedUpdateWithoutStore_usersInput>
    create: XOR<usersCreateWithoutStore_usersInput, usersUncheckedCreateWithoutStore_usersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStore_usersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStore_usersInput, usersUncheckedUpdateWithoutStore_usersInput>
  }

  export type usersUpdateWithoutStore_usersInput = {
    Username?: StringFieldUpdateOperationsInput | string
    UsernameNormalized?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLoginAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateWithoutStore_usersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    UsernameNormalized?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLoginAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ordersCreateWithoutStoresInput = {
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutStoresInput = {
    Id?: number
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutStoresInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersCreateManyStoresInputEnvelope = {
    data: ordersCreateManyStoresInput | ordersCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutStoresInput = {
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutStoresInput = {
    Id?: number
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutStoresInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput>
  }

  export type productsCreateManyStoresInputEnvelope = {
    data: productsCreateManyStoresInput | productsCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type store_usersCreateWithoutStoresInput = {
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
    users: usersCreateNestedOneWithoutStore_usersInput
  }

  export type store_usersUncheckedCreateWithoutStoresInput = {
    Id?: number
    UserId: number
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
  }

  export type store_usersCreateOrConnectWithoutStoresInput = {
    where: store_usersWhereUniqueInput
    create: XOR<store_usersCreateWithoutStoresInput, store_usersUncheckedCreateWithoutStoresInput>
  }

  export type store_usersCreateManyStoresInputEnvelope = {
    data: store_usersCreateManyStoresInput | store_usersCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
  }

  export type ordersUpdateManyWithWhereWithoutStoresInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutStoresInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    Id?: IntFilter<"orders"> | number
    CreatedByUserId?: IntFilter<"orders"> | number
    CreatedByUsername?: StringFilter<"orders"> | string
    Status?: StringFilter<"orders"> | string
    TotalAmount?: FloatFilter<"orders"> | number
    CreatedAtUtc?: DateTimeFilter<"orders"> | Date | string
    CustomerName?: StringNullableFilter<"orders"> | string | null
    Observations?: StringNullableFilter<"orders"> | string | null
    StoreId?: IntFilter<"orders"> | number
  }

  export type productsUpsertWithWhereUniqueWithoutStoresInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutStoresInput, productsUncheckedUpdateWithoutStoresInput>
    create: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput>
  }

  export type productsUpdateWithWhereUniqueWithoutStoresInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutStoresInput, productsUncheckedUpdateWithoutStoresInput>
  }

  export type productsUpdateManyWithWhereWithoutStoresInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutStoresInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    Id?: IntFilter<"products"> | number
    Description?: StringFilter<"products"> | string
    CreatedAtUtc?: DateTimeFilter<"products"> | Date | string
    UpdatedAtUtc?: DateTimeNullableFilter<"products"> | Date | string | null
    Cfop?: StringFilter<"products"> | string
    Csosn?: StringFilter<"products"> | string
    Cst?: StringFilter<"products"> | string
    ItemCode?: StringFilter<"products"> | string
    Ncm?: StringFilter<"products"> | string
    PurchasePrice?: FloatFilter<"products"> | number
    Reference?: StringFilter<"products"> | string
    SalePrice?: FloatFilter<"products"> | number
    StockBalance?: IntFilter<"products"> | number
    StoreId?: IntFilter<"products"> | number
    ImageKey1?: StringNullableFilter<"products"> | string | null
    ImageKey2?: StringNullableFilter<"products"> | string | null
    ImageUrl1?: StringNullableFilter<"products"> | string | null
    ImageUrl2?: StringNullableFilter<"products"> | string | null
  }

  export type store_usersUpsertWithWhereUniqueWithoutStoresInput = {
    where: store_usersWhereUniqueInput
    update: XOR<store_usersUpdateWithoutStoresInput, store_usersUncheckedUpdateWithoutStoresInput>
    create: XOR<store_usersCreateWithoutStoresInput, store_usersUncheckedCreateWithoutStoresInput>
  }

  export type store_usersUpdateWithWhereUniqueWithoutStoresInput = {
    where: store_usersWhereUniqueInput
    data: XOR<store_usersUpdateWithoutStoresInput, store_usersUncheckedUpdateWithoutStoresInput>
  }

  export type store_usersUpdateManyWithWhereWithoutStoresInput = {
    where: store_usersScalarWhereInput
    data: XOR<store_usersUpdateManyMutationInput, store_usersUncheckedUpdateManyWithoutStoresInput>
  }

  export type store_usersScalarWhereInput = {
    AND?: store_usersScalarWhereInput | store_usersScalarWhereInput[]
    OR?: store_usersScalarWhereInput[]
    NOT?: store_usersScalarWhereInput | store_usersScalarWhereInput[]
    Id?: IntFilter<"store_users"> | number
    StoreId?: IntFilter<"store_users"> | number
    UserId?: IntFilter<"store_users"> | number
    Role?: StringFilter<"store_users"> | string
    CreatedAtUtc?: DateTimeFilter<"store_users"> | Date | string
    IsActive?: BoolFilter<"store_users"> | boolean
  }

  export type store_usersCreateWithoutUsersInput = {
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
    stores: storesCreateNestedOneWithoutStore_usersInput
  }

  export type store_usersUncheckedCreateWithoutUsersInput = {
    Id?: number
    StoreId: number
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
  }

  export type store_usersCreateOrConnectWithoutUsersInput = {
    where: store_usersWhereUniqueInput
    create: XOR<store_usersCreateWithoutUsersInput, store_usersUncheckedCreateWithoutUsersInput>
  }

  export type store_usersCreateManyUsersInputEnvelope = {
    data: store_usersCreateManyUsersInput | store_usersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type store_usersUpsertWithWhereUniqueWithoutUsersInput = {
    where: store_usersWhereUniqueInput
    update: XOR<store_usersUpdateWithoutUsersInput, store_usersUncheckedUpdateWithoutUsersInput>
    create: XOR<store_usersCreateWithoutUsersInput, store_usersUncheckedCreateWithoutUsersInput>
  }

  export type store_usersUpdateWithWhereUniqueWithoutUsersInput = {
    where: store_usersWhereUniqueInput
    data: XOR<store_usersUpdateWithoutUsersInput, store_usersUncheckedUpdateWithoutUsersInput>
  }

  export type store_usersUpdateManyWithWhereWithoutUsersInput = {
    where: store_usersScalarWhereInput
    data: XOR<store_usersUpdateManyMutationInput, store_usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type order_itemsCreateManyOrdersInput = {
    Id?: number
    ProductId?: number | null
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: NullableIntFieldUpdateOperationsInput | number | null
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemsCreateManyProductsInput = {
    Id?: number
    OrderId: number
    Quantity: number
    LineTotal: number
    Cfop?: string
    Csosn?: string
    Cst?: string
    Ncm?: string
    ProductDescription?: string
    ProductItemCode?: string
    ProductReference?: string
    SalePrice?: number
  }

  export type order_itemsUpdateWithoutProductsInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    LineTotal?: FloatFieldUpdateOperationsInput | number
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    ProductDescription?: StringFieldUpdateOperationsInput | string
    ProductItemCode?: StringFieldUpdateOperationsInput | string
    ProductReference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ordersCreateManyStoresInput = {
    Id?: number
    CreatedByUserId: number
    CreatedByUsername: string
    Status: string
    TotalAmount: number
    CreatedAtUtc?: Date | string
    CustomerName?: string | null
    Observations?: string | null
  }

  export type productsCreateManyStoresInput = {
    Id?: number
    Description?: string
    CreatedAtUtc?: Date | string
    UpdatedAtUtc?: Date | string | null
    Cfop?: string
    Csosn?: string
    Cst?: string
    ItemCode?: string
    Ncm?: string
    PurchasePrice?: number
    Reference?: string
    SalePrice?: number
    StockBalance?: number
    ImageKey1?: string | null
    ImageKey2?: string | null
    ImageUrl1?: string | null
    ImageUrl2?: string | null
  }

  export type store_usersCreateManyStoresInput = {
    Id?: number
    UserId: number
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
  }

  export type ordersUpdateWithoutStoresInput = {
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutStoresInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutStoresInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedByUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    TotalAmount?: FloatFieldUpdateOperationsInput | number
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUpdateWithoutStoresInput = {
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutStoresInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutStoresInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAtUtc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cfop?: StringFieldUpdateOperationsInput | string
    Csosn?: StringFieldUpdateOperationsInput | string
    Cst?: StringFieldUpdateOperationsInput | string
    ItemCode?: StringFieldUpdateOperationsInput | string
    Ncm?: StringFieldUpdateOperationsInput | string
    PurchasePrice?: FloatFieldUpdateOperationsInput | number
    Reference?: StringFieldUpdateOperationsInput | string
    SalePrice?: FloatFieldUpdateOperationsInput | number
    StockBalance?: IntFieldUpdateOperationsInput | number
    ImageKey1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageKey2?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl1?: NullableStringFieldUpdateOperationsInput | string | null
    ImageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type store_usersUpdateWithoutStoresInput = {
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutStore_usersNestedInput
  }

  export type store_usersUncheckedUpdateWithoutStoresInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type store_usersUncheckedUpdateManyWithoutStoresInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type store_usersCreateManyUsersInput = {
    Id?: number
    StoreId: number
    Role: string
    CreatedAtUtc?: Date | string
    IsActive?: boolean
  }

  export type store_usersUpdateWithoutUsersInput = {
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    stores?: storesUpdateOneRequiredWithoutStore_usersNestedInput
  }

  export type store_usersUncheckedUpdateWithoutUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type store_usersUncheckedUpdateManyWithoutUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
    Role?: StringFieldUpdateOperationsInput | string
    CreatedAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}