<script setup>
import VviFimon from '~~/components/vvifimon/Index.vue'
</script>

<template>
  <main text-center>
    <div pt-18 px-10>
      <slot />
    </div>
    <Footer />
    <VviFimon />
  </main>
</template>
