<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = useRoute();

const filter = ref(tags?.split(","));

// set meta for page
useHead({
  title: "All articles",
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>

<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All articles</h1>
        <p class="font-medium text-lg">Here's a list of all my great articles</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />

      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'cover_image'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="article-list">
            <li v-for="article in list" :key="article._path" class="article-item">
              <NuxtLink :to="article._path">
                <div class="wrapper flex items-start gap-4">
                  <div class="img-cont w-32 shrink-0">
                    <img :src="`/${article.cover_image}`" :alt="article.title" class="rounded-lg max-h-[8rem]" />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style>
.page-heading {
  @apply bg-slate-100 p-12
}
.page-heading .wrapper {
  @apply m-auto max-w-3xl;
}

.page-section {
  @apply m-auto max-w-3xl py-8 px-4;
}

.article-list {
  @apply flex flex-col gap-6;
}
.article-list .wrapper {
  @apply  flex items-start gap-4;
}
.article-item:first-of-type {
  border-style: none;
}
.article-item {
  @apply border-t border-slate-200 pt-6;
}

.article-tags {
  @apply flex gap-2 py-2;
}
.article-tags .tag {
  @apply rounded-lg bg-slate-50 py-1.5 px-2 transition-all text-xs; 
}
.article-tags .tag:hover {
  @apply -translate-y-0.5; 
}

</style>