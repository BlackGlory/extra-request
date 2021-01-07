import FormDataNode from 'formdata-node'
import { createOptions } from './utils'
import { formDataField } from '@transformers/form-data-field'

test('formDataField(naem: string, value: string | Blob | ReadableStream | NodeJS.ReadableStream): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = formDataField('name', 'value')(options)

  expect(result.payload).toBeInstanceOf(FormDataNode)
})
