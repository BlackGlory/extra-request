import { test, expect } from 'vitest'
import { url } from '@src/transformers/index.js'
import { get, head, post, put, patch, del, request } from '@src/request.js'

test('get', () => {
  const req = get(url('http://example.com'))

  expect(req.method).toBe('GET')
  expect(req.url).toBe('http://example.com/')
})

test('head', () => {
  const req = head(url('http://example.com'))

  expect(req.method).toBe('HEAD')
  expect(req.url).toBe('http://example.com/')
})

test('post', () => {
  const req = post(url('http://example.com'))

  expect(req.method).toBe('POST')
  expect(req.url).toBe('http://example.com/')
})

test('put', () => {
  const req = put(url('http://example.com'))

  expect(req.method).toBe('PUT')
  expect(req.url).toBe('http://example.com/')
})

test('patch', () => {
  const req = patch(url('http://example.com'))

  expect(req.method).toBe('PATCH')
  expect(req.url).toBe('http://example.com/')
})

test('del', () => {
  const req = del(url('http://example.com'))

  expect(req.method).toBe('DELETE')
  expect(req.url).toBe('http://example.com/')
})

test('request', () => {
  const req = request('GET', url('http://example.com'))

  expect(req.method).toBe('GET')
  expect(req.url).toBe('http://example.com/')
})
