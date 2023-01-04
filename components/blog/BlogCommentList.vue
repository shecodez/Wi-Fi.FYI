<script setup>
defineProps(['comments'])
</script>

<template>
  <h3 text-2xl>
    {{ comments.length }} Comment(s)
  </h3>
  <ul flex flex-col gap-2>
    <template v-for="(c, i) in comments" :key="`comment-${i}`">
      <BlogCommentListItem :comment="c" />
    </template>
  </ul>
</template>
