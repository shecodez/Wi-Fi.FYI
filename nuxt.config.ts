export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@formkit/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  // https://v3.nuxtjs.org/migration/runtime-config#runtime-config
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      appName: 'VviFi . FYI',
      appDescription: 'VviFi.FYI - Lil Travel & Tech * Lil EDC * Lot of Nerdy 💩',
      siteUrl: 'https://vvifi.fyi',
    },
  },
})
