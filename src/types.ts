export type IRequestOptionsTransformer = (options: IRequestOptions) => IRequestOptions

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
