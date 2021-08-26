import { createOptions } from './utils'
import { searchParams } from '@transformers/search-params'

test(`
  searchParams(
    searchParams: { [name: string]: string | number }
  ): HTTPOptionsTransformer
`, () => {
  const options = createOptions()

  const result = searchParams({ param: 'value' })(options)

  expect(result.url.search).toBe('?param=value')
})
