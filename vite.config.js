import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),cloudflare({
    wrangler: {
      compatibilityDate: '2025-08-19',
    },})],
})

