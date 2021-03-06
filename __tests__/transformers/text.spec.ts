import { createOptions } from './utils'
import { text } from '@transformers/text'

test('text(payload: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = text('test')(options)

  expect(result.headers.get('Content-Type')).toBe('application/x-www-form-urlencoded')
  expect(result.payload).toBe('test')
})
