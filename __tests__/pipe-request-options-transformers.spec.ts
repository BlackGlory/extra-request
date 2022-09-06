import { pipeRequestOptionsTransformers } from '@src/pipe-request-options-transformers.js'
import { toArray } from '@blackglory/prelude'
import { host, header, pathname } from '@transformers/index.js'
import { Headers } from 'extra-fetch'

describe('pipeRequestOptionsTransformers', () => {
  test('default', () => {
    const result = pipeRequestOptionsTransformers()

    expect(result).toStrictEqual({
      url: expect.any(URL)
    , headers: expect.any(Headers)
    })
    expect(result.url.href).toBe('http://localhost/')
    expect(toArray(result.headers.entries())).toStrictEqual([])
  })

  test('combine', () => {
    const result = pipeRequestOptionsTransformers(
      host('hostname')
    , pathname('pathname')
    , header('X-Custom', 'custom')
    )

    expect(result).toStrictEqual({
      url: expect.any(URL)
    , headers: expect.any(Headers)
    })
    expect(result.url.href).toBe('http://hostname/pathname')
    expect(toArray(result.headers.entries())).toStrictEqual([
      ['x-custom', 'custom']
    ])
  })
})
