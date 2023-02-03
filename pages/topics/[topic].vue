<script setup>
const {
  params: { topic },
} = useRoute()

const posts = await queryContent('blog', `${topic.toLowerCase().replace(' ', '-')}`)
  .only(['_path', 'title', 'description', 'date', 'cover_image_src', 'cover_video_src', 'cover_slide_arr', 'is_media_only'])
  .sort({ date: -1 })
  .find()
// const { data: posts } = useAsyncData(
//   'posts-by-topic',
//   async () => {
//     return await blogQuery
//   },
//   { initialCache: false },
// )

const config = useRuntimeConfig()
useHead({
  title: `${topic} | ${config.public.appName}`,
  meta: [{ name: 'description', content: `${config.public.appName}'s ${topic} posts` }],
})
</script>

<template>
  <div container mx-auto class="p-topics-topic">
    <NuxtLink to="/topics" my-4 py-1 px-2 inline-flex border rounded items-center gap-2 hover:text-orange>
      <div class="i-carbon:arrow-left" />
      Back to Topics
    </NuxtLink>

    <h1 my-10 text-center capitalize font-black text-2xl>
      <span v-if="topic">"{{ topic.replace('-', ' ') }}"</span>
    </h1>

    <section pb-10>
      <ul v-if="posts.length" flex items-center justify-center gap-2>
        <template v-for="(p, i) in posts" :key="`${topic}-post-${i}`">
          <li p-4 bg-gray-300 dark:bg-gray-900 hover:underline>
            <NuxtLink :to="p._path" font-semibold>
              {{ p.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
      <div v-else text-center>
        No posts found
      </div>
    </section>
  </div>
</template>
