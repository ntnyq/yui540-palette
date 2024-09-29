import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from './scripts/utils'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },

  server: {
    open: true,
  },

  plugins: [react()],

  optimizeDeps: {
    include: ['styled-components'],
  },
})
