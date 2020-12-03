import { Headers } from 'cross-fetch'
import { Json } from '@blackglory/types'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function json(payload: Json): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.append('Content-Type', 'application/json')

    return {
      ...options
    , headers
    , payload: JSON.stringify(payload)
    }
  }
}
