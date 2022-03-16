import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function signal(signal: AbortSignal): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    return {
      ...options
    , signal
    }
  }
}
