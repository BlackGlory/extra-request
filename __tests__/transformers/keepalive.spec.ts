import { describe, test, expect } from 'vitest'
import { keepalive } from '@transformers/keepalive.js'
import { createOptions } from './utils.js'

describe('keepalive', () => {
  test('(): RequestOptionsTransformer', () => {
    const options = createOptions()

    const result = keepalive()(options)

    expect(result.keepalive).toBe(true)
  })

  test('(val: boolean): RequestOptionsTransformer', () => {
    const options = createOptions()

    const result = keepalive(false)(options)

    expect(result.keepalive).toBe(false)
  })
})
