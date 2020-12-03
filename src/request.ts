import { Headers, Request } from 'cross-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function get(...transformers: HTTPOptionsTransformer[]): Request {
  return request('GET', ...transformers)
}

export function head(...transformers: HTTPOptionsTransformer[]): Request {
  return request('HEAD', ...transformers)
}

export function post(...transformers: HTTPOptionsTransformer[]): Request {
  return request('POST', ...transformers)
}

export function put(...transformers: HTTPOptionsTransformer[]): Request {
  return request('PUT', ...transformers)
}

export function patch(...transformers: HTTPOptionsTransformer[]): Request {
  return request('PATCH', ...transformers)
}

export function del(...transformers: HTTPOptionsTransformer[]): Request {
  return request('DELETE', ...transformers)
}

function request(
  method: 'GET' | 'HEAD' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
, ...transformers: HTTPOptionsTransformer[]
): Request {
  const options: HTTPOptions = transformers.reduce<HTTPOptions>(
    (options, trans) => trans(options)
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
