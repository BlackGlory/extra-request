import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'

export function appendSearchParam(name: string, value: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
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
