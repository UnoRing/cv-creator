import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      // Add fast refresh options
      fastRefresh: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
    host: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watch: {
      usePolling: true, // Ensure file changes are detected
      interval: 100,
    },
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 5174,
    host: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: [
      'localhost',
      'cv.studio-010.com',
      '.studio-010.com',
    ],
  },
  base: '/',
  build: {
    // Improve chunk size handling
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          pdf: ['@react-pdf/renderer'],
          docx: ['docx', 'file-saver']
        },
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Ensure assets are handled correctly
    assetsDir: '',
    emptyOutDir: true,
  }
}) 