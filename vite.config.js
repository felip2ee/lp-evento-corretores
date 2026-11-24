import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Duas páginas: cada uma tem o seu index.html por causa das tags de compartilhamento
  build: { rollupOptions: { input: ['index.html', 'corretores-de-seguro/index.html'] } },
})
