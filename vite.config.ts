import path from 'node:path'
import react from '@vitejs/plugin-react'
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

  plugins: [react()],

  optimizeDeps: {
    include: ['styled-components'],
  },

  build: {
    assetsDir: 'static',
  },
})
