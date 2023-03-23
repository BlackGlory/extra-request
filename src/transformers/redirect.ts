import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function redirect(val: RequestRedirect): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    return {
      ...options
    , redirect: val
    }
  }
}
