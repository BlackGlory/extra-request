import { Headers } from 'cross-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function text(payload: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    return {
      ...options
    , headers
    , payload
    }
  }
}
