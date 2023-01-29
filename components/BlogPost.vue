<script setup>
import BlogCommentSection from './blog/BlogCommentSection.vue'
import BlogSurroundPostSection from './blog/BlogSurroundPostSection.vue'
import { formatDate } from '~~/utils'

defineProps(['data'])
</script>

<template>
  <div container mx-auto py-4>
    <NuxtLink to="/blog" flex items-center gap-2 hover:text-orange>
      <div i-carbon:arrow-left />
      Back to Blog
    </NuxtLink>

    <header v-if="data.post" py-4>
      <div v-if="data.post.cover_image_src" h-96 mb-12>
        <img :src="`/${data.post.cover_image_src}`" :alt="data.post.title" rounded-2xl h-full w-full object-cover>
      </div>

      <div v-if="data.post.date" text-sm flex items-center gap-2>
        <div i-carbon:time />
        <span>{{ formatDate(new Date(data.post.date)) }}</span>
      </div>

      <div py-4>
        <h1 font-extrabold text-5xl max-w-5xl class="rainbow-text title">
          {{ data.post.title }}
        </h1>
        <div v-if="!data.post.cover_image_src && data.post.description" text-gray>
          {{ data.post.description }}
        </div>
      </div>

      <h4 v-if="data.post.author" text-gray-400>
        by: {{ data.post.author }}
      </h4>

      <div font-medium text-lg flex items-center gap-2>
        <div i-carbon:data-enrichment /> in
        <NuxtLink :to="`/topics/${data.post._path.split('/')[2]}`" uppercase text-orange>
          {{ data.post._path.split('/')[2].replace('-', ' ') }}
        </NuxtLink>
      </div>
      <br>

      <TagList v-if="data.post.tags" :tags="data.post.tags" />
    </header>
    <hr class="border-primary">

    <section grid grid-cols-8 gap-4 pt-4 class="post">
      <aside v-if="!!data.post.body.toc.links.length" col-span-full lg:col-span-2 mt-6 class="left-aside">
        <div sticky top-20>
          <TableOfContents :links="data.post.body.toc.links" />
        </div>
      </aside>

      <div col-span-full lg:col-span-4>
        <article mx-auto first-letter:text-3xl first-letter:text-orange prose dark:prose-invert class="article">
          <client-only>
            <ContentRenderer :value="data.post">
              <template #empty>
                <p>No content found.</p>
              </template>
            </ContentRenderer>
          </client-only>
        </article>

        <BlogSurroundPostSection :surround-posts="data.surround " />

        <BlogCommentSection :slug="data.post._path" />
      </div>

      <aside col-span-full lg:col-span-2 mt-6 class="right-aside">
        <div sticky top-20>
          <AnimatedAvatar />
          <h4 text-center text-xl font-black>
            Niico "VviFi" Savvy
          </h4>
        </div>
      </aside>
    </section>
  </div>
</template>

