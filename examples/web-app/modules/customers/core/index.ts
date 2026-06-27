import { Effect } from 'effect'
import { createCustomerInputSchema, customerSchema, type CreateCustomerInput } from '../domain'

export function buildCreateCustomer(input: CreateCustomerInput) {
  return Effect.sync(() => {
    const data = createCustomerInputSchema.parse(input)

    return customerSchema.parse({
      id: crypto.randomUUID(),
      ...data,
    })
  })
}
