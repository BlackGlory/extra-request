import { appendPathname } from '@transformers/append-pathname.js'
import { createOptions } from './utils.js'

describe('appendPathname', () => {
  test('url does not end with slash', () => {
    const options = createOptions({ pathname: '/pathname' })

    const result = appendPathname('/test')(options)

    expect(result.url.pathname).toBe('/pathname/test')
  })

  test('url ends with slash', () => {
    const options = createOptions({ pathname: '/pathname/' })

    const result = appendPathname('/test')(options)

    expect(result.url.pathname).toBe('/pathname/test')
  })
})
