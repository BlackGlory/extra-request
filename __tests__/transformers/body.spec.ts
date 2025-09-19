import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { body } from '@transformers/body.js'
import { toArray } from '@blackglory/prelude'

test('body', () => {
  const options = createOptions()

  const result = body('test')(options)

  expect(toArray(result.headers.keys())).toStrictEqual([])
  expect(result.payload).toBe('test')
})
