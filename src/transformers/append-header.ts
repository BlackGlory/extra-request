import { Headers } from 'extra-fetch'
import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function appendHeader(name: string, value: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.append(name, value)

    return {
      ...options
    , headers
    }
  }
}
