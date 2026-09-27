import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Prototipo-VIVA-/', // <--- Adiciona esta linha com o nome exato do repositório
})
