<script setup lang="ts">
const blogTagRoute = '/blog/tags'
const edcMenu = [
  { label: 'Her EDC', href: `${blogTagRoute}/her-edc` },
  { label: 'Flashlight', href: `${blogTagRoute}/flashlight` },
  { label: 'Keychain', href: `${blogTagRoute}/keychain` },
  { label: 'Self Defense', href: `${blogTagRoute}/self-defense` },
  { label: 'Gadget', href: `${blogTagRoute}/gadget` },
]

const blogTopicRoute = '/topics'
const megaMenuNav = [
  { label: 'Her EDC', href: `${blogTopicRoute}/edc`, subMenuNav: edcMenu },
  { label: 'WTF', href: `${blogTopicRoute}/wtf`, title: 'Wonderful Treasure Finds', subMenuNav: [] },
  { label: 'Travel', href: `${blogTopicRoute}/travel`, subMenuNav: [] },
  { label: 'Nerdy 💩', href: `${blogTopicRoute}/nerdy`, subMenuNav: [] },
  // { label: 'More', subMenuNav: [] },
]

const menuNav = [
  { label: 'About', href: '/about' },
  { label: 'VviFi🔥Hotspot', href: '/vvifi-hotspot' },
  { label: 'Blog', href: '/blog', subMenuNav: megaMenuNav },
  { label: 'Topics', href: blogTopicRoute },
  { label: 'Tags', href: blogTagRoute },
  { label: 'Contact', href: '/contact' },
]
</script>

<template>
  <header bg-white dark:bg-gray-800 bg-opacity-40 dark:bg-opacity-40 sticky top-0 z-50 shadow-md>
    <div container mx-auto relative flex justify-end items-center>
      <NuxtLink to="/" flex gap-2 items-center absolute top-0 left-0>
        <img src="/images/logos/vvifi-banner.png" alt="VviFi Banner Logo" w-15>
        <span text-2xl font-black hidden md-block mb-4 class="rainbow-text">VviFi . FYI</span>
      </NuxtLink>

      <nav flex gap-5 py-4 md:text-xl>
        <template v-for="n in menuNav" :key="n.href">
          <NuxtLink :to="n.href" font-bold hover:underline>
            {{ n.label }}
          </NuxtLink>
        </template>
        <button title="Search">
          🔍
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
   backdrop-filter: saturate(180%) blur(20px);
}
</style>
