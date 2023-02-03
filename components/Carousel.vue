<script setup lang="ts">
const props = defineProps(['slides'])

const activeSlideIdx = ref(0)
function setActiveSlideIdx(index: number) {
  activeSlideIdx.value = index
}

function nextSlide() {
  setActiveSlideIdx((activeSlideIdx.value + 1) % props.slides.length)
}

const autoPlayEnabled = ref(false) // TODO: set true for mobile and touch devices
const timeoutDuration = ref(3000) // ms
const autoPlayTimer = ref()
const autoPlay = () => {
  autoPlayTimer.value = setInterval(() => {
    nextSlide()
  }, timeoutDuration.value)
}

watch(
  () => autoPlayEnabled.value,
  (autoPlayEnabled) => {
    if (autoPlayEnabled)
      autoPlay()
    else
      clearInterval(autoPlayTimer.value)
  },
)
</script>

<template>
  <div relative w-full h-full class="carousel" @mouseover="autoPlayEnabled = true" @mouseleave="autoPlayEnabled = false">
    <!-- <transition name="slide-fade">
      <img :src="slides[activeSlideIdx]" :alt="slides[activeSlideIdx].replace('-', ' ')" object-cover w-full h-full>
    </transition> -->
    <template v-for="(s, i) in slides" :key="s">
      <transition name="slide-fade">
        <img v-if="activeSlideIdx === i" :src="s" :alt="s.replace('-', ' ')" object-fit w-full h-full>
      </transition>
    </template>

    <div absolute bottom-4 inset-x-0 flex items-center justify-center gap-2>
      <template v-for="(s, i) in slides" :key="`${s}-nav-${i}`">
        <div w-2 h-2 rounded-full bg-white hover:bg-opacity-100 cursor-pointer :class="activeSlideIdx === i ? 'bg-opacity-100' : 'bg-opacity-40'" @click="setActiveSlideIdx(i)" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}
</style>
