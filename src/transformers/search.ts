import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'

export function search(search: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const url = new URL(options.url.href)
    url.search = search

    return {
      ...options
    , url
    }
  }
}
