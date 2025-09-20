export type IRequestOptionsTransformer = (options: IRequestOptions) => IRequestOptions

// 为什么不使用`RequestInit`接口:
// - `RequestInit`没有`url`属性.
// - `RequestInit`的类型更不明确, 例如`headers`的类型是`HeadersInit`, 不便处理.
export interface IRequestOptions {
  url: URL
  headers: Headers
  payload?: BodyInit
  signal?: AbortSignal
  keepalive?: boolean
  redirect?: RequestRedirect
  cache?: RequestCache
}
