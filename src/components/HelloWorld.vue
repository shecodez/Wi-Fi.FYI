<template>
  <h1>{{ msg }}</h1>
  <p>Site under construction.</p>
  <div>~🥰 VViFi</div>
  <p>
    <a href="https://www.instagram.com/vvifi_fyi/">Instagram</a> ·
    <a href="https://www.twitch.tv/vvifi_fyi">Twitch</a> ·
    <a href="https://twitter.com/vvifi_fyi">Twitter</a> ·
    <a href="https://www.youtube.com/channel/UCpbqKabuyhsqgwr4m6042zA">
      YouTube
    </a>
  </p>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>
