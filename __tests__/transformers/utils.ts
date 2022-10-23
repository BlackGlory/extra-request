import { Headers } from 'extra-fetch'
import { IHTTPOptions } from '@src/types'

export function createOptions(
  { pathname, search, hash }: {
    pathname?: string
    search?: string
    hash?: string
  } = {}
): IHTTPOptions {
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
