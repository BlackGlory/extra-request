import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'

export function signal(signal: AbortSignal): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    return {
      ...options
    , signal
    }
  }
}
