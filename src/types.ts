export type IRequestOptionsTransformer = (options: IRequestOptions) => IRequestOptions

export interface IRequestOptions {
  url: URL
  headers: Headers
  payload?: BodyInit
  signal?: AbortSignal
  keepalive?: boolean
  redirect?: RequestRedirect
}
