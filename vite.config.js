import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // اختیاری: پورت dev server
    proxy: {
      '/engine-rest': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false,          // اگر HTTPS نداری
        rewrite: (path) => path.replace(/^\/engine-rest/, '/engine-rest') // فقط تطبیق، تغییری نمی‌خواد
      }
    }
  }
})
