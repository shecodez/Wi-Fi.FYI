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
const menuNav = [
  { label: 'About', href: '/about' },
  // { label: 'VviFi Hot[test]Spot 🔥', href: '/vvifi-hottest-spot' },
  { label: 'Her EDC', href: `${blogTopicRoute}/edc`, subMenuNav: edcMenu },
  { label: 'WTF', href: `${blogTopicRoute}/wtf`, title: 'Wonderful Treasure Finds', subMenuNav: [] },
  { label: 'Travel', href: `${blogTopicRoute}/travel`, subMenuNav: [] },
  { label: 'Nerdy 💩', href: `${blogTopicRoute}/nerdy`, subMenuNav: [] },
  // { label: 'More', subMenuNav: [] },
]
</script>

<template>
  <header>
    <div container mx-auto relative flex justify-between items-center>
      <NuxtLink to="/" flex gap-2 items-center>
        <img src="/vvifi-banner.png" alt="VviFi Banner Logo" w-12>
        <span text-2xl font-black hidden md-block>VviFi . FYI</span>
      </NuxtLink>

      <nav flex gap-4 p-4>
        <template v-for="n in menuNav" :key="n.href">
          <NuxtLink :to="n.href" :title="n.title" font-bold md:text-xl hover:underline>
            {{ n.label }}
          </NuxtLink>
        </template>
      </nav>
    </div>
  </header>
</template>
