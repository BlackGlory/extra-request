import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { searchParams } from '@transformers/search-params.js'

test('searchParams', () => {
  const options = createOptions()

  const result = searchParams({
    foo: 'foo-value'
  , bar: 'bar-value'
  , baz: undefined
  })(options)

  expect(result.url.search).toBe('?foo=foo-value&bar=bar-value')
})
