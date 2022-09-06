import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function pathname(pathname: string): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const url = new URL(options.url.href)
    url.pathname = pathname

    return {
      ...options
    , url
    }
  }
}
