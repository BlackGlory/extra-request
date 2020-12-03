import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function signal(signal: AbortSignal): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    return {
      ...options
    , signal
    }
  }
}
