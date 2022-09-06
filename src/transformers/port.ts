import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function port(port: number): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const url = new URL(options.url.href)
    url.port = port.toString()

    return {
      ...options
    , url
    }
  }
}
