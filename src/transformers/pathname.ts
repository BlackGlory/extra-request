import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types.js'

export function pathname(pathname: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const url = new URL(options.url.href)
    url.pathname = pathname

    return {
      ...options
    , url
    }
  }
}
