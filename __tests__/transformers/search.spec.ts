import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { search } from '@transformers/search.js'

test('search', () => {
  const options = createOptions()

  const result = search('param=value')(options)

  expect(result.url.search).toBe('?param=value')
})
