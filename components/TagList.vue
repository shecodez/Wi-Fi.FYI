<script setup lang="ts">
defineProps(['tags'])
const showTags = ref(true)
</script>

<template>
  <div flex items-center gap-2 py-2>
    <button flex items-center gap-2 @click="showTags = !showTags">
      <div i-carbon:tag />
      <span uppercase>Tag(s):</span>
    </button>
    <nav v-if="showTags" flex flex-wrap items-center gap-2>
      <template v-for="(tag, n) in tags" :key="n">
        <NuxtLink :to="`/blog/tags/${tag}`" rounded-md bg-gray-200 px-2 py-0.5 text-gray-900 transition-all whitespace-nowrap class="hover:-translate-y-0.5">
          <span text-gray-500>#</span>{{ tag }}
        </NuxtLink>
      </template>
    </nav>
  </div>
</template>
