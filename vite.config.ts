import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Cấu hình chuẩn cho Vite + React + GitHub Pages
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    base: process.env.NODE_ENV === 'production' ? '/Tinhnhanh/' : '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  }
})
