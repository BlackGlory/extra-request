import { Headers } from 'extra-fetch'
import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function json(payload: any): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'application/json')

    return {
      ...options
    , headers
    , payload: JSON.stringify(payload)
    }
  }
}
