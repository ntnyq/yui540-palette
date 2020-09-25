import path from 'path'
import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  assetsDir: 'static',

  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },

  jsx: 'react',

  plugins: [reactPlugin],

  optimizeDeps: {
    include: ['styled-components'],
  },
}

export default config
