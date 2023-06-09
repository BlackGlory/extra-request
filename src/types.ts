export type IRequestOptionsTransformer = (options: IRequestOptions) => IRequestOptions

/**
 * Q: Why not use `Request` interface?
 * A: Because `Request['body']` is `ReadableStream`,
 *    it is very difficult to use.
 * 
 * Q: Why not use `RequestInit` interface?
 * A: Because `RequestInit` has no `url` property,
 *    and its optional properties are not suitable for our cases.
 */
export interface IRequestOptions {
  url: URL
  headers: Headers
  payload?:
  | BodyInit // WHATWG
  | NodeJS.ReadableStream // node-fetch
  signal?: AbortSignal
  keepalive?: boolean
  redirect?: RequestRedirect
}
