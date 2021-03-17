import { header } from './header'
import { IHTTPOptionsTransformer } from '@src/types'
import { btoa } from 'js-base64'

export function basicAuth(username: string, password: string): IHTTPOptionsTransformer {
  return header('Authorization', 'Basic ' + btoa(`${username}:${password}`))
}
