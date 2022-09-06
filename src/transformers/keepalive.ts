import { IRequestOptionsTransformer, IRequestOptions } from '@src/types.js'

export function keepalive(val: boolean = true): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    return {
      ...options
    , keepalive: val
    }
  }
}
