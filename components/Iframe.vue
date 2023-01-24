<script setup lang="ts">
defineProps(['width', 'height', 'src', 'title'])
// w: 560 h: 315
</script>

<template>
  <iframe
    :width="width" :height="height"
    :src="src"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</template>
