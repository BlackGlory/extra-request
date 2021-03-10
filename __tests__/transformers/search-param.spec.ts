import { createOptions } from './utils'
import { searchParam } from '@transformers/search-param'

test('searchParam(name: string, value: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  let result = searchParam('param', 'value')(options)
      result = searchParam('param', 'value')(result)

  expect(result.url.search).toBe('?param=value')
})
