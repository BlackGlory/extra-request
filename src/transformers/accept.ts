import { appendHeader } from './append-header'
import { IHTTPOptionsTransformer } from '@src/types'

export function accept(accept: string): IHTTPOptionsTransformer {
  return appendHeader('Accept', accept)
}
