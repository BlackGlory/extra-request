import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function search(search: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(options.url.href)
    url.search = search

    return {
      ...options
    , url
    }
  }
}
