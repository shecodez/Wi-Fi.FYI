export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@formkit/nuxt',
    '@nuxtjs/algolia',
    '@nuxtjs/robots',
    // '@nuxtjs/recaptcha',
  ],
  // recaptcha: {
  //   hideBadge: false,
  //   siteKey: process.env.RECAPTCHA_SITE_KEY,
  //   size: 'normal',
  //   version: 2,
  // },
  // robots: {
  //   /* module options */
  // },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
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
      appName: 'VviFi.FYI',
      appDescription: 'VviFi– the nerdy nomads hotspot for #tech, #travel, and #food –.FYI',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://vvifi.fyi',
      cloudinaryResUrl: process.env.CLOUDINARY_RES_URL,
      reCaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
      // mailchimpListId: process.env.MAILCHIMP_LIST_ID,
    },
  },
})
