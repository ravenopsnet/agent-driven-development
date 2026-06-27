import { describe, expect, it } from 'vitest'
import { createCustomerInputSchema, customerSchema } from '../../domain'

describe('customer schemas', () => {
  it('validates customer input', () => {
    expect(createCustomerInputSchema.parse({ name: 'Ada Lovelace', email: 'ada@example.com' })).toEqual({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
    })
  })

  it('rejects invalid email addresses', () => {
    expect(() => customerSchema.parse({ id: '1', name: 'Ada', email: 'not-email' })).toThrow()
  })
})
