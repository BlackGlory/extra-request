import { Headers } from 'extra-fetch'
import { IRequestOptions } from '@src/types.js'

export function createOptions(
  { pathname, search, hash }: {
    pathname?: string
    search?: string
    hash?: string
  } = {}
): IRequestOptions {
  const url = new URL('protocol://localhost')
  if (pathname) {
    url.pathname = pathname
  }
  if (search) {
    url.search = search
  }
  if (hash) {
    url.hash = hash
  }

  return {
    url
  , headers: new Headers()
  }
}
