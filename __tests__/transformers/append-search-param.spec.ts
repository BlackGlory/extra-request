import { createOptions } from './utils'
import { appendSearchParam } from '@transformers/append-search-param'

test('appendSearchParam(name: string, value: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  let result = appendSearchParam('param', 'value')(options)
      result = appendSearchParam('param', 'value')(result)

  expect(result.url.search).toBe('?param=value&param=value')
})
