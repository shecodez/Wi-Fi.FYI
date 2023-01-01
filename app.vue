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

a:hover {
  color: rgb(251, 146, 60);
}

blockquote {
  border-left: 2px solid rgb(251, 146, 60) !important;
}

article a[href]:not(:where(
  /* exclude hash only links */
  [href^="#"],
  /* exclude relative but not double slash only links */
  [href^="/"]:not([href^="//"]),
)) {
  color: rgb(251, 146, 60);
}
</style>
