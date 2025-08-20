// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon'],
  app: {
    head: {
            link: [
              { rel: 'icon', type: 'type="image/svg+xml"', href: '/favicon.svg' },
              { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
            ]
          }
  }
})