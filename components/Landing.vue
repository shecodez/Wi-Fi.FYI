<script setup lang="ts">
import { debouncedWatch, throttledWatch, useMouse, useWindowSize } from '@vueuse/core'

const { x: mouseX, y: mouseY } = useMouse()
const mouse = reactive(useMouse())
const window = reactive(useWindowSize())

const eye = ref(null as Element | null)
const eyeLocation = ref<DOMRect | undefined>(undefined)

onMounted(() => {
  eyeLocation.value = eye?.value?.getBoundingClientRect()
})

debouncedWatch([window.width, window.height], () => {
  eyeLocation.value = eye?.value?.getBoundingClientRect()
}, { debounce: 200 })

const rotationDegrees = ref(0)

throttledWatch([mouseX, mouseY], ([x, y]) => {
  if (eyeLocation.value) {
    const radianDegrees = Math.atan2(x - eyeLocation.value.right, y - eyeLocation.value.top)
    rotationDegrees.value = radianDegrees * (180 / Math.PI) * -1 + 180
  }
}, { throttle: 1000 / 60 })
</script>

<template>
  <img alt="VviFi Logo" src="/vvifi-banner.png" class="banner">
  <div flex flex-col children:mx-auto>
    <div relative>
      <img alt="VviFi Avatar blink" src="/under-construction-avatar-eye-closed-smile.png" class="blink absolute">
      <img alt="VviFi Avatar sclera" src="/avatar-anim-layers/under-construction-avatar-eye-open-smile-bottom-layer.png" class="anim absolute">
      <!-- <img alt="VviFi Avatar iris & pupil" src="/avatar-anim-layers/under-construction-avatar-eye-open-smile-move-layer.png" class="anim move-eye absolute"> -->
      <div class="absolute h-full w-full ">
        <div class="eye-container gap-14">
          <svg
            class="eye emerald-eye"
            :style="`transform: rotate(${rotationDegrees - 40}deg)`"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M0 16.3895C0 25.4415 7.33733 32.7788 16.388 32.7788C25.44 32.7788 32.7773 25.4415 32.7773 16.3895C32.7773 7.33748 25.44 0.000144958 16.388 0.000144958C7.33733 0.000144958 0 7.33748 0 16.3895Z"
              fill="transparent"
            />
            <path
              d="M18.901 12.1063C21.109 14.5503 24.4383 15.1396 26.3356 13.4249C28.2343 11.7103 27.9823 8.33826 25.773 5.89559C23.5636 3.45159 20.2356 2.86093 18.3383 4.57693C16.4396 6.29159 16.693 9.66226 18.901 12.1063Z"
              fill="#00d7c6"
            />
            <path
              d="M23.6407 12.9819C24.1247 12.9819 24.8193 12.8753 25.3807 12.3686C26.67 11.2033 26.366 8.67527 24.7167 6.84993C23.6793 5.7046 22.3033 5.01927 21.034 5.01927C20.55 5.01927 19.854 5.12593 19.2927 5.63393C18.71 6.16193 18.4273 6.9886 18.502 7.96193C18.5833 9.06993 19.102 10.2033 19.958 11.1513C20.9953 12.2966 22.3713 12.9819 23.6407 12.9819Z"
              fill="#007068"
            />
            <path
              d="M25.0221 3.04376C24.3261 2.7331 23.3661 3.3651 22.8781 4.45576C22.3888 5.54776 22.5581 6.68376 23.2555 6.99576C23.9515 7.30776 24.9115 6.67576 25.3995 5.58376C25.8861 4.49176 25.7181 3.35443 25.0221 3.04376Z"
              fill="white"
            />
          </svg>

          <svg
            ref="eye"
            class="eye gold-eye"
            :style="`transform: rotate(${rotationDegrees - 40}deg)`"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M0 16.3895C0 25.4415 7.33733 32.7788 16.388 32.7788C25.44 32.7788 32.7773 25.4415 32.7773 16.3895C32.7773 7.33748 25.44 0.000144958 16.388 0.000144958C7.33733 0.000144958 0 7.33748 0 16.3895Z"
              fill="transparent"
            />
            <path
              d="M18.901 12.1063C21.109 14.5503 24.4383 15.1396 26.3356 13.4249C28.2343 11.7103 27.9823 8.33826 25.773 5.89559C23.5636 3.45159 20.2356 2.86093 18.3383 4.57693C16.4396 6.29159 16.693 9.66226 18.901 12.1063Z"
              fill="#f37600"
            />
            <path
              d="M23.6407 12.9819C24.1247 12.9819 24.8193 12.8753 25.3807 12.3686C26.67 11.2033 26.366 8.67527 24.7167 6.84993C23.6793 5.7046 22.3033 5.01927 21.034 5.01927C20.55 5.01927 19.854 5.12593 19.2927 5.63393C18.71 6.16193 18.4273 6.9886 18.502 7.96193C18.5833 9.06993 19.102 10.2033 19.958 11.1513C20.9953 12.2966 22.3713 12.9819 23.6407 12.9819Z"
              fill="#a94d00"
            />
            <path
              d="M25.0221 3.04376C24.3261 2.7331 23.3661 3.3651 22.8781 4.45576C22.3888 5.54776 22.5581 6.68376 23.2555 6.99576C23.9515 7.30776 24.9115 6.67576 25.3995 5.58376C25.8861 4.49176 25.7181 3.35443 25.0221 3.04376Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <img alt="VviFi Avatar face" src="/avatar-anim-layers/under-construction-avatar-eye-open-smile-top-layer.png" class="anim relative">
    </div>
  </div>

  <p>Site under construction.</p>
  <div>~🥰 VviFi</div>
  <p>
    <a href="https://www.instagram.com/vvifi_fyi/">Instagram</a> ·
    <a href="https://www.twitch.tv/vvifi_fyi">Twitch</a> ·
    <a href="https://twitter.com/vvifi_fyi">Twitter</a> ·
    <a href="https://youtube.com/@vvifi_fyi">YouTube</a> ·
    <NuxtLink to="/blog">
      Blog
    </NuxtLink>
  </p>
</template>

<style scoped>
.eye-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5em;
}
.eye {
  height: 3rem;
}

a {
  color: #dc9e45;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.blink {
  visibility: hidden;
}
.anim {
  visibility: visible;
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
@media only screen and (max-width: 600px) {
  .avatar {
    height: 50%;
  }
  .banner {
    height: 15%;
  }
}
</style>
