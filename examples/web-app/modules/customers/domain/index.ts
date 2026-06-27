import { z } from 'zod'

export const customerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email().optional(),
})

export const createCustomerInputSchema = customerSchema.omit({ id: true })

export type Customer = z.infer<typeof customerSchema>
export type CreateCustomerInput = z.infer<typeof createCustomerInputSchema>

export const customerFixtures = {
  ada: customerSchema.parse({
    id: 'cust_ada',
    name: 'Ada Lovelace',
    email: 'ada@example.com',
  }),
}
