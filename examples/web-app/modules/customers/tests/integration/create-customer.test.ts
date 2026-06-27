import { Effect } from 'effect'
import { describe, expect, it } from 'vitest'
import { buildCreateCustomer } from '../../core'

describe('buildCreateCustomer', () => {
  it('creates a valid customer entity', async () => {
    const customer = await Effect.runPromise(buildCreateCustomer({ name: 'Ada Lovelace', email: 'ada@example.com' }))

    expect(customer.name).toBe('Ada Lovelace')
    expect(customer.email).toBe('ada@example.com')
    expect(customer.id).toBeTruthy()
  })
})
