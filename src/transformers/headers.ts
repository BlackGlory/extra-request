import { Headers } from 'extra-fetch'
import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function headers<T extends Record<string, string>>(
  headers: T
): IRequestOptionsTransformer
export function headers(
  headers: Headers
): IRequestOptionsTransformer
export function headers(
  headers: Record<string, string> | Headers
): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const newHeaders = new Headers(options.headers)

    if (headers instanceof Headers) {
      for (const [name, value] of headers.entries()) {
        newHeaders.set(name, value)
      }
    } else {
      for (const [name, value] of Object.entries(headers)) {
        newHeaders.set(name, value)
      }
    }

    return {
      ...options
    , headers: newHeaders
    }
  }
}
