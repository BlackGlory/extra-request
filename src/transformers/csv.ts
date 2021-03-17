import { Headers } from 'extra-fetch'
import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'
import { unparse } from 'papaparse'
import { assert } from '@blackglory/errors'

export function csv<T extends object>(payload: T[]): IHTTPOptionsTransformer {
  assert(payload.length > 0, 'payload must be a non-empty array')

  return (options: IHTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'text/csv')

    return {
      ...options
    , headers
    , payload: stringify(payload)
    }
  }
}

function stringify<T extends object>(data: T[]): string {
  const fields = Object.keys(data[0])
  return unparse({ data, fields })
}
