import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { host } from '@transformers/host.js'

test('host', () => {
  const options = createOptions()

  const result = host('example.com:8080')(options)

  expect(result.url.host).toBe('example.com:8080')
})
