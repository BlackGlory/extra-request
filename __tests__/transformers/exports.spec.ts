import * as target from '@transformers/index'

test('exports', () => {
  const expectedExports: string[] = [
    'url'

  , 'text'
  , 'json'
  , 'csv'

  , 'signal'

  , 'header'
  , 'headers'
  , 'accept'

  , 'host'
  , 'port'
  , 'pathname'
  , 'search'
  , 'searchParam'
  , 'searchParams'

  , 'formDataField'

  , 'basicAuth'
  ].sort()

  const actualExports = Object.keys(target).sort()

  expect(actualExports).toStrictEqual(expectedExports)
})
