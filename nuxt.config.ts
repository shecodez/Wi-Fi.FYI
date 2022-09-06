import { defineNuxtConfig } from 'nuxt'

import * as siteConfig from './content/site/info.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Environment variables: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: 'en-US',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: siteConfig.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          siteConfig.sitedescription ||
          process.env.npm_package_description ||
          '',
      },
    ],
  },

  generate: {
    //fallback: true,
    exclude: [
      /^\/admin/, // path starts with /admin
    ],
  },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme:  'github-dark',
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },
  runtimeConfig: {
    // Private config that is only available on the server
    // apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      reCaptchaSiteKey: '6LcejH8hAAAAAPXc4uhc6r1oQlrwBetAUmqfXral'
    }
  },
})
