export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@formkit/nuxt',
    // '@nuxtjs/recaptcha',
  ],
  // recaptcha: {
  //   hideBadge: false,
  //   siteKey: process.env.RECAPTCHA_SITE_KEY,
  //   size: 'normal',
  //   version: 2,
  // },
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
      reCaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
      // mailchimpListId: process.env.MAILCHIMP_LIST_ID,
    },
  },
})
