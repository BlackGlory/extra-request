import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function searchParams(searchParams: { [name: string]: string }): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(options.url.href)
    url.search = new URLSearchParams(searchParams).toString()

    return {
      ...options
    , url
    }
  }
}
