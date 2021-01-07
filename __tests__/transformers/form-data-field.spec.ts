import FormDataNode from 'formdata-node'
import { createOptions } from './utils'
import { formDataField } from '@transformers/form-data-field'

describe('formDataField(naem: string, value: string | string[] | Blob | ReadableStream | NodeJS.ReadableStream): HTTPOptionsTransformer', () => {
  it('return HTTPOptionsTransformer', () => {
    const options = createOptions()

    const result = formDataField('name', 'value')(options)

    expect(result.payload).toBeInstanceOf(FormDataNode)
  })

  describe('value is array', () => {
    const options = createOptions()

    const result = formDataField('name', ['value1', 'value2'])(options)

    expect(result.payload).toBeInstanceOf(FormDataNode)
    expect((result.payload as FormDataNode).getAll('name')).toEqual(['value1', 'value2'])
  })
})
