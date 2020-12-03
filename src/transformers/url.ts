import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function url(...urls: [string,...string[]]): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(urls.reduce((acc, cur) => new URL(cur, acc).href))

    return {
      ...options
    , url
    }
  }
}
