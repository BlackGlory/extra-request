import { createOptions } from './utils'
import { host } from '@transformers/host'

test('host(host: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = host('example.com')(options)

  expect(result.url.host).toBe('example.com')
})
