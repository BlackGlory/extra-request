import { header } from './header.js'
import { IHTTPOptionsTransformer } from '@src/types.js'

export function bearerAuth(token: string): IHTTPOptionsTransformer {
  return header('Authorization', `Bearer ${token}`)
}
