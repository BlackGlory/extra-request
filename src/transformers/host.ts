import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function host(host: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(options.url.href)
    url.host = host

    return {
      ...options
    , url
    }
  }
}
