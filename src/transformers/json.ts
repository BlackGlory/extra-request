import { Headers } from 'extra-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function json(payload: any): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'application/json')

    return {
      ...options
    , headers
    , payload: JSON.stringify(payload)
    }
  }
}
