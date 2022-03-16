import { FormData } from 'extra-fetch'
import { createOptions } from './utils.js'
import { formDataField } from '@transformers/form-data-field.js'

describe('formDataField(naem: string, value: string | string[] | Blob | ReadableStream | NodeJS.ReadableStream): HTTPOptionsTransformer', () => {
  it('return HTTPOptionsTransformer', () => {
    const options = createOptions()

    const result = formDataField('name', 'value')(options)

    expect(result.payload).toBeInstanceOf(FormData)
  })

  describe('value is array', () => {
    const options = createOptions()

    const result = formDataField('name', ['value1', 'value2'])(options)

    expect(result.payload).toBeInstanceOf(FormData)
    expect((result.payload as FormData).getAll('name')).toEqual(['value1', 'value2'])
  })
})
