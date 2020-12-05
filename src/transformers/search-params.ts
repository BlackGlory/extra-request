import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function searchParams(searchParams: { [name: string]: string }): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(options.url.href)
    const newSearchParams = new URLSearchParams(url.searchParams)
    for (const [name, value] of Object.entries(searchParams)) {
      newSearchParams.append(name, value)
    }
    url.search = newSearchParams.toString()

    return {
      ...options
    , url
    }
  }
}
