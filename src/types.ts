export type IHTTPOptionsTransformer = (options: IHTTPOptions) => IHTTPOptions

export interface IHTTPOptions {
  url: URL
  headers: Headers
  payload?: string | FormData
  signal?: AbortSignal
  keepalive?: boolean
}
