import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'apps/web/vite.config.ts',
  'apps/core/vitest.config.ts',
  'packages/*/vitest.config.ts',
])
