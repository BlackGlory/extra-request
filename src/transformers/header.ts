import { Headers } from 'cross-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function header(name: string, value: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.append(name, value)

    return {
      ...options
    , headers
    }
  }
}
