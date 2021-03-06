import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'

export function searchParams(searchParams: { [name: string]: string }): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const url = new URL(options.url.href)
    const newSearchParams = new URLSearchParams(url.searchParams)
    for (const [name, value] of Object.entries(searchParams)) {
      newSearchParams.set(name, value)
    }
    url.search = newSearchParams.toString()

    return {
      ...options
    , url
    }
  }
}
