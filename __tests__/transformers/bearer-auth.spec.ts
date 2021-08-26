import { createOptions } from './utils'
import { bearerAuth } from '@transformers/bearer-auth'

test('bearerAuth(token: string): HTTPOptionsTransformer', () => {
  const token = 'token'
  const options = createOptions()

  const result = bearerAuth(token)(options)

  expect(result.headers.get('Authorization')).toBe(`Bearer ${token}`)
})
