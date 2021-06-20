<template>
  <h1>{{ msg }}</h1>
  <p>Site under construction.</p>
  <div>~🥰 WiFi</div>
  <p>
    <a href="https://www.instagram.com/wififyi/">Instagram</a> ·
    <a href="https://www.twitch.tv/wififyi">Twitch</a> ·
    <a href="https://twitter.com/WiFiFYI">Twitter</a> ·
    <a href="https://www.youtube.com/channel/UCrLNCMH-KEIX0IM6eJt0UlA">
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
