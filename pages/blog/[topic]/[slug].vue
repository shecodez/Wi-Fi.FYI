<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`post-topic-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  const post = queryContent().where({ _path: path }).findOne()

  // get the surround information, which is an array of documents that come before and after the current document
  // let surround = queryContent('/blog').sort({ date: 1 }).findSurround(path)//.only(["_path", "title", "description"]);

  return {
    post: await post,
    // surround: await surround,
  }
})

const config = useRuntimeConfig()
useHead({
  title: `${data.value.post.title} | ${config.public.appName}`,
  meta: [
    { name: 'description', content: data.value.post.description },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `${config.public.siteUrl}/${data.value.post.cover_image_src}`,
    },
  ],
})
</script>

<template>
  <div px-4>
    <div v-if="!data">
      Loading...
    </div>
    <BlogPost v-else :data="data" />
  </div>
</template>
