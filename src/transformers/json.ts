import { Headers } from 'extra-fetch'
import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function json(payload: any): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'application/json')

    return {
      ...options
    , headers
    , payload: JSON.stringify(payload)
    }
  }
}
