import { createOptions } from './utils'
import { header } from '@transformers/header'

test('header(name: string, value: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  let result = header('Content-Type', 'text/plain')(options)
      result = header('Content-Type', 'application/json')(result)

  expect(result.headers.get('Content-Type')).toBe('application/json')
})
