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
  { label: 'FAT', href: `${blogTopicRoute}/fat`, subMenuNav: [] },
  { label: 'Her EDC', href: `${blogTopicRoute}/edc`, subMenuNav: edcMenu },
  { label: 'WTF', href: `${blogTopicRoute}/wtf`, title: 'Wonderful Treasure Finds', subMenuNav: [] },
  { label: 'Travel', href: `${blogTopicRoute}/travel`, subMenuNav: [] },
  { label: 'Nerdy 💩', href: `${blogTopicRoute}/nerd`, subMenuNav: [] },
  // { label: 'More', subMenuNav: [] },
]

const menuNav = [
  { label: 'About', href: '/about' },
  { label: 'VviFi 🔥Hotspot', href: '/hotspot' },
  { label: 'Blog', href: '/blog', subMenuNav: megaMenuNav },
  { label: 'Topics', href: blogTopicRoute },
  { label: 'Tags', href: blogTagRoute },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  {
    icon: 'i-carbon:logo-discord',
    label: 'Discord',
    link: 'https://discord.gg/kE4Xu7WsQK',
  },
  { icon: 'i-carbon:logo-instagram', label: 'Instagram', link: 'https://www.instagram.com/vvifi_fyi/' },
  { icon: 'i-carbon:logo-twitter', label: 'Twitter', link: 'https://twitter.com/vvifi_fyi' },
  { icon: 'i-carbon:logo-youtube', label: 'YouTube', link: 'https://youtube.com/@vvifi_fyi' },
  { icon: 'i-carbon:logo-pinterest', label: 'Pinterest', link: 'https://www.pinterest.com/vvifi_fyi/' },
]
</script>

<template>
  <header bg-gray-300 dark:bg-black bg-opacity-40 dark:bg-opacity-40 sticky top-0 z-20 shadow-md>
    <div container mx-auto relative flex justify-end items-center>
      <NuxtLink to="/" flex gap-3 items-center absolute top-0 left-0>
        <img src="/images/logos/vvifi-banner.png" alt="VviFi Banner Logo" w-15>
        <span text-2xl font-black mb-4 class="rainbow-text">VviFi . FYI</span>
      </NuxtLink>

      <SideNavDrawer :nav-links="menuNav" :social-links="socialLinks">
        <div title="Menu" md:hidden text-xl>
          <div i-carbon:menu />
        </div>
      </SideNavDrawer>
      <nav flex gap-5 md:text-xl>
        <template v-for="n in menuNav" :key="n.href">
          <NuxtLink :to="n.href" font-bold hover:text-orange py-4 hidden md:block>
            {{ n.label }}
          </NuxtLink>
        </template>
        <SearchModal>
          <div p-4 md:px-0 title="Search">
            🔍
          </div>
        </SearchModal>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
   backdrop-filter: saturate(180%) blur(20px);
}
nav a.router-link-exact-active {
  color: rgb(251, 146, 60);
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(251, 146, 60);
  /* @apply text-orange border-2 border-color-teal-500; */
}
</style>
