<script setup lang="ts">
// import { throttledWatch, useMouse, useWindowSize } from '@vueuse/core'

const { x: mouseX, y: mouseY } = useMouse()
// const { width, height } = useWindowSize()
const window = reactive(useWindowSize())

const eye = ref(null as Element | null)
const eyeLocation = ref<DOMRect | undefined>(undefined)

onMounted(() => {
  eyeLocation.value = eye?.value?.getBoundingClientRect()
})

// debouncedWatch([width, height], () => {
//   eyeLocation.value = eye?.value?.getBoundingClientRect()
// }, { debounce: 200 })

const moveBounds = 42
const friction = 1 / 30
const moveX = ref(0)
const moveY = ref(0)
const translate = ref('translate(0px, 0px)')
throttledWatch([mouseX, mouseY], ([x, y]) => {
  if (eyeLocation.value) {
    const _mouseX = Math.max(-moveBounds, Math.min(moveBounds, window.width / 2 - x))
    const _mouseY = Math.max(-moveBounds, Math.min(moveBounds, window.height / 2 - y))
    const followX = (20 * _mouseX) / 100
    const followY = (20 * _mouseY) / 100

    moveX.value += (followX - moveX.value) * friction
    moveY.value += (followY - moveY.value) * friction

    translate.value = `translate(${-moveX.value}px, ${-moveY.value}px)`
  }
}, { throttle: 1000 / 60 })

function resetEyes() {
  translate.value = 'translate(0px, 0px)'
}
</script>

<template>
  <img alt="VviFi Banner Logo" src="/images/logos/vvifi-banner.png" class="banner">
  <div flex flex-col children:mx-auto class="avatar">
    <div relative>
      <img absolute alt="VviFi Avatar blinking" src="/avatar/under-construction-avatar-eye-closed-smile.png" class="a-blink-layer">
      <img absolute alt="VviFi Avatar sclera" src="/avatar/animation/under-construction-avatar-eye-open-smile-bottom-layer.png" class="a-layer">
      <img absolute md-hidden alt="VviFi Avatar iris & pupil" src="/avatar/animation/under-construction-avatar-eye-open-smile-move-layer.png" class="a-layer">
      <div ref="eye" absolute h-full w-full hidden md-block :style="{ backgroundImage: 'url(/avatar/animation/under-construction-avatar-eye-open-smile-move-layer.png)', transform: translate }" class="a-layer move-layer" />
      <img relative alt="VviFi Avatar face" src="/avatar/animation/under-construction-avatar-eye-open-smile-top-layer.png" class="a-layer">
    </div>
  </div>

  <h2 text-3xl font-black uppercase>
    🚧 Site under construction 🚧
  </h2>
  <div>~❤️ VviFi</div>
  <div flex gap-2 justify-center items-center text="xl gray4">
    <a href="https://www.instagram.com/vvifi_fyi/">
      <div i-carbon:logo-instagram><span sr-only>Instagram</span></div>
    </a> ·
    <a href="https://www.pinterest.com/vvifi_fyi/">
      <div i-carbon:logo-pinterest><span sr-only>Pinterest</span></div>
    </a> ·
    <!-- <a href="https://www.tiktok.com/@vvifi_fyi">
      <div ic:round-tiktok><span sr-only>Tik Tok</span></div>
    </a> · -->
    <a href="https://www.twitch.tv/vvifi_fyi">
      <div i-mdi:twitch>Twitch<span sr-only>Twitch</span></div>
    </a> ·
    <a href="https://twitter.com/vvifi_fyi">
      <div i-carbon:logo-twitter><span sr-only>Twitter</span></div>
    </a>(RIP) ·
    <a href="https://youtube.com/@vvifi_fyi">
      <div i-carbon:logo-youtube><span sr-only>YouTube</span></div>
    </a> ·
    <NuxtLink to="/blog">
      Blog
    </NuxtLink>
  </div>
</template>

<style scoped>
a:hover {
  color: #dc9e45;
  text-decoration: underline;
}

.avatar {
  height: 60%;
}

.banner {
  height: 25%;
  position: absolute;
  right: 10%;
  top: 0;
}

.a-blink-layer {
  z-index: 10;
  animation: blink 5s steps(5, start) infinite;
}
@keyframes blink {
  0% {
    visibility: hidden;
  }
  70% {
    visibility: hidden;
  }
  75% {
    visibility: visible;
  }
  80% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}

@media only screen and (max-width: 600px) {
  .avatar {
    height: 50%;
  }
  .banner {
    height: 15%;
  }
}
</style>
