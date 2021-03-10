import { createOptions } from './utils'
import { appendHeader } from '@transformers/append-header'

test('appendHeader(name: string, value: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  let result = appendHeader('Content-Type', 'text/plain')(options)
      result = appendHeader('Content-Type', 'application/json')(result)

  expect(result.headers.get('Content-Type')).toBe('text/plain, application/json')
})
