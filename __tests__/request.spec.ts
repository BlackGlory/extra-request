import { url } from '@src/transformers/index.js'
import { get, head, post, put, patch, del } from '@src/request.js'

test('get(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request', () => {
  const req = get(url('http://example.com'))

  expect(req.method).toBe('GET')
  expect(req.url).toBe('http://example.com/')
})

test('head(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request', () => {
  const req = head(url('http://example.com'))

  expect(req.method).toBe('HEAD')
  expect(req.url).toBe('http://example.com/')
})

test('post(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request', () => {
  const req = post(url('http://example.com'))

  expect(req.method).toBe('POST')
  expect(req.url).toBe('http://example.com/')
})

test('put(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request', () => {
  const req = put(url('http://example.com'))

  expect(req.method).toBe('PUT')
  expect(req.url).toBe('http://example.com/')
})

test('patch(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request', () => {
  const req = patch(url('http://example.com'))

  expect(req.method).toBe('PATCH')
  expect(req.url).toBe('http://example.com/')
})

test('del(...transformers: Array<HTTPOptionsTrransformer | Falsy>): Request', () => {
  const req = del(url('http://example.com'))

  expect(req.method).toBe('DELETE')
  expect(req.url).toBe('http://example.com/')
})
