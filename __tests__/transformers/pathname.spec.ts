import { test, expect } from 'vitest'
import { pathname } from '@transformers/pathname.js'
import { createOptions } from './utils.js'

test('pathname', () => {
  const options = createOptions()

  const result = pathname('test')(options)

  expect(result.url.pathname).toBe('/test')
})
