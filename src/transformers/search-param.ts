import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function searchParam(
  name: string
, value: string | number
): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const url = new URL(options.url.href)
    const newSearchParams = new URLSearchParams(url.searchParams)
    newSearchParams.set(name, value.toString())
    url.search = newSearchParams.toString()

    return {
      ...options
    , url
    }
  }
}
