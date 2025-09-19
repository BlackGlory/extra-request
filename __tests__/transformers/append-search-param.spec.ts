import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { appendSearchParam } from '@transformers/append-search-param.js'

test('appendSearchParam', () => {
  const options = createOptions()

  let result = appendSearchParam('param', 'value')(options)
      result = appendSearchParam('param', 'value')(result)

  expect(result.url.search).toBe('?param=value&param=value')
})
