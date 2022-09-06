import { Headers, Request } from 'extra-fetch'
import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'
import { isFunction } from '@blackglory/types'
import { Falsy } from 'justypes'

export function get(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request {
  return request('GET', ...transformers)
}

export function head(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request {
  return request('HEAD', ...transformers)
}

export function post(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request {
  return request('POST', ...transformers)
}

export function put(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request {
  return request('PUT', ...transformers)
}

export function patch(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request {
  return request('PATCH', ...transformers)
}

export function del(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request {
  return request('DELETE', ...transformers)
}

function request(
  method: 'GET' | 'HEAD' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
, ...transformers: Array<IRequestOptionsTransformer | Falsy>
): Request {
  const options: IRequestOptions = transformers.reduce<IRequestOptions>(
    (options, transformer) => isFunction(transformer) ? transformer(options) : options
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
  , keepalive: options.keepalive
  })
}
