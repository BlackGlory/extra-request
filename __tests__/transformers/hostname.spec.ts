import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { hostname } from '@transformers/hostname.js'

test('hostname', () => {
  const options = createOptions({ host: 'example.com:8080' })

  const result = hostname('foo.bar')(options)

  expect(result.url.host).toBe('foo.bar:8080')
})
