import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw }

/**
 * Prisma Client JS version: 2.2.2
 * Query Engine version: a9e8c3d97ef2a0cf59256e6b26097f2a80f0a6a4
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export declare type TrueKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string, collectTimestamps?: any): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends Array<LogLevel | LogDefinition>> = GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]> 

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

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Links
 * const links = await prisma.link.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = keyof T extends 'log' ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Links
   * const links = await prisma.link.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
   */
  constructor(optionsArg?: T);
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  connect(): Promise<void>;
  /**
   * @private
   */
  private runDisconnect;
  /**
   * Disconnect from the database
   */
  disconnect(): Promise<any>;

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
  */
  executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
  */
  queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): LinkDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const OrderByArg: {
  asc: 'asc',
  desc: 'desc'
};

export declare type OrderByArg = (typeof OrderByArg)[keyof typeof OrderByArg]



/**
 * Model Link
 */

export type Link = {
  id: number
  createdAt: Date
  description: string
  url: string
}



export type LinkSelect = {
  id?: boolean
  createdAt?: boolean
  description?: boolean
  url?: boolean
}

export type LinkGetPayload<
  S extends boolean | null | undefined | LinkArgs,
  U = keyof S
> = S extends true
  ? Link
  : S extends undefined
  ? never
  : S extends LinkArgs | FindManyLinkArgs
  ? 'include' extends U
    ? Link 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Link ? Link[P]
: 
 never
    }
  : Link
: Link


export interface LinkDelegate {
  /**
   * Find zero or one Link.
   * @param {FindOneLinkArgs} args - Arguments to find a Link
   * @example
   * // Get one Link
   * const link = await prisma.link.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneLinkArgs>(
    args: Subset<T, FindOneLinkArgs>
  ): CheckSelect<T, Prisma__LinkClient<Link | null>, Prisma__LinkClient<LinkGetPayload<T> | null>>
  /**
   * Find zero or more Links.
   * @param {FindManyLinkArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Links
   * const links = await prisma.link.findMany()
   * 
   * // Get first 10 Links
   * const links = await prisma.link.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyLinkArgs>(
    args?: Subset<T, FindManyLinkArgs>
  ): CheckSelect<T, Promise<Array<Link>>, Promise<Array<LinkGetPayload<T>>>>
  /**
   * Create a Link.
   * @param {LinkCreateArgs} args - Arguments to create a Link.
   * @example
   * // Create one Link
   * const Link = await prisma.link.create({
   *   data: {
   *     // ... data to create a Link
   *   }
   * })
   * 
  **/
  create<T extends LinkCreateArgs>(
    args: Subset<T, LinkCreateArgs>
  ): CheckSelect<T, Prisma__LinkClient<Link>, Prisma__LinkClient<LinkGetPayload<T>>>
  /**
   * Delete a Link.
   * @param {LinkDeleteArgs} args - Arguments to delete one Link.
   * @example
   * // Delete one Link
   * const Link = await prisma.link.delete({
   *   where: {
   *     // ... filter to delete one Link
   *   }
   * })
   * 
  **/
  delete<T extends LinkDeleteArgs>(
    args: Subset<T, LinkDeleteArgs>
  ): CheckSelect<T, Prisma__LinkClient<Link>, Prisma__LinkClient<LinkGetPayload<T>>>
  /**
   * Update one Link.
   * @param {LinkUpdateArgs} args - Arguments to update one Link.
   * @example
   * // Update one Link
   * const link = await prisma.link.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends LinkUpdateArgs>(
    args: Subset<T, LinkUpdateArgs>
  ): CheckSelect<T, Prisma__LinkClient<Link>, Prisma__LinkClient<LinkGetPayload<T>>>
  /**
   * Delete zero or more Links.
   * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
   * @example
   * // Delete a few Links
   * const { count } = await prisma.link.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends LinkDeleteManyArgs>(
    args: Subset<T, LinkDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Links.
   * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Links
   * const link = await prisma.link.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends LinkUpdateManyArgs>(
    args: Subset<T, LinkUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Link.
   * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
   * @example
   * // Update or create a Link
   * const link = await prisma.link.upsert({
   *   create: {
   *     // ... data to create a Link
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Link we want to update
   *   }
   * })
  **/
  upsert<T extends LinkUpsertArgs>(
    args: Subset<T, LinkUpsertArgs>
  ): CheckSelect<T, Prisma__LinkClient<Link>, Prisma__LinkClient<LinkGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyLinkArgs, 'select' | 'include'>): Promise<number>


}

/**
 * The delegate class that acts as a "Promise-like" for Link.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__LinkClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Link findOne
 */
export type FindOneLinkArgs = {
  /**
   * Select specific fields to fetch from the Link
  **/
  select?: LinkSelect | null
  /**
   * Filter, which Link to fetch.
  **/
  where: LinkWhereUniqueInput
}


/**
 * Link findMany
 */
export type FindManyLinkArgs = {
  /**
   * Select specific fields to fetch from the Link
  **/
  select?: LinkSelect | null
  /**
   * Filter, which Links to fetch.
  **/
  where?: LinkWhereInput
  /**
   * Determine the order of the Links to fetch.
  **/
  orderBy?: LinkOrderByInput
  /**
   * Sets the position for listing Links.
  **/
  cursor?: LinkWhereUniqueInput
  /**
   * The number of Links to fetch. If negative number, it will take Links before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Links.
  **/
  skip?: number
}


/**
 * Link create
 */
export type LinkCreateArgs = {
  /**
   * Select specific fields to fetch from the Link
  **/
  select?: LinkSelect | null
  /**
   * The data needed to create a Link.
  **/
  data: LinkCreateInput
}


/**
 * Link update
 */
export type LinkUpdateArgs = {
  /**
   * Select specific fields to fetch from the Link
  **/
  select?: LinkSelect | null
  /**
   * The data needed to update a Link.
  **/
  data: LinkUpdateInput
  /**
   * Choose, which Link to update.
  **/
  where: LinkWhereUniqueInput
}


/**
 * Link updateMany
 */
export type LinkUpdateManyArgs = {
  data: LinkUpdateManyMutationInput
  where?: LinkWhereInput
}


/**
 * Link upsert
 */
export type LinkUpsertArgs = {
  /**
   * Select specific fields to fetch from the Link
  **/
  select?: LinkSelect | null
  /**
   * The filter to search for the Link to update in case it exists.
  **/
  where: LinkWhereUniqueInput
  /**
   * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
  **/
  create: LinkCreateInput
  /**
   * In case the Link was found with the provided `where` argument, update it with this data.
  **/
  update: LinkUpdateInput
}


/**
 * Link delete
 */
export type LinkDeleteArgs = {
  /**
   * Select specific fields to fetch from the Link
  **/
  select?: LinkSelect | null
  /**
   * Filter which Link to delete.
  **/
  where: LinkWhereUniqueInput
}


/**
 * Link deleteMany
 */
export type LinkDeleteManyArgs = {
  where?: LinkWhereInput
}


/**
 * Link without action
 */
export type LinkArgs = {
  /**
   * Select specific fields to fetch from the Link
  **/
  select?: LinkSelect | null
}



/**
 * Deep Input Types
 */


export type LinkWhereInput = {
  id?: number | IntFilter
  createdAt?: Date | string | DateTimeFilter
  description?: string | StringFilter
  url?: string | StringFilter
  AND?: Enumerable<LinkWhereInput>
  OR?: Array<LinkWhereInput>
  NOT?: Enumerable<LinkWhereInput>
}

export type LinkWhereUniqueInput = {
  id?: number
}

export type LinkCreateInput = {
  createdAt?: Date | string
  description: string
  url: string
}

export type LinkUpdateInput = {
  id?: number
  createdAt?: Date | string
  description?: string
  url?: string
}

export type LinkUpdateManyMutationInput = {
  id?: number
  createdAt?: Date | string
  description?: string
  url?: string
}

export type IntFilter = {
  equals?: number
  not?: number | IntFilter
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
}

export type DateTimeFilter = {
  equals?: Date | string
  not?: Date | string | DateTimeFilter
  in?: Enumerable<Date | string>
  notIn?: Enumerable<Date | string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
}

export type StringFilter = {
  equals?: string
  not?: string | StringFilter
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
}

export type LinkOrderByInput = {
  id?: OrderByArg | null
  createdAt?: OrderByArg | null
  description?: OrderByArg | null
  url?: OrderByArg | null
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
