import { header } from './header'
import { IHTTPOptionsTransformer } from '@src/types'

export function bearerAuth(token: string): IHTTPOptionsTransformer {
  return header('Authorization', `Bearer ${token}`)
}
