import { Headers } from 'extra-fetch'
import { IRequestOptions } from '@src/types.js'

export function createOptions(): IRequestOptions {
  return {
    url: new URL('Request://localhost')
  , headers: new Headers()
  }
}
