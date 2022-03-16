import { keepalive } from '@transformers/keepalive.js'
import { createOptions } from './utils.js'

test('keepalive(): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = keepalive()(options)

  expect(result.keepalive).toBe(true)
})

test('keepalive(val: boolean): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = keepalive(false)(options)

  expect(result.keepalive).toBe(false)
})
