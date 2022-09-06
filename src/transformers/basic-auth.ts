import { header } from './header.js'
import { IRequestOptionsTransformer } from '@src/types.js'

export function basicAuth(username: string, password: string): IRequestOptionsTransformer {
  return header('Authorization', 'Basic ' + btoa(`${username}:${password}`))
}
