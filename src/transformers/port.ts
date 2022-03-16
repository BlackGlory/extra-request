import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function port(port: number): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const url = new URL(options.url.href)
    url.port = port.toString()

    return {
      ...options
    , url
    }
  }
}
