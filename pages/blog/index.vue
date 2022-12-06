<script setup>
definePageMeta({
  layout: 'blog',
})
const blogQuery = queryContent('blog')
  .only(['_path', 'title', 'description', 'date', 'cover_image'])
  .sort({ date: -1 })
  .find() // ; <ContentList :query="blogQuery">
const { data: posts } = await useAsyncData('blog', async () => {
  return await blogQuery
})
const config = useRuntimeConfig()
useHead({
  title: `Blog | ${config.public.appName}`,
  meta: [{ name: 'description', content: `A place for ${config.public.appName}'s blog posts` }],
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold m-4 text-center">
      Blog
    </h1>
    <section class="m-2">
      <client-only>
        <BlogGrid>
          <div class="post p-4 col-span-2 bg-gray-300 dark:bg-gray-900">
            example col-span-2 (opened)
          </div>
          <div class="post p-4 row-span-2 bg-gray-300 dark:bg-gray-900">
            example row-span-2
          </div>
          <template v-for="(p, i) in posts" :key="`post-${i}`">
            <BlogGridPost :post="p" :show-text-left="i % 2 === 0" />
          </template>
        </BlogGrid>
      </client-only>
    </section>
  </div>
</template>
