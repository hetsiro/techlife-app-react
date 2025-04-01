import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/techlife-app-react/', // 👈 muy importante
  build: {
    outDir: 'docs', // <--- Aquí cambias "dist" por "docs"
  },
})