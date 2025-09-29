// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // <-- 1. Importamos el plugin

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ // <-- 2. Añadimos la configuración del plugin
      registerType: 'autoUpdate',
      manifest: {
        name: 'Universo 8090',
        short_name: 'Universo8090',
        description: 'La radio retro que te transporta a las décadas de los 80 y 90.',
        theme_color: '#0b1020',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})