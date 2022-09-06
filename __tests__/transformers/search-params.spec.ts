import { createOptions } from './utils.js'
import { searchParams } from '@transformers/search-params.js'

test(`
  searchParams(
    searchParams: { [name: string]: string | number }
  ): HTTPOptionsTransformer
`, () => {
  const options = createOptions()

  const result = searchParams({ param: 'value' })(options)

  expect(result.url.search).toBe('?param=value')
})
