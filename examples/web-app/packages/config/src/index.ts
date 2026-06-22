import { z } from 'zod'

export const serverEnvSchema = z.object({
  TURSO_DATABASE_URL: z.string().min(1).default('file:local.db'),
  TURSO_AUTH_TOKEN: z.string().optional(),
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.string().url().default('http://localhost:3000'),
})

export type ServerEnv = z.infer<typeof serverEnvSchema>

export function readServerEnv(env: Record<string, string | undefined> = process.env): ServerEnv {
  return serverEnvSchema.parse(env)
}
