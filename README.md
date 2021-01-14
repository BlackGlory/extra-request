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
interface HTTPOptions {
  url?: URL
  headers?: Headers
  payload?: string
  signal?: AbortSignal
}

type HTTPOptionsTransformer = (options: HTTPOptions) => HTTPOptions
```

### get

```ts
function get(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request
```

### head

```ts
function head(...transformers: Array<HTTPOptionsTransformer | Falsy>: Request
```

### post

```ts
function post(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request
```

### put

```ts
function put(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request
```

### patch

```ts
function patch(...transformers: Array<HTTPOptionsTransformer | Falsy>): Request
```

### del

```ts
function del(...transformers: Array<HTTPOptionsTrransformer | Falsy>): Request
```

### Transformers

#### url

```ts
function url(...urls: [string, ...string[]]): HTTPOptionsTransformer
```

### text

```ts
function text(payload: string): HTTPOptionsTransformer
```

### json

```ts
function json(payload: Json): HTTPOptionsTransformer
```

### csv

```ts
function csv<T extends object>(payload: T[]): HTTPOptionsTransformer
`

### signal

```ts
function signal(signal: AbortSignal): HTTPOptionsTransformer
```

### header

```ts
function header(name: string, value: string): HTTPOptionsTransformer
```

### headers

```ts
function headers(headers: { [name: string]: string }): HTTPOptionsTransformer
```

### host

```ts
function host(host: string): HTTPOptionsTransformer
```

### pathname

```ts
function pathname(pathname: string): HTTPOptionsTransformer
```

### search

```ts
function search(search: string): HTTPOptionsTransformer
```

### searchParams

```ts
function searchParams(searchParams: { [name: string]: string }): HTTPOptionsTransformer
```

### formDataField

```ts
function formDataField(
  name: string
, value: string | string[] | Blob
): HTTPOptionsTransformer
```
