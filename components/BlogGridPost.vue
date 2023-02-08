<script setup>
import { formatDate } from '~~/utils'
defineProps(['post', 'showTextLeft', 'isMediaOnly', 'isSlideShow'])

const postTypeClasses = [
  { type: 'height-2x', classes: 'row-span-2' },
  { type: 'text-only', classes: 'text-2xl' },
]
</script>

<template>
  <div relative aspect-video flex bg-gray-200 dark:bg-gray-900 class="post" :class="showTextLeft && 'flex-row-reverse'">
    <div v-if="post.isTitleOnly" absolute inset-0 opacity-10 text-9xl class="quote-icon">
      <div i-carbon:quotes />
    </div>

    <div relative flex-1 overflow-hidden class="media-container" :class="showTextLeft ? 'pan-left' : 'pan-right'">
      <img v-if="post.cover_image_src" :src="`/${post.cover_image_src}`" :alt="post.title" object-cover w-full h-full>
      <Carousel v-else-if="isSlideShow" :slides="post.cover_slide_arr" />
      <Iframe v-else-if="post.cover_video_src" :src="post.cover_video_src" width="100%" height="100%" />
      <NuxtLink v-if="isMediaOnly" :to="post._path" absolute top-0 right-0 px-1 py-1 text-sm class="rainbow-bg">
        <div i-carbon:caret-right />
      </NuxtLink>
    </div>

    <div v-if="!isMediaOnly" relative p-4 flex-1 flex flex-col items-stretch class="text-container">
      <div v-if="showTextLeft" class="arrow arrow-right border-l-gray-200 dark:border-l-gray-900" />
      <div v-else class="arrow arrow-left border-r-gray-200 dark:border-r-gray-900" />

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

      <NuxtLink :to="post._path" self-start my-2 px-2 py-1 class="rainbow-bg">
        <div flex gap-1 items-center text-sm>
          Read More
          <div i-carbon:caret-right />
        </div>
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
  right: -1.25rem;
  border-left-color: rgb(229, 231, 235);
  /* @apply  right--5; */
}
.arrow-left {
  border-right: 20px solid transparent;
  left: -1.25rem;
  border-right-color: rgb(229, 231, 235);
  /* @apply  -left-5; */
}

.media-container img {
  overflow: hidden;
  transition: transform .5s ease-in-out;
  transform: scaleX(1.4);

}
.media-container.pan-left img {
transform-origin: 0 0;
}
.media-container.pan-right img {
transform-origin: 100% 0;
}
.media-container:hover.pan-left img {
  transform: scaleX(1.4) translateX(-25%)
}
.media-container:hover.pan-right img {
  transform: scaleX(1.4) translateX(25%)
}
</style>
