import { createOptions } from './utils.js'
import { url } from '@transformers/url.js'

test('url(...urls: [string, ...string[]]): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = url('http://example.com', 'test')(options)

  expect(result.url.href).toBe('http://example.com/test')
})
