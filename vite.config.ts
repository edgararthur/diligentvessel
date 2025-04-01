import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name) {
            if (assetInfo.name.endsWith('.jpg') || 
                assetInfo.name.endsWith('.png') ||
                assetInfo.name.endsWith('.jpeg') ||
                assetInfo.name.endsWith('.gif')) {
              return 'assets/images/[name]-[hash][extname]';
            }
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: path.resolve(__dirname, 'public'),
  esbuild: {
    // Set a newer target to support import.meta
    target: 'es2020',
    // Fix issues with JSX in .tsx files
    jsx: 'automatic',
  },
}))
