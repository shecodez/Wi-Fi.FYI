<script setup lang="ts">
const props = defineProps(['surroundPosts'])

const [prevPost, nextPost] = props.surroundPosts
</script>

<template>
  <section max-w-prose pt-10 mx-auto flex flex-col md:flex-row gap-8 justify-between>
    <NuxtLink v-if="prevPost" :to="prevPost._path" :title="prevPost.title" flex-1>
      <div p-4 border rounded flex flex-col hover:border-orange hover:text-orange items-end>
        <div flex items-center gap-4>
          <div i-carbon:arrow-left />
          <span text-gray text-xs>Previous Post</span>
        </div>
        <h3 text-lg text-right>
          <span text-orange>{{ prevPost._path.split('/')[2] }}</span> {{ prevPost.title }}
        </h3>
      </div>
    </NuxtLink>

    <NuxtLink v-if="nextPost" :to="nextPost._path" :title="nextPost.title" flex-1>
      <div p-4 border rounded flex flex-col hover:border-orange hover:text-orange>
        <div flex items-center gap-4>
          <span text-gray text-xs>Next Post</span>
          <div i-carbon:arrow-right />
        </div>
        <h3 text-lg>
          <span text-orange>{{ nextPost._path.split('/')[2] }}</span> {{ nextPost.title }}
        </h3>
      </div>
    </NuxtLink>
  </section>
</template>
