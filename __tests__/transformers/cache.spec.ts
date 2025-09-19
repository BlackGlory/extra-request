import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { cache } from '@transformers/cache.js'

test('cache', () => {
  const options = createOptions()

  const result = cache('no-store')(options)

  expect(result.cache).toBe('no-store')
})
