import { createOptions } from './utils.js'
import { port } from '@transformers/port.js'

test('port(port: number): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = port(8080)(options)

  expect(result.url.port).toBe('8080')
})
