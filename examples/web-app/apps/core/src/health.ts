import { Effect } from 'effect'
import { healthSchema, type Health } from '@ravenopsnet/domain'

export const getSystemHealthEffect = Effect.succeed(
  healthSchema.parse({
    ok: true,
    service: 'core',
    runtime: 'bun',
  }),
)

export async function getSystemHealth(): Promise<Health> {
  return Effect.runPromise(getSystemHealthEffect)
}
