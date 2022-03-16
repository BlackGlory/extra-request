import { header } from './header.js'
import { IHTTPOptionsTransformer } from '@src/types.js'
import * as base64 from 'js-base64'

const { btoa } = base64

export function basicAuth(username: string, password: string): IHTTPOptionsTransformer {
  return header('Authorization', 'Basic ' + btoa(`${username}:${password}`))
}
