<script setup>
const blogNavQuery = queryContent('blog')

const config = useRuntimeConfig()
useHead({
  title: `Topics | ${config.public.appName}`,
})

const topicBgSrc = new Map([
  ['Edc', 'Karol D'],
  ['Travel', 'Aleksandar Pasaric'],
  ['Wtf', 'Imani Williams'],
  ['Melodious', 'Elviss Railijs Bitāns'],
])
</script>

<template>
  <div class="p-topics-index">
    <h1 my-10 text-center uppercase font-black text-2xl>
      Topics
    </h1>

    <section container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4>
      <client-only>
        <ContentNavigation v-slot="{ navigation }" :query="blogNavQuery">
          <template v-for="link of navigation[0].children" :key="link._path">
            <NuxtLink :to="`/topics/${link.title}`" relative filter-grayscale-100 hover:filter-grayscale-0>
              <img :src="`/images/topic-bgs/${link.title}.jpg`" :alt="link.title" rounded-2xl h-60 w-full object-cover>
              <span absolute inset-0 p-3 text-7xl font-bold uppercase text-white> {{ link.title }}</span>
              <span absolute bottom-0 right-3>Photo by: {{ topicBgSrc.get(link.title) }}</span>
            </NuxtLink>
          </template>
        </ContentNavigation>
      </client-only>
    </section>
  </div>
</template>
