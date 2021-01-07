import FormDataNode from 'formdata-node'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function formDataField(
  name: string
, value: string
       | Blob // browser only
       | ReadableStream | NodeJS.ReadableStream // Node.js only
): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    if (options.payload instanceof FormDataNode) {
      const formData = cloneFormData(options.payload)
      formData.append(name, value)
      return {
        ...options
      , payload: formData as FormData
      }
    } else {
      const formData = new FormDataNode()
      formData.append(name, value)
      return {
        ...options
      , payload: formData as FormData
      }
    }
  }
}

function cloneFormData(formData: FormDataNode): FormDataNode {
  const result = new FormDataNode()
  for (const [name, value] of formData.entries()) {
    result.append(name, value)
  }
  return result
}
