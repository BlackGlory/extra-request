import { Headers } from 'extra-fetch'
import { IHTTPOptions } from '@src/types.js'

export function createOptions(): IHTTPOptions {
  return {
    url: new URL('http://localhost')
  , headers: new Headers()
  }
}
