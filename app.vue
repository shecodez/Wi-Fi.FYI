<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  meta: [
    { name: 'p:domain_verify', content: 'fe34bfe97aff276718eecaae512c3517' }
  ],
})
</script>
