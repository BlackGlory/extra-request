import FormDataNode from 'formdata-node'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function formDataField(
  name: string
, value: string | string[]
       | Blob // browser only
       | ReadableStream | NodeJS.ReadableStream // Node.js only
): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const formData = options.payload instanceof FormDataNode
                    ? cloneFormData(options.payload)
                    : new FormDataNode()
    if (Array.isArray(value)) {
      value.forEach(x => formData.append(name, x))
    } else {
      formData.append(name, value)
    }
    return {
      ...options
    , payload: formData as FormData
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
