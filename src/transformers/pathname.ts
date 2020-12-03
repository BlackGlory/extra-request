import { HTTPOptions, HTTPOptionsTransformer } from '@src/types'

export function pathname(pathname: string): HTTPOptionsTransformer {
  return (options: HTTPOptions) => {
    const url = new URL(options.url.href)
    url.pathname = pathname

    return {
      ...options
    , url
    }
  }
}
