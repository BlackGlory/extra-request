import { createOptions } from './utils'
import { searchParam } from '@transformers/search-param'

test('searchParam(name: string, value: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = searchParam('param', 'value')(options)

  expect(result.url.search).toBe('?param=value')
})
