import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://141.227.128.150:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // Configuración específica para evitar el OPTIONS preflight
        secure: false,
        ws: true
      }
    }
  }
})