import { Headers } from 'extra-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function header(name: string, value: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.set(name, value)

    return {
      ...options
    , headers
    }
  }
}
