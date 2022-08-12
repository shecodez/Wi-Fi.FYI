<script setup>
import { TagIcon } from "@heroicons/vue/solid";

const expanded = ref(false);

// helper function to flatten tags array
const flatten = (tags, key) => {
  //console.log(tags);
  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);

  //console.log({ _tags });
  return _tags;
};

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};

// get only tags data from `/blog`
const { data } = await useAsyncData("tags", () => queryContent("blog").only(["tags"]).find());

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, "tags"))];
//console.log({ articleTags });
</script>
<template>
  <div class="tag-list" :class="{ active: expanded }">
    <!-- Button to toggle expand -->
    <button @click="toggleExpand" class="tag-btn">
      <TagIcon class="icon w-6 solid" />
      <span>Tags</span>
    </button>
    <ul class="post-tags" :class="{ expanded: expanded }">
      <!-- list out tags with links -->
      <li v-for="(tag, n) in articleTags" :key="n" class="tag">
        <NuxtLink :to="`/blog/tags/${tag}`" class="font-semibold">{{ `#${tag}` }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tag-btn {
  @apply flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-1.5 px-2 transition-all;
}
.tag-btn span {
  @apply  font-semibold text-slate-800
}
.tag-btn:hover {
  @apply -translate-y-0.5;
}

.tag-list {
  @apply flex items-center gap-2 p-2 border border-transparent rounded-lg;
}
.tag-list.active {
  @apply border-slate-200;
}
.post-tags {
  @apply flex items-center gap-2 transition-all max-w-0 overflow-hidden;
}
.post-tags li {
  @apply rounded-lg bg-slate-50 py-1.5 px-2 transition-all text-xs; 
}
.post-tags li:hover {
  @apply -translate-y-0.5; 
}
.post-tags.expanded {
  @apply max-w-full;
}
</style>