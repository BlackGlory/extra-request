import { createOptions } from './utils.js'
import { host } from '@transformers/host.js'

test('host(host: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = host('example.com')(options)

  expect(result.url.host).toBe('example.com')
})
