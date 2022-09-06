import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function host(host: string): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const url = new URL(options.url.href)
    url.host = host

    return {
      ...options
    , url
    }
  }
}
