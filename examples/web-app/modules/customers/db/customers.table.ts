import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const customers = sqliteTable('customers', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})
