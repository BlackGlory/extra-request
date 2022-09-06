import { createOptions } from './utils.js'
import { signal } from '@transformers/signal.js'
import { AbortController } from 'extra-fetch'

test('signal(signal: AbortSignal): HTTPOptionsTransformer', () => {
  const controller = new AbortController()
  const options = createOptions()

  const result = signal(controller.signal)(options)

  expect(result.signal).toBe(controller.signal)
})
