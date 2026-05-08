import { IRequestOptions, IRequestOptionsTransformer } from '@src/types.js'

export function priority(priority: RequestPriority): IRequestOptionsTransformer {
  return (options: IRequestOptions) => {
    return {
      ...options
    , priority
    }
  }
}
