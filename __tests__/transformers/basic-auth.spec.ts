import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { basicAuth } from '@transformers/basic-auth.js'

test('basicAuth', () => {
  const username = 'user'
  const password = 'pass'
  const options = createOptions()

  const result = basicAuth(username, password)(options)

  expect(result.headers.get('Authorization')).toBe('Basic dXNlcjpwYXNz')
})
