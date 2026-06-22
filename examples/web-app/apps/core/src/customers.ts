import { Effect } from 'effect'
import { createCustomerInputSchema, customerSchema, type CreateCustomerInput } from '@ravenopsnet/domain'

export function buildCreateCustomer(input: CreateCustomerInput) {
  return Effect.sync(() => {
    const data = createCustomerInputSchema.parse(input)
    const now = new Date().toISOString()

    return customerSchema.parse({
      id: crypto.randomUUID(),
      ...data,
    })
  })
}
