import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function url(...urls: [string, ...string[]]): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const newURL = new URL(
      [options.url, ...urls].reduce((acc, cur) => new URL(cur, acc))
    )

    return {
      ...options
    , url: newURL
    }
  }
}
