import { HTTPOptionsTransformer, HTTPOptions } from '@src/types'

export function keepalive(val: boolean = true): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    return {
      ...options
    , keepalive: val
    }
  }
}
