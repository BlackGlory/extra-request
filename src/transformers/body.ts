import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function body(val: BodyInit | NodeJS.ReadableStream): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    return {
      ...options
    , payload: val
    }
  }
}
