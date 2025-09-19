import { describe, test, expect } from 'vitest'
import { FormData } from 'extra-fetch'
import { createOptions } from './utils.js'
import { formDataField } from '@transformers/form-data-field.js'

describe('formDataField', () => {
  test('non-array', () => {
    const options = createOptions()

    const result = formDataField('name', 'value')(options)

    expect(result.payload).toBeInstanceOf(FormData)
  })

  test('array', () => {
    const options = createOptions()

    const result = formDataField('name', ['value1', 'value2'])(options)

    expect(result.payload).toBeInstanceOf(FormData)
    expect((result.payload as FormData).getAll('name')).toEqual(['value1', 'value2'])
  })
})
