import { z } from 'zod'

export const healthSchema = z.object({
  ok: z.literal(true),
  service: z.string().min(1),
  runtime: z.literal('bun'),
})

export type Health = z.infer<typeof healthSchema>
