import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: './src/types/components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          axios: [['default', 'axios']],
        },
      ],
      dts: './src/types/auto-imports.d.ts',
      dirs: ['./src/composables', './src/services', './src/stores'],
    }),
  ],
  base: '/vue-pokedex-v2/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
