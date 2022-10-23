import { Headers } from 'extra-fetch'
import { IHTTPOptions } from '@src/types'

export function createOptions(
  { pathname }: {
    pathname?: string
  } = {}
): IHTTPOptions {
  const url = new URL('protocol://localhost')
  if (pathname) {
    url.pathname = pathname
  }

  return {
    url
  , headers: new Headers()
  }
}
