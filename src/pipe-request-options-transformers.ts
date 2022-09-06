import { Headers } from 'extra-fetch'
import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'
import { isFunction } from '@blackglory/types'
import { Falsy } from 'justypes'

export function pipeRequestOptionsTransformers(
  ...transformers: Array<IRequestOptionsTransformer | Falsy>
): IRequestOptions {
  return transformers.reduce<IRequestOptions>(
    (options, transformer) => isFunction(transformer) ? transformer(options) : options
  , {
      url: new URL('http://localhost')
    , headers: new Headers()
    }
  )
}
