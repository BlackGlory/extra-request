import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function search(search: string): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const url = new URL(options.url.href)
    url.search = search

    return {
      ...options
    , url
    }
  }
}
