import { createOptions } from './utils'
import { signal } from '@transformers/signal'
import { AbortController } from 'extra-fetch'

test('signal(signal: AbortSignal): HTTPOptionsTransformer', () => {
  const controller = new AbortController()
  const options = createOptions()

  const result = signal(controller.signal)(options)

  expect(result.signal).toBe(controller.signal)
})
