<script setup lang="ts">
defineProps(['showInput'])
</script>

<template>
  <div v-if="showInput">
    <input p-2 rounded w-full border bg-transparent>
  </div>
</template>

