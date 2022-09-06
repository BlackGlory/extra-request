import { createOptions } from './utils.js'
import { accept } from '@transformers/accept.js'

test('accept(accept: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = accept('text/plain')(options)

  expect(result.headers.get('Accept')).toBe('text/plain')
})
