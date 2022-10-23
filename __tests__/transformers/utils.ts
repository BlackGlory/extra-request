import { Headers } from 'extra-fetch'
import { IRequestOptions } from '@src/types.js'

export function createOptions(
  { pathname }: {
    pathname?: string
  } = {}
): IRequestOptions {
  const url = new URL('protocol://localhost')
  if (pathname) {
    url.pathname = pathname
  }

  return {
    url
  , headers: new Headers()
  }
}
