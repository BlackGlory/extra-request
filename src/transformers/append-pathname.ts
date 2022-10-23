import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'
import { go } from '@blackglory/prelude'

export function appendPathname(pathname: string): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    const base = go(() => {
      const directoryPathname = go(() => {
        let pathname = options.url.pathname
        if (!options.url.pathname.endsWith('/')) {
          pathname += '/'
        }
        return pathname
      })

      const url = new URL(options.url.href)
      url.pathname = directoryPathname

      return url
    })

    const url = new URL(pathname, base)

    return {
      ...options
    , url
    }
  }
}
