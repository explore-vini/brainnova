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
      '/brainova': {
        target: 'https://cloudia.explorevini.com',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})