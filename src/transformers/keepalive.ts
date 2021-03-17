import { IHTTPOptionsTransformer, IHTTPOptions } from '@src/types'

export function keepalive(val: boolean = true): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    return {
      ...options
    , keepalive: val
    }
  }
}
