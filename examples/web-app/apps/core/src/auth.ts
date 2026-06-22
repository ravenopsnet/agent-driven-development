import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { readServerEnv } from '@ravenopsnet/config'
import { createDatabase, schema } from '@ravenopsnet/db'

const env = readServerEnv()
const db = createDatabase({
  url: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN,
})

export const auth = betterAuth({
  appName: 'RAVEN Web App Reference',
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: 'sqlite',
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
})
