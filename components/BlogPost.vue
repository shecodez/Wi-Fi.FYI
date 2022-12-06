<script setup>
// import { formatDate } from '~~/utils'

defineProps(['data'])
</script>

<template>
  <div class="post-container px-4 lg:px-0 py-4 max-w-5xl m-auto">
    <NuxtLink to="/blog" class="flex items-center gap-2 hover:text-teal-500">
      <div class="i-carbon:arrow-left" />
      Back to Blog
    </NuxtLink>

    <header v-if="data.post" class="post-header py-4">
      <div v-if="data.post.cover_image" class="cover-img-container h-72 mb-12">
        <img :src="`/${data.post.cover_image}`" :alt="data.post.title" class="rounded-2xl h-full w-full object-cover">
      </div>
      <!-- <small v-if="data.post.date" class="text-xs">{{ formatDate(new Date(data.post.date)) }}</small> -->
      <small v-if="data.post.date" class="text-xs">{{ data.post.date }}</small>
      <h1 class="rainbow-text title font-extrabold text-5xl pb-4">
        {{ data.post.title }}
      </h1>
      <h4 v-if="data.post.author" class="text-gray-400">
        by: {{ data.post.author }}
      </h4>
      <p class="topic font-medium text-lg">
        in
        <span class="uppercase text-teal-500">{{ data.post._path.split('/')[2].replace('-', ' ') }}</span>
      </p>
      <br>
      <ul v-if="data.post.tags" class="post-tags flex gap-2 py-2">
        <li v-for="(tag, n) in data.post.tags" :key="n" class="tag rounded-md bg-gray-200 px-2 py-0.5 text-sm text-gray-900 transition-all hover:-translate-y-0.5">
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr class="border-primary">

    <section class="post grid grid-cols-8 gap-8 pt-4">
      <aside v-if="!!data.post.body.toc.links.length" class="left-aside col-span-full md:col-span-2 row-start-1 w-full mt-6">
        <TableOfContents :links="data.post.body.toc.links" />
      </aside>

      <article class="article first-letter:text-3xl first-letter:text-teal-500 col-span-full md:col-span-6 w-full prose dark:prose-invert prose-sm lg:prose-lg">
        <client-only>
          <ContentRenderer :value="data.post">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </client-only>
      </article>

      <!-- <aside class="right-aside">
              <div class="border rounded-lg w-full h-96">Ad</div>
            </aside>  -->
    </section>
  </div>
</template>

<style scoped>
aside > .toc {
  position: sticky;
  top: 1em;
  /* @apply sticky top-24; */
}
</style>
