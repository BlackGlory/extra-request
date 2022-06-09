import { header } from './header.js'
import { IHTTPOptionsTransformer } from '@src/types.js'

export function basicAuth(username: string, password: string): IHTTPOptionsTransformer {
  return header('Authorization', 'Basic ' + btoa(`${username}:${password}`))
}
