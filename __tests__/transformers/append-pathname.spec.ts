import { appendPathname } from '@transformers/append-pathname'
import { createOptions } from './utils'

describe('appendPathname', () => {
  describe('pathname', () => {
    test('pathname starts with slash', () => {
      const options = createOptions({ pathname: '/pathname/' })

      const result = appendPathname('/test')(options)

      expect(result.url.pathname).toBe('/pathname/test')
    })

    test('pathname does not start with slash', () => {
      const options = createOptions({ pathname: '/pathname/' })

      const result = appendPathname('test')(options)

      expect(result.url.pathname).toBe('/pathname/test')
    })
  })

  describe('url.pathname', () => {
    test('url.pathname does not end with slash', () => {
      const options = createOptions({ pathname: '/pathname' })

      const result = appendPathname('test')(options)

      expect(result.url.pathname).toBe('/pathname/test')
    })

    test('url.pathname ends with slash', () => {
      const options = createOptions({ pathname: '/pathname/' })

      const result = appendPathname('test')(options)

      expect(result.url.pathname).toBe('/pathname/test')
    })
  })

  test('url.search exists', () => {
    const options = createOptions({
      pathname: '/pathname/'
    , search: '?name=value'
    })

    const result = appendPathname('test')(options)

    expect(result.url.pathname).toBe('/pathname/test')
    expect(result.url.search).toBe('?name=value')
  })

  test('url.hash exists', () => {
    const options = createOptions({
      pathname: '/pathname/'
    , hash: '#hash'
    })

    const result = appendPathname('test')(options)

    expect(result.url.pathname).toBe('/pathname/test')
    expect(result.url.hash).toBe('#hash')
  })
})
