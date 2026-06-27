import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Button } from '@ravenopsnet/ui/button'
import { getSystemHealth } from '@ravenopsnet/health'
import { HealthStatus } from '@ravenopsnet/health/web'
import { CustomersReferencePanel } from '@ravenopsnet/customers/web'

const getHealth = createServerFn({ method: 'GET' }).handler(async () => getSystemHealth())

export const Route = createFileRoute('/')({
  loader: () => getHealth(),
  component: HomePage,
})

function HomePage() {
  const health = Route.useLoaderData()

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center gap-6 px-6">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        RAVEN reference stack
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">Agent Driven Development Web App</h1>
      <p className="text-lg text-muted-foreground">
        A minimal reference app for pnpm, Vite+, TypeScript 6, TanStack Start on Bun,
        Better Auth, Drizzle, Turso, Effect, Tailwind, OXC, and the external @ravenopsnet/ui package.
      </p>
      <HealthStatus health={health} />
      <CustomersReferencePanel />
      <Button>Start building</Button>
    </main>
  )
}
