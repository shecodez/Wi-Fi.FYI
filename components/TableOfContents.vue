<script setup>
// define links prop
defineProps(['links'])

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  const _links = links
    .map((link) => {
      let _link = [link]
      if (link.children) {
        const flattened = flattenLinks(link.children)
        _link = [link, ...flattened]
      }
      return _link
    })
    .flat(1)

  // console.log({ _links });
  return _links
}
</script>

<template>
  <nav class="toc p-4 border border-gray-200 rounded max-h-[calc(100vh-10rem)] overflow-auto">
    <header class="toc-header pb-2 mb-2 border-b border-gray-200">
      <h3 class="text-xl font-bold">
        Table of contents
      </h3>
    </header>
    <ul class="toc-links flex flex-col gap-2 px-2">
      <!-- render each link with depth class -->
      <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link text-gray-500 _${link.depth}`">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc-link._3 {
  padding-left: 0.75rem;
  /* @apply pl-3; */
}

.toc-link._4 {
  padding-left: 1.5rem;
  /* @apply pl-6; */
}

.toc-link._undefined {
  padding-left: 2rem;
  /* @apply pl-8; */
}
</style>
