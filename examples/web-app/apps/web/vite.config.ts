import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'

export default defineConfig({
  plugins: [tanstackStart(), nitro({ preset: 'bun' }), react(), tailwindcss()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: '../../vitest.setup.ts',
  },
})
