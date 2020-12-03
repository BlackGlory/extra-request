import { pathname } from '@transformers/pathname'
import { createOptions } from './utils'

test('pathname(pathname: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = pathname('test')(options)

  expect(result.url.pathname).toBe('/test')
})
