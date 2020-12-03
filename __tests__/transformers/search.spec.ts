import { createOptions } from './utils'
import { search } from '@transformers/search'

test('search(search: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = search('param=value')(options)

  expect(result.url.search).toBe('?param=value')
})
