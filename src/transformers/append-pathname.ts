import { IHTTPOptions, IHTTPOptionsTransformer } from '@src/types'
import { go } from '@blackglory/prelude'

export function appendPathname(pathname: string): IHTTPOptionsTransformer {
  return (options: IHTTPOptions) => {
    const base = go(() => {
      const url = new URL(options.url.href)
      url.pathname = url.pathname.endsWith('/')
                   ? url.pathname
                   : `${url.pathname}/`

      return url
    })

    const url = new URL(
      pathname.replace(/^\/*/, '')
    , base
    )
    url.search = base.search
    url.hash = base.hash

    return {
      ...options
    , url
    }
  }
}
