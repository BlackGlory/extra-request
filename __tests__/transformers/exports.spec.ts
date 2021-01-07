import * as target from '@transformers/index'

test('exports', () => {
  const expectedExports: string[] = [
    'url'

  , 'text'
  , 'json'

  , 'signal'

  , 'header'
  , 'headers'
  , 'accept'

  , 'host'
  , 'pathname'
  , 'search'
  , 'searchParam'
  , 'searchParams'

  , 'formDataField'
  ].sort()

  const actualExports = Object.keys(target).sort()

  expect(actualExports).toStrictEqual(expectedExports)
})
