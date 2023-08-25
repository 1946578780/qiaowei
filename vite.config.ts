import path from 'path'

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },

      manualChunks(id) {
        if (id.includes('node_modules')) {
          return 'vendor'
        }
      }
    }
  },

  plugins: [
    Vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router'],

      dts: path.resolve('./', 'auto-imports.d.ts')
    })
  ],

  server: {
    hmr: true,
    open: false,
    host: '0.0.0.0',
    https: false
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
