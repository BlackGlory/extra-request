import { Headers, Request } from 'extra-fetch'
import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'
import { isFunction } from '@blackglory/types'
import { Falsy } from 'justypes'

export function get(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request {
  return request('GET', ...transformers)
}

export function head(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request {
  return request('HEAD', ...transformers)
}

export function post(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request {
  return request('POST', ...transformers)
}

export function put(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request {
  return request('PUT', ...transformers)
}

export function patch(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request {
  return request('PATCH', ...transformers)
}

export function del(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request {
  return request('DELETE', ...transformers)
}

function request(
  method: 'GET' | 'HEAD' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
, ...transformers: Array<IHTTPOptionsTransformer | Falsy>
): Request {
  const options: IHTTPOptions = transformers.reduce<IHTTPOptions>(
    (options, trans) => isFunction(trans) ? trans(options) : options
  , {
      url: new URL('http://localhost')
    , headers: new Headers()
    }
  )

  const headers = new Headers(options.headers)

  return new Request(options.url.href, {
    method
  , headers
  , signal: options.signal ?? null // This is a patch, should be fixed in node-fetch@beta10
  , body: options.payload
  })
}
