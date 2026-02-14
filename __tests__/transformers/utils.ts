import { Headers } from 'extra-fetch'
import { IRequestOptions } from '@src/types.js'

export function createOptions(
  { host, pathname, search, hash }: {
    host?: string
    pathname?: string
    search?: string
    hash?: string
  } = {}
): IRequestOptions {
  const url = new URL('protocol://localhost')

  if (host) url.host = host
  if (pathname) url.pathname = pathname
  if (search) url.search = search
  if (hash) url.hash = hash

  return {
    url
  , headers: new Headers()
  }
}
