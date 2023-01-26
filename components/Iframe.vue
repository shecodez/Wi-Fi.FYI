<script setup lang="ts">
defineProps(['width', 'height', 'src'])
// w: 560 h: 315
</script>

<template>
  <iframe
    :width="width" :height="height"
    :src="src"
    title="Video Player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</template>
