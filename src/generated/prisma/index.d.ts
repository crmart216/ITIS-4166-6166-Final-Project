
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
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Recipe_Category
 * 
 */
export type Recipe_Category = $Result.DefaultSelection<Prisma.$Recipe_CategoryPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recipes
 * const recipes = await prisma.recipe.findMany()
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
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
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
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe_Category`: Exposes CRUD operations for the **Recipe_Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_Categories
    * const recipe_Categories = await prisma.recipe_Category.findMany()
    * ```
    */
  get recipe_Category(): Prisma.Recipe_CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
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
    Recipe: 'Recipe',
    Recipe_Category: 'Recipe_Category',
    Review: 'Review',
    User: 'User'
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
      modelProps: "recipe" | "recipe_Category" | "review" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Recipe_Category: {
        payload: Prisma.$Recipe_CategoryPayload<ExtArgs>
        fields: Prisma.Recipe_CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Recipe_CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Recipe_CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>
          }
          findFirst: {
            args: Prisma.Recipe_CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Recipe_CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>
          }
          findMany: {
            args: Prisma.Recipe_CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>[]
          }
          create: {
            args: Prisma.Recipe_CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>
          }
          createMany: {
            args: Prisma.Recipe_CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Recipe_CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>[]
          }
          delete: {
            args: Prisma.Recipe_CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>
          }
          update: {
            args: Prisma.Recipe_CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>
          }
          deleteMany: {
            args: Prisma.Recipe_CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Recipe_CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Recipe_CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>[]
          }
          upsert: {
            args: Prisma.Recipe_CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_CategoryPayload>
          }
          aggregate: {
            args: Prisma.Recipe_CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe_Category>
          }
          groupBy: {
            args: Prisma.Recipe_CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recipe_CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Recipe_CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<Recipe_CategoryCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    recipe?: RecipeOmit
    recipe_Category?: Recipe_CategoryOmit
    review?: ReviewOmit
    user?: UserOmit
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
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    reviews: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | RecipeCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type Recipe_CategoryCountOutputType
   */

  export type Recipe_CategoryCountOutputType = {
    recipes: number
  }

  export type Recipe_CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Recipe_CategoryCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * Recipe_CategoryCountOutputType without action
   */
  export type Recipe_CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_CategoryCountOutputType
     */
    select?: Recipe_CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Recipe_CategoryCountOutputType without action
   */
  export type Recipe_CategoryCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recipes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    author_id: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    author_id: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    title: string | null
    category_id: number | null
    author_id: number | null
    description: string | null
    ingredients: string | null
    steps: string | null
    notes: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category_id: number | null
    author_id: number | null
    description: string | null
    ingredients: string | null
    steps: string | null
    notes: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    title: number
    category_id: number
    author_id: number
    description: number
    ingredients: number
    steps: number
    notes: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
    category_id?: true
    author_id?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
    category_id?: true
    author_id?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    author_id?: true
    description?: true
    ingredients?: true
    steps?: true
    notes?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    author_id?: true
    description?: true
    ingredients?: true
    steps?: true
    notes?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    author_id?: true
    description?: true
    ingredients?: true
    steps?: true
    notes?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: number
    title: string
    category_id: number
    author_id: number
    description: string | null
    ingredients: string
    steps: string
    notes: string | null
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category_id?: boolean
    author_id?: boolean
    description?: boolean
    ingredients?: boolean
    steps?: boolean
    notes?: boolean
    category?: boolean | Recipe_CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Recipe$reviewsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category_id?: boolean
    author_id?: boolean
    description?: boolean
    ingredients?: boolean
    steps?: boolean
    notes?: boolean
    category?: boolean | Recipe_CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category_id?: boolean
    author_id?: boolean
    description?: boolean
    ingredients?: boolean
    steps?: boolean
    notes?: boolean
    category?: boolean | Recipe_CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    title?: boolean
    category_id?: boolean
    author_id?: boolean
    description?: boolean
    ingredients?: boolean
    steps?: boolean
    notes?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category_id" | "author_id" | "description" | "ingredients" | "steps" | "notes", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Recipe_CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Recipe$reviewsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Recipe_CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Recipe_CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      category: Prisma.$Recipe_CategoryPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category_id: number
      author_id: number
      description: string | null
      ingredients: string
      steps: string
      notes: string | null
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Recipe_CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Recipe_CategoryDefaultArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Recipe$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'Int'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly category_id: FieldRef<"Recipe", 'Int'>
    readonly author_id: FieldRef<"Recipe", 'Int'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly ingredients: FieldRef<"Recipe", 'String'>
    readonly steps: FieldRef<"Recipe", 'String'>
    readonly notes: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.reviews
   */
  export type Recipe$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Recipe_Category
   */

  export type AggregateRecipe_Category = {
    _count: Recipe_CategoryCountAggregateOutputType | null
    _avg: Recipe_CategoryAvgAggregateOutputType | null
    _sum: Recipe_CategorySumAggregateOutputType | null
    _min: Recipe_CategoryMinAggregateOutputType | null
    _max: Recipe_CategoryMaxAggregateOutputType | null
  }

  export type Recipe_CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type Recipe_CategorySumAggregateOutputType = {
    id: number | null
  }

  export type Recipe_CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Recipe_CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Recipe_CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Recipe_CategoryAvgAggregateInputType = {
    id?: true
  }

  export type Recipe_CategorySumAggregateInputType = {
    id?: true
  }

  export type Recipe_CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Recipe_CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Recipe_CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Recipe_CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Category to aggregate.
     */
    where?: Recipe_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Categories to fetch.
     */
    orderBy?: Recipe_CategoryOrderByWithRelationInput | Recipe_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Recipe_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipe_Categories
    **/
    _count?: true | Recipe_CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_CategoryMaxAggregateInputType
  }

  export type GetRecipe_CategoryAggregateType<T extends Recipe_CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_Category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_Category[P]>
      : GetScalarType<T[P], AggregateRecipe_Category[P]>
  }




  export type Recipe_CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_CategoryWhereInput
    orderBy?: Recipe_CategoryOrderByWithAggregationInput | Recipe_CategoryOrderByWithAggregationInput[]
    by: Recipe_CategoryScalarFieldEnum[] | Recipe_CategoryScalarFieldEnum
    having?: Recipe_CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_CategoryCountAggregateInputType | true
    _avg?: Recipe_CategoryAvgAggregateInputType
    _sum?: Recipe_CategorySumAggregateInputType
    _min?: Recipe_CategoryMinAggregateInputType
    _max?: Recipe_CategoryMaxAggregateInputType
  }

  export type Recipe_CategoryGroupByOutputType = {
    id: number
    name: string
    _count: Recipe_CategoryCountAggregateOutputType | null
    _avg: Recipe_CategoryAvgAggregateOutputType | null
    _sum: Recipe_CategorySumAggregateOutputType | null
    _min: Recipe_CategoryMinAggregateOutputType | null
    _max: Recipe_CategoryMaxAggregateOutputType | null
  }

  type GetRecipe_CategoryGroupByPayload<T extends Recipe_CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recipe_CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_CategoryGroupByOutputType[P]>
        }
      >
    >


  export type Recipe_CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Recipe_Category$recipesArgs<ExtArgs>
    _count?: boolean | Recipe_CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Category"]>

  export type Recipe_CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["recipe_Category"]>

  export type Recipe_CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["recipe_Category"]>

  export type Recipe_CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type Recipe_CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["recipe_Category"]>
  export type Recipe_CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Recipe_Category$recipesArgs<ExtArgs>
    _count?: boolean | Recipe_CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Recipe_CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Recipe_CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Recipe_CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe_Category"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["recipe_Category"]>
    composites: {}
  }

  type Recipe_CategoryGetPayload<S extends boolean | null | undefined | Recipe_CategoryDefaultArgs> = $Result.GetResult<Prisma.$Recipe_CategoryPayload, S>

  type Recipe_CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Recipe_CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recipe_CategoryCountAggregateInputType | true
    }

  export interface Recipe_CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe_Category'], meta: { name: 'Recipe_Category' } }
    /**
     * Find zero or one Recipe_Category that matches the filter.
     * @param {Recipe_CategoryFindUniqueArgs} args - Arguments to find a Recipe_Category
     * @example
     * // Get one Recipe_Category
     * const recipe_Category = await prisma.recipe_Category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Recipe_CategoryFindUniqueArgs>(args: SelectSubset<T, Recipe_CategoryFindUniqueArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe_Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Recipe_CategoryFindUniqueOrThrowArgs} args - Arguments to find a Recipe_Category
     * @example
     * // Get one Recipe_Category
     * const recipe_Category = await prisma.recipe_Category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Recipe_CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Recipe_CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_CategoryFindFirstArgs} args - Arguments to find a Recipe_Category
     * @example
     * // Get one Recipe_Category
     * const recipe_Category = await prisma.recipe_Category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Recipe_CategoryFindFirstArgs>(args?: SelectSubset<T, Recipe_CategoryFindFirstArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_CategoryFindFirstOrThrowArgs} args - Arguments to find a Recipe_Category
     * @example
     * // Get one Recipe_Category
     * const recipe_Category = await prisma.recipe_Category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Recipe_CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Recipe_CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipe_Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_Categories
     * const recipe_Categories = await prisma.recipe_Category.findMany()
     * 
     * // Get first 10 Recipe_Categories
     * const recipe_Categories = await prisma.recipe_Category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipe_CategoryWithIdOnly = await prisma.recipe_Category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Recipe_CategoryFindManyArgs>(args?: SelectSubset<T, Recipe_CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe_Category.
     * @param {Recipe_CategoryCreateArgs} args - Arguments to create a Recipe_Category.
     * @example
     * // Create one Recipe_Category
     * const Recipe_Category = await prisma.recipe_Category.create({
     *   data: {
     *     // ... data to create a Recipe_Category
     *   }
     * })
     * 
     */
    create<T extends Recipe_CategoryCreateArgs>(args: SelectSubset<T, Recipe_CategoryCreateArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipe_Categories.
     * @param {Recipe_CategoryCreateManyArgs} args - Arguments to create many Recipe_Categories.
     * @example
     * // Create many Recipe_Categories
     * const recipe_Category = await prisma.recipe_Category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Recipe_CategoryCreateManyArgs>(args?: SelectSubset<T, Recipe_CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipe_Categories and returns the data saved in the database.
     * @param {Recipe_CategoryCreateManyAndReturnArgs} args - Arguments to create many Recipe_Categories.
     * @example
     * // Create many Recipe_Categories
     * const recipe_Category = await prisma.recipe_Category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipe_Categories and only return the `id`
     * const recipe_CategoryWithIdOnly = await prisma.recipe_Category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Recipe_CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, Recipe_CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe_Category.
     * @param {Recipe_CategoryDeleteArgs} args - Arguments to delete one Recipe_Category.
     * @example
     * // Delete one Recipe_Category
     * const Recipe_Category = await prisma.recipe_Category.delete({
     *   where: {
     *     // ... filter to delete one Recipe_Category
     *   }
     * })
     * 
     */
    delete<T extends Recipe_CategoryDeleteArgs>(args: SelectSubset<T, Recipe_CategoryDeleteArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe_Category.
     * @param {Recipe_CategoryUpdateArgs} args - Arguments to update one Recipe_Category.
     * @example
     * // Update one Recipe_Category
     * const recipe_Category = await prisma.recipe_Category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Recipe_CategoryUpdateArgs>(args: SelectSubset<T, Recipe_CategoryUpdateArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipe_Categories.
     * @param {Recipe_CategoryDeleteManyArgs} args - Arguments to filter Recipe_Categories to delete.
     * @example
     * // Delete a few Recipe_Categories
     * const { count } = await prisma.recipe_Category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Recipe_CategoryDeleteManyArgs>(args?: SelectSubset<T, Recipe_CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_Categories
     * const recipe_Category = await prisma.recipe_Category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Recipe_CategoryUpdateManyArgs>(args: SelectSubset<T, Recipe_CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Categories and returns the data updated in the database.
     * @param {Recipe_CategoryUpdateManyAndReturnArgs} args - Arguments to update many Recipe_Categories.
     * @example
     * // Update many Recipe_Categories
     * const recipe_Category = await prisma.recipe_Category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipe_Categories and only return the `id`
     * const recipe_CategoryWithIdOnly = await prisma.recipe_Category.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Recipe_CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, Recipe_CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe_Category.
     * @param {Recipe_CategoryUpsertArgs} args - Arguments to update or create a Recipe_Category.
     * @example
     * // Update or create a Recipe_Category
     * const recipe_Category = await prisma.recipe_Category.upsert({
     *   create: {
     *     // ... data to create a Recipe_Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_Category we want to update
     *   }
     * })
     */
    upsert<T extends Recipe_CategoryUpsertArgs>(args: SelectSubset<T, Recipe_CategoryUpsertArgs<ExtArgs>>): Prisma__Recipe_CategoryClient<$Result.GetResult<Prisma.$Recipe_CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipe_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_CategoryCountArgs} args - Arguments to filter Recipe_Categories to count.
     * @example
     * // Count the number of Recipe_Categories
     * const count = await prisma.recipe_Category.count({
     *   where: {
     *     // ... the filter for the Recipe_Categories we want to count
     *   }
     * })
    **/
    count<T extends Recipe_CategoryCountArgs>(
      args?: Subset<T, Recipe_CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Recipe_CategoryAggregateArgs>(args: Subset<T, Recipe_CategoryAggregateArgs>): Prisma.PrismaPromise<GetRecipe_CategoryAggregateType<T>>

    /**
     * Group by Recipe_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_CategoryGroupByArgs} args - Group by arguments.
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
      T extends Recipe_CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Recipe_CategoryGroupByArgs['orderBy'] }
        : { orderBy?: Recipe_CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Recipe_CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_CategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe_Category model
   */
  readonly fields: Recipe_CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe_Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Recipe_CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Recipe_Category$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe_Category$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe_Category model
   */
  interface Recipe_CategoryFieldRefs {
    readonly id: FieldRef<"Recipe_Category", 'Int'>
    readonly name: FieldRef<"Recipe_Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe_Category findUnique
   */
  export type Recipe_CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Category to fetch.
     */
    where: Recipe_CategoryWhereUniqueInput
  }

  /**
   * Recipe_Category findUniqueOrThrow
   */
  export type Recipe_CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Category to fetch.
     */
    where: Recipe_CategoryWhereUniqueInput
  }

  /**
   * Recipe_Category findFirst
   */
  export type Recipe_CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Category to fetch.
     */
    where?: Recipe_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Categories to fetch.
     */
    orderBy?: Recipe_CategoryOrderByWithRelationInput | Recipe_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Categories.
     */
    cursor?: Recipe_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Categories.
     */
    distinct?: Recipe_CategoryScalarFieldEnum | Recipe_CategoryScalarFieldEnum[]
  }

  /**
   * Recipe_Category findFirstOrThrow
   */
  export type Recipe_CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Category to fetch.
     */
    where?: Recipe_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Categories to fetch.
     */
    orderBy?: Recipe_CategoryOrderByWithRelationInput | Recipe_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Categories.
     */
    cursor?: Recipe_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Categories.
     */
    distinct?: Recipe_CategoryScalarFieldEnum | Recipe_CategoryScalarFieldEnum[]
  }

  /**
   * Recipe_Category findMany
   */
  export type Recipe_CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Categories to fetch.
     */
    where?: Recipe_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Categories to fetch.
     */
    orderBy?: Recipe_CategoryOrderByWithRelationInput | Recipe_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipe_Categories.
     */
    cursor?: Recipe_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Categories.
     */
    skip?: number
    distinct?: Recipe_CategoryScalarFieldEnum | Recipe_CategoryScalarFieldEnum[]
  }

  /**
   * Recipe_Category create
   */
  export type Recipe_CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe_Category.
     */
    data: XOR<Recipe_CategoryCreateInput, Recipe_CategoryUncheckedCreateInput>
  }

  /**
   * Recipe_Category createMany
   */
  export type Recipe_CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipe_Categories.
     */
    data: Recipe_CategoryCreateManyInput | Recipe_CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe_Category createManyAndReturn
   */
  export type Recipe_CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Recipe_Categories.
     */
    data: Recipe_CategoryCreateManyInput | Recipe_CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe_Category update
   */
  export type Recipe_CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe_Category.
     */
    data: XOR<Recipe_CategoryUpdateInput, Recipe_CategoryUncheckedUpdateInput>
    /**
     * Choose, which Recipe_Category to update.
     */
    where: Recipe_CategoryWhereUniqueInput
  }

  /**
   * Recipe_Category updateMany
   */
  export type Recipe_CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipe_Categories.
     */
    data: XOR<Recipe_CategoryUpdateManyMutationInput, Recipe_CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Categories to update
     */
    where?: Recipe_CategoryWhereInput
    /**
     * Limit how many Recipe_Categories to update.
     */
    limit?: number
  }

  /**
   * Recipe_Category updateManyAndReturn
   */
  export type Recipe_CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Recipe_Categories.
     */
    data: XOR<Recipe_CategoryUpdateManyMutationInput, Recipe_CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Categories to update
     */
    where?: Recipe_CategoryWhereInput
    /**
     * Limit how many Recipe_Categories to update.
     */
    limit?: number
  }

  /**
   * Recipe_Category upsert
   */
  export type Recipe_CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe_Category to update in case it exists.
     */
    where: Recipe_CategoryWhereUniqueInput
    /**
     * In case the Recipe_Category found by the `where` argument doesn't exist, create a new Recipe_Category with this data.
     */
    create: XOR<Recipe_CategoryCreateInput, Recipe_CategoryUncheckedCreateInput>
    /**
     * In case the Recipe_Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Recipe_CategoryUpdateInput, Recipe_CategoryUncheckedUpdateInput>
  }

  /**
   * Recipe_Category delete
   */
  export type Recipe_CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
    /**
     * Filter which Recipe_Category to delete.
     */
    where: Recipe_CategoryWhereUniqueInput
  }

  /**
   * Recipe_Category deleteMany
   */
  export type Recipe_CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Categories to delete
     */
    where?: Recipe_CategoryWhereInput
    /**
     * Limit how many Recipe_Categories to delete.
     */
    limit?: number
  }

  /**
   * Recipe_Category.recipes
   */
  export type Recipe_Category$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe_Category without action
   */
  export type Recipe_CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Category
     */
    select?: Recipe_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Category
     */
    omit?: Recipe_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    recipe_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    recipe_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    content: string | null
    recipe_id: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    content: string | null
    recipe_id: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    content: number
    recipe_id: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    recipe_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    recipe_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    content?: true
    recipe_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    content?: true
    recipe_id?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    content?: true
    recipe_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    content: string
    recipe_id: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    recipe_id?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    recipe_id?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    recipe_id?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    content?: boolean
    recipe_id?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "recipe_id", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      recipe_id: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly recipe_id: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    recipes?: boolean | User$recipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | User$recipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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


  export const RecipeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category_id: 'category_id',
    author_id: 'author_id',
    description: 'description',
    ingredients: 'ingredients',
    steps: 'steps',
    notes: 'notes'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const Recipe_CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Recipe_CategoryScalarFieldEnum = (typeof Recipe_CategoryScalarFieldEnum)[keyof typeof Recipe_CategoryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    recipe_id: 'recipe_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: IntFilter<"Recipe"> | number
    title?: StringFilter<"Recipe"> | string
    category_id?: IntFilter<"Recipe"> | number
    author_id?: IntFilter<"Recipe"> | number
    description?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: StringFilter<"Recipe"> | string
    steps?: StringFilter<"Recipe"> | string
    notes?: StringNullableFilter<"Recipe"> | string | null
    category?: XOR<Recipe_CategoryScalarRelationFilter, Recipe_CategoryWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    author_id?: SortOrder
    description?: SortOrderInput | SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    notes?: SortOrderInput | SortOrder
    category?: Recipe_CategoryOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    category_id?: IntFilter<"Recipe"> | number
    author_id?: IntFilter<"Recipe"> | number
    description?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: StringFilter<"Recipe"> | string
    steps?: StringFilter<"Recipe"> | string
    notes?: StringNullableFilter<"Recipe"> | string | null
    category?: XOR<Recipe_CategoryScalarRelationFilter, Recipe_CategoryWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id" | "title">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    author_id?: SortOrder
    description?: SortOrderInput | SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipe"> | number
    title?: StringWithAggregatesFilter<"Recipe"> | string
    category_id?: IntWithAggregatesFilter<"Recipe"> | number
    author_id?: IntWithAggregatesFilter<"Recipe"> | number
    description?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    ingredients?: StringWithAggregatesFilter<"Recipe"> | string
    steps?: StringWithAggregatesFilter<"Recipe"> | string
    notes?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
  }

  export type Recipe_CategoryWhereInput = {
    AND?: Recipe_CategoryWhereInput | Recipe_CategoryWhereInput[]
    OR?: Recipe_CategoryWhereInput[]
    NOT?: Recipe_CategoryWhereInput | Recipe_CategoryWhereInput[]
    id?: IntFilter<"Recipe_Category"> | number
    name?: StringFilter<"Recipe_Category"> | string
    recipes?: RecipeListRelationFilter
  }

  export type Recipe_CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
  }

  export type Recipe_CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: Recipe_CategoryWhereInput | Recipe_CategoryWhereInput[]
    OR?: Recipe_CategoryWhereInput[]
    NOT?: Recipe_CategoryWhereInput | Recipe_CategoryWhereInput[]
    recipes?: RecipeListRelationFilter
  }, "id" | "name">

  export type Recipe_CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: Recipe_CategoryCountOrderByAggregateInput
    _avg?: Recipe_CategoryAvgOrderByAggregateInput
    _max?: Recipe_CategoryMaxOrderByAggregateInput
    _min?: Recipe_CategoryMinOrderByAggregateInput
    _sum?: Recipe_CategorySumOrderByAggregateInput
  }

  export type Recipe_CategoryScalarWhereWithAggregatesInput = {
    AND?: Recipe_CategoryScalarWhereWithAggregatesInput | Recipe_CategoryScalarWhereWithAggregatesInput[]
    OR?: Recipe_CategoryScalarWhereWithAggregatesInput[]
    NOT?: Recipe_CategoryScalarWhereWithAggregatesInput | Recipe_CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipe_Category"> | number
    name?: StringWithAggregatesFilter<"Recipe_Category"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    recipe_id?: IntFilter<"Review"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    recipe_id?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    content?: StringFilter<"Review"> | string
    recipe_id?: IntFilter<"Review"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    recipe_id?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    content?: StringWithAggregatesFilter<"Review"> | string
    recipe_id?: IntWithAggregatesFilter<"Review"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    recipes?: RecipeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    recipes?: RecipeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type RecipeCreateInput = {
    title: string
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
    category: Recipe_CategoryCreateNestedOneWithoutRecipesInput
    author: UserCreateNestedOneWithoutRecipesInput
    reviews?: ReviewCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: number
    title: string
    category_id: number
    author_id: number
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Recipe_CategoryUpdateOneRequiredWithoutRecipesNestedInput
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    reviews?: ReviewUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: number
    title: string
    category_id: number
    author_id: number
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
  }

  export type RecipeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Recipe_CategoryCreateInput = {
    name: string
    recipes?: RecipeCreateNestedManyWithoutCategoryInput
  }

  export type Recipe_CategoryUncheckedCreateInput = {
    id?: number
    name: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type Recipe_CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutCategoryNestedInput
  }

  export type Recipe_CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type Recipe_CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type Recipe_CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Recipe_CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    content: string
    recipe: RecipeCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    content: string
    recipe_id: number
  }

  export type ReviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    content: string
    recipe_id: number
  }

  export type ReviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
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

  export type Recipe_CategoryScalarRelationFilter = {
    is?: Recipe_CategoryWhereInput
    isNot?: Recipe_CategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    author_id?: SortOrder
    description?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    notes?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    author_id?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    author_id?: SortOrder
    description?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    notes?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    author_id?: SortOrder
    description?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    notes?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    author_id?: SortOrder
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

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Recipe_CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Recipe_CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Recipe_CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Recipe_CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Recipe_CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    recipe_id?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    recipe_id?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    recipe_id?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type Recipe_CategoryCreateNestedOneWithoutRecipesInput = {
    create?: XOR<Recipe_CategoryCreateWithoutRecipesInput, Recipe_CategoryUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: Recipe_CategoryCreateOrConnectWithoutRecipesInput
    connect?: Recipe_CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutRecipeInput = {
    create?: XOR<ReviewCreateWithoutRecipeInput, ReviewUncheckedCreateWithoutRecipeInput> | ReviewCreateWithoutRecipeInput[] | ReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRecipeInput | ReviewCreateOrConnectWithoutRecipeInput[]
    createMany?: ReviewCreateManyRecipeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<ReviewCreateWithoutRecipeInput, ReviewUncheckedCreateWithoutRecipeInput> | ReviewCreateWithoutRecipeInput[] | ReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRecipeInput | ReviewCreateOrConnectWithoutRecipeInput[]
    createMany?: ReviewCreateManyRecipeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Recipe_CategoryUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<Recipe_CategoryCreateWithoutRecipesInput, Recipe_CategoryUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: Recipe_CategoryCreateOrConnectWithoutRecipesInput
    upsert?: Recipe_CategoryUpsertWithoutRecipesInput
    connect?: Recipe_CategoryWhereUniqueInput
    update?: XOR<XOR<Recipe_CategoryUpdateToOneWithWhereWithoutRecipesInput, Recipe_CategoryUpdateWithoutRecipesInput>, Recipe_CategoryUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type ReviewUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<ReviewCreateWithoutRecipeInput, ReviewUncheckedCreateWithoutRecipeInput> | ReviewCreateWithoutRecipeInput[] | ReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRecipeInput | ReviewCreateOrConnectWithoutRecipeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRecipeInput | ReviewUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: ReviewCreateManyRecipeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRecipeInput | ReviewUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRecipeInput | ReviewUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<ReviewCreateWithoutRecipeInput, ReviewUncheckedCreateWithoutRecipeInput> | ReviewCreateWithoutRecipeInput[] | ReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRecipeInput | ReviewCreateOrConnectWithoutRecipeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRecipeInput | ReviewUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: ReviewCreateManyRecipeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRecipeInput | ReviewUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRecipeInput | ReviewUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RecipeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RecipeCreateWithoutCategoryInput, RecipeUncheckedCreateWithoutCategoryInput> | RecipeCreateWithoutCategoryInput[] | RecipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCategoryInput | RecipeCreateOrConnectWithoutCategoryInput[]
    createMany?: RecipeCreateManyCategoryInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RecipeCreateWithoutCategoryInput, RecipeUncheckedCreateWithoutCategoryInput> | RecipeCreateWithoutCategoryInput[] | RecipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCategoryInput | RecipeCreateOrConnectWithoutCategoryInput[]
    createMany?: RecipeCreateManyCategoryInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type RecipeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RecipeCreateWithoutCategoryInput, RecipeUncheckedCreateWithoutCategoryInput> | RecipeCreateWithoutCategoryInput[] | RecipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCategoryInput | RecipeCreateOrConnectWithoutCategoryInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutCategoryInput | RecipeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RecipeCreateManyCategoryInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutCategoryInput | RecipeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutCategoryInput | RecipeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RecipeCreateWithoutCategoryInput, RecipeUncheckedCreateWithoutCategoryInput> | RecipeCreateWithoutCategoryInput[] | RecipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutCategoryInput | RecipeCreateOrConnectWithoutCategoryInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutCategoryInput | RecipeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RecipeCreateManyCategoryInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutCategoryInput | RecipeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutCategoryInput | RecipeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutReviewsInput = {
    create?: XOR<RecipeCreateWithoutReviewsInput, RecipeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutReviewsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<RecipeCreateWithoutReviewsInput, RecipeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutReviewsInput
    upsert?: RecipeUpsertWithoutReviewsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutReviewsInput, RecipeUpdateWithoutReviewsInput>, RecipeUncheckedUpdateWithoutReviewsInput>
  }

  export type RecipeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type RecipeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type Recipe_CategoryCreateWithoutRecipesInput = {
    name: string
  }

  export type Recipe_CategoryUncheckedCreateWithoutRecipesInput = {
    id?: number
    name: string
  }

  export type Recipe_CategoryCreateOrConnectWithoutRecipesInput = {
    where: Recipe_CategoryWhereUniqueInput
    create: XOR<Recipe_CategoryCreateWithoutRecipesInput, Recipe_CategoryUncheckedCreateWithoutRecipesInput>
  }

  export type UserCreateWithoutRecipesInput = {
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type ReviewCreateWithoutRecipeInput = {
    content: string
  }

  export type ReviewUncheckedCreateWithoutRecipeInput = {
    id?: number
    content: string
  }

  export type ReviewCreateOrConnectWithoutRecipeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRecipeInput, ReviewUncheckedCreateWithoutRecipeInput>
  }

  export type ReviewCreateManyRecipeInputEnvelope = {
    data: ReviewCreateManyRecipeInput | ReviewCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type Recipe_CategoryUpsertWithoutRecipesInput = {
    update: XOR<Recipe_CategoryUpdateWithoutRecipesInput, Recipe_CategoryUncheckedUpdateWithoutRecipesInput>
    create: XOR<Recipe_CategoryCreateWithoutRecipesInput, Recipe_CategoryUncheckedCreateWithoutRecipesInput>
    where?: Recipe_CategoryWhereInput
  }

  export type Recipe_CategoryUpdateToOneWithWhereWithoutRecipesInput = {
    where?: Recipe_CategoryWhereInput
    data: XOR<Recipe_CategoryUpdateWithoutRecipesInput, Recipe_CategoryUncheckedUpdateWithoutRecipesInput>
  }

  export type Recipe_CategoryUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Recipe_CategoryUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ReviewUpsertWithWhereUniqueWithoutRecipeInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRecipeInput, ReviewUncheckedUpdateWithoutRecipeInput>
    create: XOR<ReviewCreateWithoutRecipeInput, ReviewUncheckedCreateWithoutRecipeInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRecipeInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRecipeInput, ReviewUncheckedUpdateWithoutRecipeInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRecipeInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRecipeInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    recipe_id?: IntFilter<"Review"> | number
  }

  export type RecipeCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
    author: UserCreateNestedOneWithoutRecipesInput
    reviews?: ReviewCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    author_id: number
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutCategoryInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutCategoryInput, RecipeUncheckedCreateWithoutCategoryInput>
  }

  export type RecipeCreateManyCategoryInputEnvelope = {
    data: RecipeCreateManyCategoryInput | RecipeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutCategoryInput, RecipeUncheckedUpdateWithoutCategoryInput>
    create: XOR<RecipeCreateWithoutCategoryInput, RecipeUncheckedCreateWithoutCategoryInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutCategoryInput, RecipeUncheckedUpdateWithoutCategoryInput>
  }

  export type RecipeUpdateManyWithWhereWithoutCategoryInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: IntFilter<"Recipe"> | number
    title?: StringFilter<"Recipe"> | string
    category_id?: IntFilter<"Recipe"> | number
    author_id?: IntFilter<"Recipe"> | number
    description?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: StringFilter<"Recipe"> | string
    steps?: StringFilter<"Recipe"> | string
    notes?: StringNullableFilter<"Recipe"> | string | null
  }

  export type RecipeCreateWithoutReviewsInput = {
    title: string
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
    category: Recipe_CategoryCreateNestedOneWithoutRecipesInput
    author: UserCreateNestedOneWithoutRecipesInput
  }

  export type RecipeUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    category_id: number
    author_id: number
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
  }

  export type RecipeCreateOrConnectWithoutReviewsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutReviewsInput, RecipeUncheckedCreateWithoutReviewsInput>
  }

  export type RecipeUpsertWithoutReviewsInput = {
    update: XOR<RecipeUpdateWithoutReviewsInput, RecipeUncheckedUpdateWithoutReviewsInput>
    create: XOR<RecipeCreateWithoutReviewsInput, RecipeUncheckedCreateWithoutReviewsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutReviewsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutReviewsInput, RecipeUncheckedUpdateWithoutReviewsInput>
  }

  export type RecipeUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Recipe_CategoryUpdateOneRequiredWithoutRecipesNestedInput
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeCreateWithoutAuthorInput = {
    title: string
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
    category: Recipe_CategoryCreateNestedOneWithoutRecipesInput
    reviews?: ReviewCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    category_id: number
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeCreateManyAuthorInputEnvelope = {
    data: RecipeCreateManyAuthorInput | RecipeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
  }

  export type RecipeUpdateManyWithWhereWithoutAuthorInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReviewCreateManyRecipeInput = {
    id?: number
    content: string
  }

  export type ReviewUpdateWithoutRecipeInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateManyCategoryInput = {
    id?: number
    title: string
    author_id: number
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
  }

  export type RecipeUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    reviews?: ReviewUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeCreateManyAuthorInput = {
    id?: number
    title: string
    category_id: number
    description?: string | null
    ingredients: string
    steps: string
    notes?: string | null
  }

  export type RecipeUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Recipe_CategoryUpdateOneRequiredWithoutRecipesNestedInput
    reviews?: ReviewUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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