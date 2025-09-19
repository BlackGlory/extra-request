import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { text } from '@transformers/text.js'

test('text', () => {
  const options = createOptions()

  const result = text('test')(options)

  expect(result.headers.get('Content-Type')).toBe('application/x-www-form-urlencoded')
  expect(result.payload).toBe('test')
})
