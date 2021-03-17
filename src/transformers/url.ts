import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'

export function url(...urls: [string,...string[]]): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const url = new URL(urls.reduce((acc, cur) => new URL(cur, acc).href))

    return {
      ...options
    , url
    }
  }
}
