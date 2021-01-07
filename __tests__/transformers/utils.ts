import { Headers } from 'extra-fetch'
import { HTTPOptions } from '@src/types'

export function createOptions(): HTTPOptions {
  return {
    url: new URL('http://localhost')
  , headers: new Headers()
  }
}
