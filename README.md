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
import { url, json } from 'extra-request/lib/es2018/transformers'

const req = post(
  url('http://example.com')
, json({ hello: 'world' })
)
const res = await fetch(req)
```

## API

```
interface IHTTPOptions {
  url?: URL
  headers?: Headers
  payload?: string | FormData
  signal?: AbortSignal
}

type IHTTPOptionsTransformer = (options: IHTTPOptions) => HTTPOptions
```

### get

```ts
function get(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request
```

### head

```ts
function head(...transformers: Array<IHTTPOptionsTransformer | Falsy>: Request
```

### post

```ts
function post(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request
```

### put

```ts
function put(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request
```

### patch

```ts
function patch(...transformers: Array<IHTTPOptionsTransformer | Falsy>): Request
```

### del

```ts
function del(...transformers: Array<IHTTPOptionsTrransformer | Falsy>): Request
```

### Transformers

#### url

```ts
function url(...urls: [string, ...string[]]): IHTTPOptionsTransformer
```

### text

```ts
function text(payload: string): IHTTPOptionsTransformer
```

### json

```ts
function json(payload: Json): IHTTPOptionsTransformer
```

### csv

```ts
function csv<T extends object>(payload: T[]): IHTTPOptionsTransformer
```

### signal

```ts
function signal(signal: AbortSignal): IHTTPOptionsTransformer
```

### header

```ts
function header(name: string, value: string): IHTTPOptionsTransformer
```

### appendHeader

```ts
function appendHeader(name: string, value: string): IHTTPOptionsTransformer
```

### headers

```ts
function headers(headers: { [name: string]: string }): IHTTPOptionsTransformer
```

### host

```ts
function host(host: string): IHTTPOptionsTransformer
```

### port

```ts
function port(port: number): IHTTPOptionsTransformer
```

### pathname

```ts
function pathname(pathname: string): IHTTPOptionsTransformer
```

### search

```ts
function search(search: string): IHTTPOptionsTransformer
```

### searchParam

```ts
function searchParam(
  name: string
, value: string | number
): IHTTPOptionsTransformer
```

### appendSearchParam

```ts
function appendSearchParam(
  name: string
, value: string | number
): IHTTPOptionsTransformer
```

### searchParams

```ts
function searchParams(
  searchParams: { [name: string]: string | number }
): IHTTPOptionsTransformer
```

### formDataField

```ts
function formDataField(
  name: string
, value: string | string[] | Blob
): IHTTPOptionsTransformer
```

### basicAuth

```ts
function basicAuth(username: string, password: string): IHTTPOptionsTransformer
```

### bearerAuth

```ts
function bearerAuth(token: string): IHTTPOptionsTransformer
```

### keepalive

```ts
function keepalive(val: boolean = true): IHTTPOptionsTransformer
```
