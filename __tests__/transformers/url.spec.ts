import { describe, test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { url } from '@transformers/url.js'

describe('url', () => {
  test('absolute url', () => {
    const options = createOptions()

    const result = url('http://example.com', 'test')(options)

    expect(result.url.href).toBe('http://example.com/test')
  })

  test('relative url', () => {
    const options = createOptions()

    const result = url('/foo/bar', 'baz')(options)

    expect(result.url.href).toBe('protocol://localhost/foo/baz')
  })

  test('URL object', () => {
    const options = createOptions()

    const result = url(new URL('http://example.com'), 'test')(options)

    expect(result.url.href).toBe('http://example.com/test')
  })
})
