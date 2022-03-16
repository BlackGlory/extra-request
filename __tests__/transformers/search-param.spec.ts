import { createOptions } from './utils.js'
import { searchParam } from '@transformers/search-param.js'

test(`
  searchParam(name: string, value: string | number): HTTPOptionsTransformer
`, () => {
  const options = createOptions()

  let result = searchParam('param', 'value')(options)
      result = searchParam('param', 'value')(result)

  expect(result.url.search).toBe('?param=value')
})
