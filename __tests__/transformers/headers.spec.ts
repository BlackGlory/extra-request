import { describe, test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { Headers } from 'extra-fetch'
import { headers } from '@transformers/headers.js'

describe('headers', () => {
  test('Record', () => {
    const options = createOptions()

    const result = headers({
      'Content-Type': 'text/plain'
    , 'Content-Length': '100'
    })(options)

    expect(result.headers.get('Content-Type')).toBe('text/plain')
    expect(result.headers.get('Content-Length')).toBe('100')
  })

  test('Headers', () => {
    const options = createOptions()

    const result = headers(new Headers({
      'Content-Type': 'text/plain'
    , 'Content-Length': '100'
    }))(options)

    expect(result.headers.get('Content-Type')).toBe('text/plain')
    expect(result.headers.get('Content-Length')).toBe('100')
  })
})
