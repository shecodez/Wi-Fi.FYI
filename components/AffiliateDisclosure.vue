<script setup lang="ts">
const config = useRuntimeConfig()

const appName = config.public.appName
</script>

<template>
  <p text-center text-xs text-gray mb--2 py-1 px-2 font-sans>
    {{ appName }} is reader-supported. When you by through links on our site, we may earn an affiliate commission. <NuxtLink to="/legal/affiliate" hover:underline>
      (Learn More)
    </NuxtLink>
  </p>
</template>
