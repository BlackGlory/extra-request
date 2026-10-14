import { describe, test, expect } from 'vitest'
import { body, url } from '@src/transformers/index.js'
import { get, head, post, put, patch, del, request } from '@src/request.js'

describe('shortcut', () => {
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
})

describe('request', () => {
  test('general', () => {
    const req = request('GET', url('http://example.com'))

    expect(req.method).toBe('GET')
    expect(req.url).toBe('http://example.com/')
  })

  describe('upload', () => {
    test('body is not ReadableStream', () => {
      const text = 'text'
      const req = request(
        'POST'
      , url('http://example.com')
      , body(text)
      )

      expect(req.method).toBe('POST')
      expect(req.url).toBe('http://example.com/')
      expect(req.body).toBeInstanceOf(ReadableStream)
      // @ts-expect-error duplex是存在的, 但TypeScript还没跟进.
      expect(req.duplex).toBe('half') // 对当前版本的undici来说, duplex会在body非ReadableStream时自动设为'half'.
    })

    test('body is ReadableStream', () => {
      const stream = new ReadableStream()
      const req = request(
        'POST'
      , url('http://example.com')
      , body(stream)
      )

      expect(req.method).toBe('POST')
      expect(req.url).toBe('http://example.com/')
      expect(req.body).toBe(stream)
      // @ts-expect-error duplex是存在的, 但TypeScript还没跟进.
      expect(req.duplex).toBe('half')
    })
  })
})
