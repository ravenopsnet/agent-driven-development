import type { Health } from '../domain'

export function HealthStatus({ health }: { health: Health }) {
  return (
    <p className="text-sm text-muted-foreground">
      Core health: {health.service} on {health.runtime}
    </p>
  )
}
