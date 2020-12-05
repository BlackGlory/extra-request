import { createOptions } from './utils'
import { accept } from '@transformers/accept'

test('accept(accept: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = accept('text/plain')(options)

  expect(result.headers.get('Accept')).toBe('text/plain')
})
