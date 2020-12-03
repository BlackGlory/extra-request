import { url } from '@src/transformers'
import { get, head, post, put, patch, del } from '@src/request'

test('get(...transformers: HTTPOptionsTransformer[]): Request', () => {
  const req = get(url('http://example.com'))

  expect(req.method).toBe('GET')
  expect(req.url).toBe('http://example.com/')
})

test('head(...transformers: HTTPOptionsTransformer[]: Request', () => {
  const req = head(url('http://example.com'))

  expect(req.method).toBe('HEAD')
  expect(req.url).toBe('http://example.com/')
})

test('post(...transformers: HTTPOptionsTransformer[]): Request', () => {
  const req = post(url('http://example.com'))

  expect(req.method).toBe('POST')
  expect(req.url).toBe('http://example.com/')
})

test('put(...transformers: HTTPOptionsTransformer[]): Request', () => {
  const req = put(url('http://example.com'))

  expect(req.method).toBe('PUT')
  expect(req.url).toBe('http://example.com/')
})

test('patch(...transformers: HTTPOptionsTransformer[]): Request', () => {
  const req = patch(url('http://example.com'))

  expect(req.method).toBe('PATCH')
  expect(req.url).toBe('http://example.com/')
})

test('del(...transformers: HTTPOptionsTrransformer[]): Request', () => {
  const req = del(url('http://example.com'))

  expect(req.method).toBe('DELETE')
  expect(req.url).toBe('http://example.com/')
})
