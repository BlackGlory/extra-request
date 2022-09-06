import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function host(host: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const url = new URL(options.url.href)
    url.host = host

    return {
      ...options
    , url
    }
  }
}
