<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let post = queryContent().where({ _path: path }).findOne();
  
  // get the surround information,
  // which is an array of documents that come before and after the current document
  let surround = queryContent('/blog').sort({ date: 1 }).findSurround(path)//.only(["_path", "title", "description"]);
  
  return {
    post: await post,
    previews: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.previews;
//console.log('prev post', prev, 'next post', next);

// set the meta
useHead({
  title: data.value.post.title,
  meta: [
    { name: "description", content: data.value.post.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://vvifi.fyi/${data.value.post.cover_image}`,
    },
  ],
});
</script>

<template>
  <main id="main" class="post-main">
    <header v-if="data.post" class="post-header">
      <div class="cover_image-cont h-72 mb-12">
        <img :src="`/${data.post.cover_image}`" :alt="data.post.title" class=" rounded-2xl" />
      </div>
      <h1 class="heading">{{ data.post.title }}</h1>
      <p class="supporting">{{ data.post.description }}</p>
      <ul class="post-tags">
        <li class="tag" v-for="(tag, n) in data.post.tags" :key="n">{{ tag }}</li>
      </ul>     
    </header>
    <hr />

    <section class="post-section">
      <aside class="aside">
        <Toc :links="data.post.body.toc.links" />
      </aside>

      <article class="post">     
        <ContentRenderer :value="data.post">
          <MarkdownRenderer :value="data.post" />

          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article> 
    </section>

    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<style scoped>
.post-main {
  @apply p-4 max-w-5xl m-auto;
}

.post-header {
  @apply p-4 pb-12;
}

.post-header .heading {
  @apply font-extrabold text-5xl;
}

.post-header .supporting {
  @apply font-medium text-lg;
}

.post-tags {
  @apply flex gap-2 py-2;
}
.post-tags .tag:hover {
  @apply -translate-y-0.5;
}
.post-tags .tag {
  @apply rounded-md bg-gray-200 px-2 py-0.5 text-sm text-gray-900 transition-all;
}

.post-section {
  @apply grid grid-cols-8;
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
}

.post {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}

.cover_image-cont img {
  @apply h-full w-full object-cover;
}
</style>