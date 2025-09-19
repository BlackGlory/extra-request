import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { redirect } from '@transformers/redirect.js'

test('redirect', () => {
  const options = createOptions()

  const result = redirect('manual')(options)

  expect(result.redirect).toBe('manual')
})
