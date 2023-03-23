import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function body(val: BodyInit): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    return {
      ...options
    , payload: val
    }
  }
}
