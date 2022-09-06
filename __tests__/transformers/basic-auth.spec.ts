import { createOptions } from './utils.js'
import { basicAuth } from '@transformers/basic-auth.js'

test('basicAuth(username: string, password: string): HTTPOptionsTransformer', () => {
  const username = 'user'
  const password = 'pass'
  const options = createOptions()

  const result = basicAuth(username, password)(options)

  expect(result.headers.get('Authorization')).toBe('Basic dXNlcjpwYXNz')
})
