import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { priority } from '@transformers/priority.js'

test('priority', () => {
  const options = createOptions()

  const result = priority('low')(options)

  expect(result.priority).toBe('low')
})
