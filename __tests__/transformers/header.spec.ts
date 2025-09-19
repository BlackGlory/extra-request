import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { header } from '@transformers/header.js'

test('header', () => {
  const options = createOptions()

  let result = header('Content-Type', 'text/plain')(options)
      result = header('Content-Type', 'application/json')(result)

  expect(result.headers.get('Content-Type')).toBe('application/json')
})
