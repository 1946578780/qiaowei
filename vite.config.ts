import path from 'path'

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ViteCompression from 'vite-plugin-compression'

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
    }),
    ViteCompression({
      verbose: true, // 默认即可
      threshold: 10240, // 压缩前最小文件大小
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' //文件类型
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
