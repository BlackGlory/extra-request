import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'
import { setHostname } from 'url-operator'

export function hostname(hostname: string): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    return {
      ...options
    , url: setHostname(options.url, hostname)
    }
  }
}
