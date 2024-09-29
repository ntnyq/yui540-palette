import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from './scripts/utils'

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ['styled-components'],
  },

  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },

  server: {
    open: true,
  },
})
