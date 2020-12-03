import { createOptions } from './utils'
import { header } from '@transformers/header'

test('header(name: string, value: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = header('Content-Type', 'text/plain')(options)

  expect(result.headers.get('Content-Type')).toBe('text/plain')
})
