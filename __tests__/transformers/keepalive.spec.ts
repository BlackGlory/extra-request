import { keepalive } from '@transformers/keepalive.js'
import { createOptions } from './utils.js'

test('keepalive(): RequestOptionsTransformer', () => {
  const options = createOptions()

  const result = keepalive()(options)

  expect(result.keepalive).toBe(true)
})

test('keepalive(val: boolean): RequestOptionsTransformer', () => {
  const options = createOptions()

  const result = keepalive(false)(options)

  expect(result.keepalive).toBe(false)
})
