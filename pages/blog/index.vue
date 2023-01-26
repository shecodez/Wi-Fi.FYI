<script setup>
const blogQuery = queryContent('blog')
  .only(['_path', 'title', 'description', 'date', 'cover_image_src', 'cover_video_src', 'cover_slide_arr'])
  .sort({ date: -1 })
  .find() // ; <ContentList :query="blogQuery">
const { data: posts } = await useAsyncData('blog', async () => {
  return await blogQuery
})
const config = useRuntimeConfig()
useHead({
  title: `Blog | ${config.public.appName}`,
  meta: [{ name: 'description', content: `${config.public.appName}'s articles` }],
})
</script>

<template>
  <div>
    <h1 sr-only>
      Articles
    </h1>
    <section m-2>
      <client-only>
        <BlogGrid>
          <!-- <div class="post p-4 col-span-2 bg-gray-300 dark:bg-gray-900">
            example col-span-2 (opened)
          </div>
          <div class="post p-4 row-span-2 bg-gray-300 dark:bg-gray-900">
            example row-span-2
          </div> -->
          <template v-for="(p, i) in posts" :key="`post-${i}`">
            <BlogGridPost :post="p" :show-text-left="i % 2 === 0" :show-media-only="p.cover_video_src" />
          </template>
        </BlogGrid>
      </client-only>
    </section>
  </div>
</template>
