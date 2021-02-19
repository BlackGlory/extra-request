import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function port(port: number): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(options.url.href)
    url.port = port.toString()

    return {
      ...options
    , url
    }
  }
}
