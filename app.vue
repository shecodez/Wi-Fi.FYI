<script setup>
// import './assets/styles/main.css'

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

html.dark {
  background: #222;
  color: white;
}
blockquote {
  border-left: 2px solid #dc9e45 !important;
}
</style>
