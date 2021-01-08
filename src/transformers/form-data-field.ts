import { FormData } from 'extra-fetch'
import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function formDataField(
  name: string
, value: string | string[] | Blob
): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const formData = options.payload instanceof FormData
                    ? cloneFormData(options.payload)
                    : new FormData()
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

function cloneFormData(formData: FormData): FormData{
  const result = new FormData()
  for (const [name, value] of formData.entries()) {
    result.append(name, value)
  }
  return result
}
