import { Headers } from 'extra-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function headers(headers: { [name: string]: string }): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const newHeaders = new Headers(options.headers)
    for (const [name, value] of Object.entries(headers)) {
      newHeaders.append(name, value)
    }

    return {
      ...options
    , headers: newHeaders
    }
  }
}
