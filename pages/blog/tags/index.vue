<script setup>
const { data } = await useAsyncData('blog-tags', () => queryContent('blog').only(['tags']).find())

const tags = new Set(data.value.map(Object.values).flat(2))

const config = useRuntimeConfig()
useHead({
  title: `Tags | ${config.public.appName}`,
})
</script>

<template>
  <div container mx-auto>
    <h1 mt-10 text-center capitalize font-black text-2xl>
      Tags
    </h1>

    <section py-10 class="p-blog-tags-index">
      <ul flex flex-wrap gap-2>
        <template v-for="(t, i) in tags" :key="`tag-${i}`">
          <li px-4 py-2 rounded text-2xl whitespace-nowrap transition-all bg-gray-300 dark:bg-black hover:-translate-y-0.5 class="tag">
            <span>#&nbsp;</span>
            <NuxtLink :to="`/blog/tags/${t}`" font-semibold>
              {{ t }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>
