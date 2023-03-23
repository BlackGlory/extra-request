# extra-request
Utilities for [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request).

## Install
```sh
npm install --save extra-request
# or
yarn add extra-request
```

## Usage
```ts
import { post } from 'extra-request'
import { url, json } from 'extra-request/transformers'

const req = post(
  url('http://example.com')
, json({ hello: 'world' })
)
const res = await fetch(req)
```

## API
```ts
interface IRequestOptions {
  url?: URL
  headers?: Headers
  payload?: string | FormData
  signal?: AbortSignal
  keepalive?: boolean
  redirect?: RequestRedirect
}

type IRequestOptionsTransformer = (options: IRequestOptions) => RequestOptions
```

### get
```ts
function get(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request
```

### head
```ts
function head(...transformers: Array<IRequestOptionsTransformer | Falsy>: Request
```

### post
```ts
function post(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request
```

### put
```ts
function put(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request
```

### patch
```ts
function patch(...transformers: Array<IRequestOptionsTransformer | Falsy>): Request
```

### del
```ts
function del(...transformers: Array<IRequestOptionsTrransformer | Falsy>): Request
```

### pipeRequestOptionsTransformers
```ts
function pipeRequestOptionsTransformers(
  ...transformers: Array<IRequestOptionsTransformer | Falsy>
): IRequestOptions
```

### Transformers
#### url
```ts
function url(url: string, ...baseUrls: string[]): IRequestOptionsTransformer
```

#### text
```ts
function text(payload: string): IRequestOptionsTransformer
```

#### json
```ts
function json<T extends JSONValue | JSONSerializable<any>>(
  payload: T
): IRequestOptionsTransformer
```

#### csv
```ts
function csv<T extends object>(payload: T[]): IRequestOptionsTransformer
```

#### signal
```ts
function signal(signal: AbortSignal): IRequestOptionsTransformer
```

#### header
```ts
function header(name: string, value: string): IRequestOptionsTransformer
```

#### appendHeader
```ts
function appendHeader(name: string, value: string): IRequestOptionsTransformer
```

#### headers
```ts
function headers(headers: { [name: string]: string }): IRequestOptionsTransformer
```

#### host
```ts
function host(host: string): IRequestOptionsTransformer
```

#### port
```ts
function port(port: number): IRequestOptionsTransformer
```

#### pathname
```ts
function pathname(pathname: string): IRequestOptionsTransformer
```

#### appendPathname
```ts
function appendPathname(pathname: string): IRequestOptionsTransformer
```

#### search
```ts
function search(search: string): IRequestOptionsTransformer
```

#### searchParam
```ts
function searchParam(
  name: string
, value: string | number
): IRequestOptionsTransformer
```

#### appendSearchParam
```ts
function appendSearchParam(
  name: string
, value: string | number
): IRequestOptionsTransformer
```

#### searchParams
```ts
function searchParams(
  searchParams: Record<string, string | number>
): IRequestOptionsTransformer
```

#### formDataField
```ts
function formDataField(
  name: string
, value: string | string[] | Blob
): IRequestOptionsTransformer
```

#### basicAuth
```ts
function basicAuth(username: string, password: string): IRequestOptionsTransformer
```

#### bearerAuth
```ts
function bearerAuth(token: string): IRequestOptionsTransformer
```

#### keepalive
```ts
function keepalive(val: boolean = true): IRequestOptionsTransformer
```

#### redirect
```ts
function redirect(val: RequestRedirect): IRequestOptionsTransformer
```

#### body
```ts
function body(val: BodyInit): IRequestOptionsTransformer
```
