import { Headers } from 'extra-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function appendHeader(name: string, value: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.append(name, value)

    return {
      ...options
    , headers
    }
  }
}
