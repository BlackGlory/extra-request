import { Headers } from 'extra-fetch'
import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'

export function header(name: string, value: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.set(name, value)

    return {
      ...options
    , headers
    }
  }
}
