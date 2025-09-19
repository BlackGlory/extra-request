import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { bearerAuth } from '@transformers/bearer-auth.js'

test('bearerAuth', () => {
  const token = 'token'
  const options = createOptions()

  const result = bearerAuth(token)(options)

  expect(result.headers.get('Authorization')).toBe(`Bearer ${token}`)
})
