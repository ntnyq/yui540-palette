import path from 'node:path'
import { defineConfig } from 'vite'
import million from 'million/compiler'
import react from '@vitejs/plugin-react'

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

  plugins: [react(), million.vite({ auto: true, mute: true })],

  optimizeDeps: {
    include: ['styled-components'],
  },

  build: {
    assetsDir: 'static',
  },
})
