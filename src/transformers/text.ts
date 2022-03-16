import { Headers } from 'extra-fetch'
import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function text(payload: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'application/x-www-form-urlencoded')

    return {
      ...options
    , headers
    , payload
    }
  }
}
