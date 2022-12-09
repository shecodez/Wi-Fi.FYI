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
  <nav my-1 p-4 border rounded overflow-auto class="toc max-h-[calc(100vh-10rem)]">
    <header pt-2 mb-2 border-b>
      <h3 text-xl font-bold flex gap-1 items-center>
        <div class="i-carbon:list" />
        Table of Contents
      </h3>
    </header>
    <ul flex flex-col gap-2 px-2>
      <!-- render each link with depth class -->
      <template v-for="link of flattenLinks(links)" :key="link.id">
        <li text-gray-500 :class="`toc-link _${link.depth}`">
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </li>
      </template>
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
