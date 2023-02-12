import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    open: true,
    host: true,
  },

  optimizeDeps: {
    include: ['styled-components'],
  },

  build: {
    assetsDir: 'static',
  },
})
