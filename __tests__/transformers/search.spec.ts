import { createOptions } from './utils.js'
import { search } from '@transformers/search.js'

test('search(search: string): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = search('param=value')(options)

  expect(result.url.search).toBe('?param=value')
})
