import * as target from '@transformers/index'

test('exports', () => {
  const expectedExports: string[] = [
    'url'

  , 'text'
  , 'json'
  , 'csv'

  , 'signal'

  , 'header'
  , 'appendHeader'
  , 'headers'
  , 'accept'

  , 'host'
  , 'port'
  , 'pathname'
  , 'search'
  , 'searchParam'
  , 'appendSearchParam'
  , 'searchParams'

  , 'formDataField'

  , 'basicAuth'

  , 'keepalive'
  ].sort()

  const actualExports = Object.keys(target).sort()

  expect(actualExports).toStrictEqual(expectedExports)
})
