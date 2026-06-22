import { describe, expect, it } from 'vitest'
import { createCustomerInputSchema } from './index'

describe('createCustomerInputSchema', () => {
  it('accepts a valid customer input', () => {
    expect(createCustomerInputSchema.parse({ name: 'Raven', email: 'ops@example.com' })).toEqual({
      name: 'Raven',
      email: 'ops@example.com',
    })
  })
})
