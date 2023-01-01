<script setup lang="ts">
const props = defineProps(['isOpen', 'css', 'showRight'])
const emit = defineEmits(['close'])

const drawer = ref()

watch(
  () => props.isOpen,
  (isOpen) => {
    const bodyEl = document.querySelector('body')
    if (isOpen) {
      // Disable scroll
      bodyEl!.style.overflow = 'hidden'
    }
    else {
      // Enable scroll
      bodyEl!.style.overflow = 'auto'
    }
  },
)

onKeyStroke('Escape', () => {
  emit('close')
}, { eventName: 'keydown' })

onClickOutside(drawer, () => {
  emit('close')
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" fixed z-30 w-full min-h-screen inset-0 flex class="drawer-container">
      <div ref="overlay" fixed w-full h-full bg-black bg-opacity-80 overflow-y-auto class="overlay" />

      <client-only>
        <div ref="drawer" class="relative" :class="css">
          <slot />
        </div>
      </client-only>

      <button absolute top-4 text-white opacity-80 hover:opacity-100 flex flex-col items-center class="close-btn" :class="showRight ? 'left-4' : 'right-4'" @click="$emit('close')">
        <div i-carbon:close />
        <span text-sm>(Esc)</span>
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.drawer-container .overlay {
  backdrop-filter: saturate(100%) blur(10px);
  /* @apply fixed w-full h-full bg-black bg-opacity-80 overflow-y-auto; */
}
</style>
