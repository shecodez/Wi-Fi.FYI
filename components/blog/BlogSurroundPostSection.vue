<script setup lang="ts">
const props = defineProps(['surroundPosts'])

const [prevPost, nextPost] = props.surroundPosts
</script>

<template>
  <section max-w-prose pt-10 mx-auto flex flex-col md:flex-row gap-8 justify-between>
    <NuxtLink v-if="prevPost" :to="prevPost._path" :title="prevPost.title" flex-1 border-l-10 border-teal>
      <div py-2 px-4 flex flex-col hover:border-teal hover:text-teal>
        <div flex items-center gap-4>
          <div i-carbon:arrow-left />
          <span text-gray text-xs>Previous Post</span>
        </div>
        <h4 text-teal>
          {{ prevPost._path.split('/')[2] }}
        </h4>
        <h3 text-lg line-clamp-3>
          {{ prevPost.title }}
        </h3>
      </div>
    </NuxtLink>

    <NuxtLink v-if="nextPost" :to="nextPost._path" :title="nextPost.title" flex-1 border-r-10 border-orange>
      <div py-2 px-4 flex flex-col hover:border-orange hover:text-orange items-end text-right>
        <div flex items-center gap-4>
          <span text-gray text-xs>Next Post</span>
          <div i-carbon:arrow-right />
        </div>
        <h4 text-orange>
          {{ nextPost._path.split('/')[2] }}
        </h4>
        <h3 text-lg line-clamp-3>
          {{ nextPost.title }}
        </h3>
      </div>
    </NuxtLink>
  </section>
</template>
