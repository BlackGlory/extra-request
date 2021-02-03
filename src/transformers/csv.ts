import { Headers } from 'extra-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'
import { unparse } from 'papaparse'
import { assert } from '@blackglory/errors'

export function csv<T extends object>(payload: T[]): HTTPOptionsTransformer {
  assert(payload.length > 0, 'payload must be a non-empty array')

  return (options: HTTPOptions) => {
    const headers = new Headers(options.headers)
    headers.append('Content-Type', 'text/csv')

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
