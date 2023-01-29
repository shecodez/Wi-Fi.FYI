<script setup lang="ts">
const img = ref()
onMounted(() => {
  img.value = new Image()
  img.value.src = 'https://res.cloudinary.com/shecodez/image/upload/v1674961321/vvifi_fyi%20blog/bunny-Sheet.png'
  img.value.onload = function () {
    init()
  }
})

const canvas = ref<HTMLCanvasElement>()
const ctx = ref()

const scale = 2
const width = 55
const height = 74
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
  if (currentRow >= 1)
    currentRow = 0

  window.requestAnimationFrame(step)
}
</script>

<template>
  <div class="vvifimon-avatar">
    <canvas ref="canvas" width="100" height="150" />
  </div>
</template>

