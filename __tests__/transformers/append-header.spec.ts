import { createOptions } from './utils.js'
import { appendHeader } from '@transformers/append-header.js'

test('appendHeader(name: string, value: string): RequestOptionsTransformer', () => {
  const options = createOptions()

  let result = appendHeader('Content-Type', 'text/plain')(options)
      result = appendHeader('Content-Type', 'application/json')(result)

  expect(result.headers.get('Content-Type')).toBe('text/plain, application/json')
})
