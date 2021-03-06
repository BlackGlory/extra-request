import { createOptions } from './utils'
import { csv } from '@transformers/csv'

test('csv<T extends object>(payload: T[]): HTTPOptionsTransformer', () => {
  const options = createOptions()
  const payload = [
    { key: 'hello', value: 'world' }
  ]

  const result = csv(payload)(options)

  expect(result.headers.get('Content-Type')).toBe('text/csv')
  expect(result.payload).toBe('key,value\r\nhello,world')
})
