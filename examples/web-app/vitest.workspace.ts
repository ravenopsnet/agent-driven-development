import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'apps/web/vite.config.ts',
  'modules/*/vitest.config.ts',
  'packages/*/vitest.config.ts',
])
