import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function searchParams(
  searchParams: { [name: string]: string | number }
): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const url = new URL(options.url.href)
    const newSearchParams = new URLSearchParams(url.searchParams)
    for (const [name, value] of Object.entries(searchParams)) {
      newSearchParams.set(name, value.toString())
    }
    url.search = newSearchParams.toString()

    return {
      ...options
    , url
    }
  }
}
