import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      },
    ],
    dedupe: ['vue'],
  },
  base: './',
  server: {
    port: 3000,
    https: false,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  },
  optimizeDeps: {
    include: [],
    exclude: ['vue-demi'],
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    terserOptions: {
      compress: {
        keep_infinity: true,
      },
    },
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
})
