import { IHTTPOptionsTransformer, IHTTPOptions } from '@src/types.js'

export function keepalive(val: boolean = true): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    return {
      ...options
    , keepalive: val
    }
  }
}
