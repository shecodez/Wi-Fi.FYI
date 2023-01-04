<script setup>
import { formatDate } from '~~/utils'

defineProps(['comment'])
</script>

<template>
  <li bg-gray-2 dark:bg-gray-7 p-4 rounded>
    <b text-lg>{{ comment.name }}</b>
    <span text-gray text-sm mx-2>{{ formatDate(new Date(comment.date)) }}</span>
    <p mt-2>
      {{ comment.message }}
    </p>
  </li>
</template>
