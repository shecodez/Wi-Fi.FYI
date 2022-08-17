<script setup>
import { format } from 'date-fns';

defineProps(['comment']);

const avatar = computed(() => 'https://www.gravatar.com/avatar/' + comment.email + '?d=mm&s=128');
const createdAt = computed(() => format(new Date(comment.date)));
</script>

<template>
  <div class="comment-box">
    <img :src="avatar" />
    <p>
      <b>{{ comment.name }}</b>
      <small>{{ createdAt }}</small>
      <br />
      {{ comment.message }}
    </p>
  </div>
</template>
