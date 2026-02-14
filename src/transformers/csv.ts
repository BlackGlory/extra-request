import { Headers } from 'extra-fetch'
import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'
import { unparse } from 'papaparse'
import { NonEmptyArray } from '@blackglory/prelude'

export function csv<Field extends string>(
  header: NonEmptyArray<Field>
, data: Array<Record<Field, number | string>>
): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'text/csv')

    return {
      ...options
    , headers
    , payload: stringify(header, data)
    }
  }
}

function stringify<Field extends string>(
  header: NonEmptyArray<Field>
, data: Array<Record<Field, number | string>>
): string {
  return unparse({
    fields: header
  , data: data
  })
}
