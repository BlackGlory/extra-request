import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { headers } from '@transformers/headers.js'

test('headers', () => {
  const options = createOptions()

  const result = headers({
    'Content-Type': 'text/plain'
  , 'Content-Length': '100'
  })(options)

  expect(result.headers.get('Content-Type')).toBe('text/plain')
  expect(result.headers.get('Content-Length')).toBe('100')
})
