import { test, expect } from 'vitest'
import { createOptions } from './utils.js'
import { csv } from '@transformers/csv.js'

test('csv', () => {
  const options = createOptions()
  const payload = [
    {
      key: 'foo'
    , value: 'bar'
    }
  , {
      key: '"foo"'
    , value: '"bar"'
    }
  , {
      key: '"foo'
    , value: 'bar"'
    }
  , {
      key: '\nfoo'
    , value: 'bar\n'
    }
  , {
      key: ',foo'
    , value: 'bar,'
    }
  ]

  const result = csv(['key', 'value'], payload)(options)

  // RFC 4180 and MIME standards
  expect(result.headers.get('Content-Type')).toBe('text/csv')
  expect(result.payload).toBe(
    'key,value' + '\r\n'
  + 'foo,bar' + '\r\n'
  + '"""foo""","""bar"""' + '\r\n'
  + '"""foo","bar"""' + '\r\n'
  + '"\nfoo","bar\n"' + '\r\n'
  + '",foo","bar,"'
  )
})
