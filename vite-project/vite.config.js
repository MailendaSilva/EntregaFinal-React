import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist', // Especifica la ruta de salida de la compilación
    base: './', // Indica que la aplicación se ejecutará desde la raíz del proyecto
  },
});