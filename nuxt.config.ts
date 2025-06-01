export default defineNuxtConfig({

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
  ],

})