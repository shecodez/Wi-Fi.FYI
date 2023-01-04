<script setup>
const props = defineProps(['slug'])

const { data: comments } = await useAsyncData('commentsJson', () => {
  return queryContent('comments').only(['_id', 'name', 'message', 'date']).where({ post: props.slug.split('/')[3] }).find()
})
</script>

<template>
  <section w-prose mt-10 pt-10 mx-auto flex flex-col gap-4 border-t-2 border-orange>
    <BlogCommentForm :slug="slug" />
    <BlogCommentList :comments="comments" />
  </section>
</template>
