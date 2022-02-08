/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as volar from '@volar/experimental/compiler'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      name: 'VueCalendar',
      entry: path.resolve(__dirname, 'src/library.ts'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(volar.getVuePluginOptionsForVite())],
})
