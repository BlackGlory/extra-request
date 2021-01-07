import { Headers, Request } from 'extra-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'
import { Falsy, isFunction } from '@blackglory/types'

export function get(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request {
  return request('GET', ...transformers)
}

export function head(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request {
  return request('HEAD', ...transformers)
}

export function post(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request {
  return request('POST', ...transformers)
}

export function put(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request {
  return request('PUT', ...transformers)
}

export function patch(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request {
  return request('PATCH', ...transformers)
}

export function del(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request {
  return request('DELETE', ...transformers)
}

function request(
  method: 'GET' | 'HEAD' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
, ...transformers: Array<HTTPOptionsTransformer | Falsy>
): Request {
  const options: HTTPOptions = transformers.reduce<HTTPOptions>(
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
  , signal: options.signal
  , body: options.payload
  })
}
