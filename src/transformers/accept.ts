import { appendHeader } from './append-header.js'
import { IHTTPOptionsTransformer } from '@src/types.js'

export function accept(accept: string): IHTTPOptionsTransformer {
  return appendHeader('Accept', accept)
}
