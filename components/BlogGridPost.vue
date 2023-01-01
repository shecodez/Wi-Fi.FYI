<script setup>
import { formatDate } from '~~/utils'
defineProps(['post', 'showTextLeft', 'showMediaOnly'])

const postTypeClasses = [
  { type: 'height-2x', classes: 'row-span-2' }, // post.type === 'gallery'
  { type: 'text-only', classes: 'text-2xl' }, // post.type === 'quote'
]
// prop showMediaOnly -> can be post.cover_image | post.cover_video | post.cover_gallery
</script>

<template>
  <div relative aspect-video flex bg-gray-200 dark:bg-gray-900 class="post" :class="showTextLeft && 'flex-row-reverse'">
    <div v-if="post.type === 'quote'" absolute inset-0 opacity-10 text-9xl class="quote-icon">
      <div i-carbon:quotes />
    </div>

    <div v-if="post.cover_image" flex-1 overflow-hidden>
      <!-- <Carousel v-if="post.type === 'gallery'" :slides="post.gallery" /> -->
      <img :src="`/${post.cover_image}`" :alt="post.title" object-cover w-full h-full>
    </div>

    <div v-if="!showMediaOnly" relative p-4 flex-1 flex flex-col items-stretch class="text-container">
      <template v-if="post.cover_image">
        <div v-if="showTextLeft" border-l-gray-200 dark:border-l-gray-900 class="arrow arrow-right" />
        <div v-else border-r-gray-200 dark:border-r-gray-900 class="arrow arrow-left" />
      </template>

      <div flex items-center gap-1 text-sm>
        <div i-carbon:data-enrichment />
        <NuxtLink :to="`/topics/${post._path.split('/')[2]}`" uppercase text-orange hover:underline>
          {{ post._path.split('/')[2].replace('-', ' ') }}
        </NuxtLink>
      </div>

      <h3 leading-5 pt-2 pb-1>
        <NuxtLink :to="post._path" line-clamp-2 hover:text-orange xl:text-2xl :title="post.title">
          {{ post.title }}
        </NuxtLink>
      </h3>

      <p line-clamp-2 lg:line-clamp-1 xl:line-clamp-3 font-thin text-xs text-gray xl:text-base>
        {{ post.description }}
      </p>

      <NuxtLink :to="post._path" self-start my-2 px-3 py-1 text-sm class="rainbow-bg">
        Read More
      </NuxtLink>

      <div v-if="post.date" text-xs mt-auto flex items-center gap-1>
        <div i-carbon:calendar />
        <span>{{ formatDate(new Date(post.date)) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  position: absolute;
  top: 2.5rem;
  /* @apply absolute top-10; */
}
.arrow-right {
  border-left: 20px solid transparent;
  right: -1rem;
  /* @apply  right--4; */
}
.arrow-left {
  border-right: 20px solid transparent;
  left: -1rem;
  /* @apply  -left-4; */
}
</style>
