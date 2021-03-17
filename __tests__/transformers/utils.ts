import { Headers } from 'extra-fetch'
import { IHTTPOptions } from '@src/types'

export function createOptions(): IHTTPOptions {
  return {
    url: new URL('http://localhost')
  , headers: new Headers()
  }
}
