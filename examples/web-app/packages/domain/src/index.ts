import { z } from 'zod'

export const customerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email().optional(),
})

export const createCustomerInputSchema = customerSchema.omit({ id: true })

export const healthSchema = z.object({
  ok: z.literal(true),
  service: z.string().min(1),
  runtime: z.literal('bun'),
})

export type Customer = z.infer<typeof customerSchema>
export type CreateCustomerInput = z.infer<typeof createCustomerInputSchema>
export type Health = z.infer<typeof healthSchema>
