import { test, expect } from 'vitest'
import * as target from '@transformers/index.js'

test('exports', () => {
  const expectedExports: string[] = [
    'url'

  , 'text'
  , 'json'
  , 'csv'

  , 'header'
  , 'appendHeader'
  , 'headers'
  , 'accept'

  , 'host'
  , 'port'
  , 'pathname'
  , 'appendPathname'
  , 'search'
  , 'searchParam'
  , 'appendSearchParam'
  , 'searchParams'

  , 'formDataField'

  , 'basicAuth'
  , 'bearerAuth'

  , 'signal'
  , 'keepalive'
  , 'redirect'
  , 'body'
  , 'cache'
  ].sort()

  const actualExports = Object.keys(target).sort()

  expect(actualExports).toStrictEqual(expectedExports)
})
