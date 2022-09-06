import { createOptions } from './utils.js'
import { json } from '@transformers/json.js'

test('json(payload: Json): HTTPOptionsTransformer', () => {
  const options = createOptions()

  const result = json('test')(options)

  expect(result.headers.get('Content-Type')).toBe('application/json')
  expect(result.payload).toBe('"test"')
})
