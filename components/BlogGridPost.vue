<script setup>
// import { formatDate } from '~~/utils'
defineProps(['post', 'showTextLeft', 'showMediaOnly'])
const postTypeClasses = [
  { type: 'height-2x', classes: 'row-span-2' }, // post.type === 'gallery'
  { type: 'text-only', classes: 'p-text-xl' }, // post.type === 'quote'
]
// post.isMediaOnly -> can be post.cover_image | post.embed_media | post.gallery
</script>

<template>
  <div class="post relative aspect-video flex bg-gray-300 dark:bg-gray-900" :class="showTextLeft && 'flex-row-reverse'">
    <div v-if="post.type === 'quote'" class="quote-icon absolute inset-0 opacity-10 text-9xl">
      <div class="i-carbon:quotes" />
    </div>

    <div v-if="post.cover_image" class="media-container flex-1 overflow-hidden">
      <img :src="`/${post.cover_image}`" :alt="post.title" class="post-img object-cover w-full h-full">
      <!-- <Carousel v-if="post.type === 'gallery'" :slides="post.gallery" /> -->
    </div>
    <div v-if="!showMediaOnly" class="text-container relative flex-1 flex flex-col items-stretch p-4">
      <template v-if="post.cover_image">
        <div v-if="showTextLeft" class="arrow arrow-right border-l-gray-300 dark:border-l-gray-900" />
        <div v-else class="arrow arrow-left border-r-gray-300 dark:border-r-gray-900" />
      </template>
      <small class="topic uppercase text-teal-500 text-xs pb-1">
        <NuxtLink :to="`/topics/${post._path.split('/')[2]}`" class="hover:underline">
          {{ post._path.split('/')[2].replace('-', ' ') }}
        </NuxtLink>
      </small>
      <h3 class="title hover:text-teal-500 text-xl leading-5 pb-2">
        <NuxtLink :to="post._path" class="line-clamp-2" :title="post.title">
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="description tracking-wide font-thin leading-relaxed line-clamp-3 text-xs lg:text-base">
        {{ post.description }}
      </p>
      <NuxtLink :to="post._path" class="read-more-btn border self-start mt-3 px-3 py-1">
        Read More
      </NuxtLink>
      <!-- <small v-if="post.date" class="date text-xs uppercase mt-auto">{{ formatDate(new Date(post.date)) }}</small> -->
      <small v-if="post.date" class="date text-xs uppercase mt-auto">{{ post.date }}</small>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
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
  right: -1.25rem;
  /* @apply  -right-5; */
}
.arrow-left {
  border-right: 20px solid transparent;
  left: -1.25rem;
  /* @apply  -left-5; */
}
</style>
