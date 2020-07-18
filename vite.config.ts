import path from 'path'
import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  base: process.env.NODE_ENV === 'develop' ? '/' : '/yui540-palette',

  assetsDir: 'static',

  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },

  jsx: 'react',

  plugins: [reactPlugin],
}

export default config
