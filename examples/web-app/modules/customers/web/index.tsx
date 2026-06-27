import { Button } from '@ravenopsnet/ui/button'
import { customerFixtures } from '../domain'

export function CustomersReferencePanel() {
  const customer = customerFixtures.ada

  return (
    <section className="rounded-lg border bg-card p-4 text-card-foreground">
      <div className="space-y-1">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Customers module</p>
        <h2 className="text-2xl font-semibold tracking-tight">{customer.name}</h2>
        <p className="text-sm text-muted-foreground">{customer.email}</p>
      </div>
      <div className="mt-4">
        <Button>Open customer workflow</Button>
      </div>
    </section>
  )
}
