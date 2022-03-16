import { Headers } from 'extra-fetch'
import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function headers(headers: { [name: string]: string }): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const newHeaders = new Headers(options.headers)
    for (const [name, value] of Object.entries(headers)) {
      newHeaders.set(name, value)
    }

    return {
      ...options
    , headers: newHeaders
    }
  }
}
