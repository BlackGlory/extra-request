export type HTTPOptionsTransformer = (options: HTTPOptions) => HTTPOptions

export interface HTTPOptions {
  url: URL
  headers: Headers
  payload?: string | FormData
  signal?: AbortSignal
  keepalive?: boolean
}
