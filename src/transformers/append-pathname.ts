import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'
import { go } from '@blackglory/prelude'

export function appendPathname(pathname: string): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
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
