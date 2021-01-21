import { createOptions } from './utils'
import { basicAuth } from '@transformers/basic-auth'

test('basicAuth(username: string, password: string): HTTPOptionsTransformer', () => {
  const username = 'user'
  const password = 'pass'
  const options = createOptions()

  const result = basicAuth(username, password)(options)

  expect(result.headers.get('Authorization')).toBe('Basic dXNlcjpwYXNz')
})
