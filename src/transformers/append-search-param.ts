import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function appendSearchParam(name: string, value: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(options.url.href)
    const newSearchParams = new URLSearchParams(url.searchParams)
    newSearchParams.append(name, value)
    url.search = newSearchParams.toString()

    return {
      ...options
    , url
    }
  }
}
