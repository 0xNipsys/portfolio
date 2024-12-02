import { fileURLToPath, URL } from 'node:url'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'node:path'
import * as fs from 'node:fs'

function removeMockWorker(): PluginOption {
  return {
    name: 'removeMockWorker',
    writeBundle(outputOptions) {
      if (!outputOptions.dir) return
      const workerFile = 'mockServiceWorker.js'
      const mockWorker = path.resolve(outputOptions.dir, workerFile)
      fs.rm(mockWorker, {}, () => console.log(`\nDeleted ${workerFile}`))
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), removeMockWorker()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
