<script setup lang="ts">
const props = defineProps(['isOpen', 'css'])
const emit = defineEmits(['close'])

const modal = ref(null)

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

onClickOutside(modal, () => {
  emit('close')
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" fixed z-40 w-full h-full inset-0 flex items-center justify-center class="modal-container">
      <div ref="overlay" fixed w-full h-full bg-black bg-opacity-80 overflow-y-auto class="overlay" />

      <client-only>
        <div ref="modal" relative :class="css">
          <slot />
        </div>
      </client-only>

      <button absolute top-4 right-4 text-white opacity-80 hover:opacity-100 flex flex-col items-center class="close-btn" @click="$emit('close')">
        <div i-carbon:close />
        <span text-sm>(Esc)</span>
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-container .overlay {
  backdrop-filter: saturate(100%) blur(10px);
}
</style>
