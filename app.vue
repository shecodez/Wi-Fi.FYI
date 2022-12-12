<script setup>
import './assets/styles/main.css'

useHead({
  title: 'VviFi FYI',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  background-color: white;
  color: #1f2937;
  /* @apply bg-white text-gray-800; */
}
html.dark body {
  background-color: #1f2937;
  color: white;
  /* @apply bg-gray-800 text-white; */
}

blockquote {
  border-left: 2px solid #dc9e45 !important;
}
</style>
