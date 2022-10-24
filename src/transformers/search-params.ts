import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'
import { setSearchParams } from 'url-operator'

export function searchParams(
  searchParams: Record<string, string | number>
): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    return {
      ...options
    , url: setSearchParams(options.url, searchParams)
    }
  }
}
