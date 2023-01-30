<script setup lang="ts">
const config = useRuntimeConfig()

const cloudinaryResUrl = config.public.cloudinaryResUrl

const img = ref()
onMounted(() => {
  img.value = new Image()
  // sprite sheet creator: https://chariart.itch.io
  img.value.src = `${cloudinaryResUrl}/image/upload/v1675097780/vvifi_fyi%20blog/calicoKitty_curiousIdleBreaker.png`
  img.value.onload = function () {
    init()
  }
})

const canvas = ref<HTMLCanvasElement>()
const ctx = ref()

const scale = 2
const width = 64
const height = 64
const scaledWidth = scale * width
const scaledHeight = scale * height

function drawFrame(frameX: number, frameY: number, canvasX: number, canvasY: number) {
  ctx.value!.drawImage(img.value,
    frameX * width, frameY * height, width, height,
    canvasX, canvasY, scaledWidth, scaledHeight)
}

function init() {
  ctx.value = canvas.value?.getContext('2d')
  window.requestAnimationFrame(step)
}

const cycleLoop = [0, 1, 0, 2]
let currentLoopIndex = 0
let frameCount = 0
let currentRow = 0
function step() {
  frameCount++
  if (frameCount < 75) {
    window.requestAnimationFrame(step)
    return
  }
  frameCount = 0
  if (canvas.value && ctx.value)
    ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  drawFrame(cycleLoop[currentLoopIndex], currentRow, 0, 0)
  currentLoopIndex++
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0
    currentRow++
  }
  // Reset to the starting row
  if (currentRow >= 2)
    currentRow = 0

  window.requestAnimationFrame(step)
}
</script>

<template>
  <div class="vvifimon-avatar">
    <canvas ref="canvas" width="128" height="128" />
  </div>
</template>

