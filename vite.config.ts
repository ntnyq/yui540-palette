import path from 'path'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  alias: {
    '/@': path.resolve(__dirname, 'src'),
  },

  optimizeDeps: {
    include: ['styled-components'],
  },

  build: {
    assetsDir: 'static',
  },
}

export default config
