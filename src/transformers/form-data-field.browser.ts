import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function formDataField(
  name: string
, value: string | Blob
): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    if (options.payload instanceof FormData) {
      const formData = cloneFormData(options.payload)
      formData.append(name, value)
      return {
        ...options
      , payload: formData
      }
    } else {
      const formData = new FormData()
      formData.append(name, value)
      return {
        ...options
      , payload: formData
      }
    }
  }
}

function cloneFormData(formData: FormData): FormData {
  const result = new FormData()
  for (const [name, value] of formData.entries()) {
    result.append(name, value)
  }
  return result
}
