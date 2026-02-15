import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { text } from '@transformers/text.js'

test('text', () => {
  const options = createOptions()

  const result = text('test')(options)

  expect(result.headers.get('Content-Type')).toBe('text/plain')
  expect(result.payload).toBe('test')
})
