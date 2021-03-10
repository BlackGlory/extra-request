import { appendHeader } from './append-header'
import { HTTPOptionsTransformer } from '@src/types'

export function accept(accept: string): HTTPOptionsTransformer {
  return appendHeader('Accept', accept)
}
