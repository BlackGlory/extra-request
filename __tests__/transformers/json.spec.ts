import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { json } from '@transformers/json.js'

test('json', () => {
  const options = createOptions()

  const result = json('test')(options)

  expect(result.headers.get('Content-Type')).toBe('application/json')
  expect(result.payload).toBe('"test"')
})
