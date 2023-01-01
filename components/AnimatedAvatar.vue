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

const moveBounds = 20
const friction = 1 / 30
const moveX = ref(0)
const moveY = ref(0)
const translate = ref('translate(0px, 0px)')
throttledWatch([mouseX, mouseY], ([x, y]) => {
  if (eyeLocation.value) {
    const _mouseX = Math.max(-moveBounds, Math.min(moveBounds, window.width / 2 - x))
    // const _mouseY = Math.max(-moveBounds, Math.min(moveBounds, window.height / 2 - y))
    const followX = (20 * _mouseX) / 100
    // const followY = (20 * _mouseY) / 100

    moveX.value += (followX - moveX.value) * friction
    // moveY.value += (followY - moveY.value) * friction

    translate.value = `translate(${-moveX.value}px, ${-moveY.value}px)`
  }
}, { throttle: 1000 / 60 })

function resetEyes() {
  translate.value = 'translate(0px, 0px)'
}
</script>

<template>
  <div p-2 flex flex-col children:mx-auto class="animated-avatar">
    <div relative bg-black bg-opacity-40 rounded-full>
      <img absolute alt="VviFi Avatar blinking" src="/avatar/under-construction-avatar-eye-closed-smile.png" class="a-layer blink-layer">
      <img absolute alt="VviFi Avatar sclera" src="/avatar/animation/under-construction-avatar-eye-open-smile-bottom-layer.png" class="a-layer">
      <!-- <img absolute md-hidden alt="VviFi Avatar iris & pupil" src="/avatar/animation/under-construction-avatar-eye-open-smile-move-layer.png" class="a-layer"> -->
      <div ref="eye" absolute h-full w-full :style="{ backgroundSize: 'contain', backgroundImage: 'url(/avatar/animation/under-construction-avatar-eye-open-smile-move-layer.png)', transform: translate }" class="a-layer move-layer" />
      <img relative alt="VviFi Avatar face" src="/avatar/animation/under-construction-avatar-eye-open-smile-top-layer.png" class="a-layer">
    </div>
  </div>
</template>

<style scoped>
.blink-layer {
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
</style>
