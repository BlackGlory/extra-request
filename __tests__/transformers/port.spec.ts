import { createOptions } from './utils'
import { port } from '@transformers/port'

test('port(port: number): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = port(8080)(options)

  expect(result.url.port).toBe('8080')
})
