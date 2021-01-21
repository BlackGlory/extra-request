import { header } from './header'
import { HTTPOptionsTransformer } from '@src/types'
import { btoa } from 'js-base64'

export function basicAuth(username: string, password: string): HTTPOptionsTransformer {
  return header('Authorization', 'Basic ' + btoa(`${username}:${password}`))
}
