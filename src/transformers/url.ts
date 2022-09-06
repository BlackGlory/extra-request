import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function url(...urls: [string,...string[]]): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const url = new URL(urls.reduce((acc, cur) => new URL(cur, acc).href))

    return {
      ...options
    , url
    }
  }
}
