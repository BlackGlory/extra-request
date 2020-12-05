import { header } from './header'
import { HTTPOptionsTransformer } from '@src/types'

export function accept(accept: string): HTTPOptionsTransformer {
  return header('Accept', accept)
}
