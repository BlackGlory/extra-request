import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function url(url: string, ...baseUrls: string[]): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const urls = [options.url, url, ...baseUrls]
    const newURL = new URL(urls.reduce((acc, cur) => new URL(cur, acc).href))

    return {
      ...options
    , url: newURL
    }
  }
}
