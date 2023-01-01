<script setup>
const {
  params: { tag },
} = useRoute()

const filter = tag.split(',')
const blogQuery = queryContent('blog')
  .only(['_path', 'title', 'description', 'date', 'cover_image'])
  .where({ tags: { $contains: filter } })
  // .sort({ date: -1 })
  .find() // ; <ContentList :query="blogQuery">
const { data: posts } = await useAsyncData('posts-by-tag', async () => {
  return await blogQuery
})

const config = useRuntimeConfig()
useHead({
  title: `${tag} | ${config.public.appName}`,
  meta: [{ name: 'description', content: `${config.public.appName}'s ${tag} posts` }],
})
</script>

<template>
  <div container mx-auto class="p-tags-tag">
    <NuxtLink to="/blog/tags" my-4 py-1 px-2 inline-flex border rounded items-center gap-2 hover:text-orange>
      <div class="i-carbon:arrow-left" />
      Back to Tags
    </NuxtLink>

    <h1 my-10 capitalize font-black text-2xl flex gap-2 items-center justify-center>
      <div i-carbon:tag />
      <span v-if="tag">"{{ filter.toString().replace('-', ' ') }}"</span>
    </h1>

    <section pb-10>
      <ul v-if="posts.length" flex items-center justify-center gap-2>
        <template v-for="(p, i) in posts" :key="`${tag}-post-${i}`">
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
