import { createOptions } from './utils.js'
import { accept } from '@transformers/accept.js'

test('accept(accept: string): RequestOptionsTransformer', () => {
  const options = createOptions()

  const result = accept('text/plain')(options)

  expect(result.headers.get('Accept')).toBe('text/plain')
})
