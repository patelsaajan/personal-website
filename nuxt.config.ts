import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare_module',
    alias: {
      '@react-email/render': fileURLToPath(new URL('./server/stubs/react-email-render.mjs', import.meta.url))
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/ui'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})