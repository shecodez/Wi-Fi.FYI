<script setup lang="ts">
const audio = ref()
const isPlaying = ref(false)

async function stopAudio() {
  await audio.value.pause()
  audio.value.currentTime = 0
  isPlaying.value = false
}

async function toggleThemeSong() {
  if (isPlaying.value) {
    await audio.value.pause()
    isPlaying.value = false
  }
  else {
    await audio.value.play()
    isPlaying.value = true
  }
}
</script>

<template>
  <button :title="`${isPlaying ? 'Pause' : 'Play'} theme song`" p-2 rounded-full bg-teal hover:bg-teal-6 text-xs @click="toggleThemeSong">
    <!-- <IconsBxBxsAlbumSvg v-if="isPlaying" class="animate-spin text-xs" /> -->
    <div v-if="isPlaying" i-carbon:pause-filled />
    <div v-else i-carbon:play-filled-alt />
  </button>

  <audio ref="audio" :onended="stopAudio">
    <source src="https://res.cloudinary.com/shecodez/video/upload/v1674951689/vvifi_fyi%20blog/Ariana-Grande-positions-MOZ%CE%9BRT-Remix.mp3" type="audio/mpeg">
  </audio>
</template>

