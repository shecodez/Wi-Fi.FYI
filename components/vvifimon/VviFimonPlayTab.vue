<script setup lang="ts">
const props = defineProps(['commands', 'activeCommandIndex'])
const emit = defineEmits(['setActiveCommand'])

const isActiveCmdIndexArr = ref(Array(props.commands.length).fill(false))

watch(
  () => props.activeCommandIndex,
  (activeCommandIndex) => {
    if (activeCommandIndex >= 0)
      isActiveCmdIndexArr.value[activeCommandIndex] = true
  },
  { immediate: true },
)

const prevCmdIndex = ref()
function play(cmdIndex: number, timeout?: number) {
  if (prevCmdIndex.value >= 0 && prevCmdIndex.value !== cmdIndex)
    setActiveCmdIndex(prevCmdIndex.value, false)
  else
    prevCmdIndex.value = cmdIndex

  isActiveCmdIndexArr.value[cmdIndex] ? setActiveCmdIndex(cmdIndex, false) : setActiveCmdIndex(cmdIndex, true)
  prevCmdIndex.value = cmdIndex

  if (timeout)
    handleAnimationDuration(cmdIndex, timeout)
}

function setActiveCmdIndex(cmdIndex: number, isActive: boolean) {
  // console.log('setActiveCmdIndex', props.commands[cmdIndex].label, isActive)
  isActiveCmdIndexArr.value[cmdIndex] = isActive
  emit('setActiveCommand', isActive ? props.commands[cmdIndex].label : '')
}

function handleAnimationDuration(cmdIndex: number, timeout: number) {
  // console.log('handleAnimation', props.commands[cmdIndex].label)
  setTimeout(() => {
    setActiveCmdIndex(cmdIndex, false)
  }, timeout)
}
</script>

<template>
  <div flex flex-wrap gap-4>
    <div v-if="!!!commands.length" text-center text-gray>
      Play coming soon!
    </div>
    <template v-for="(c, i) in commands" :key="`cmd-${i}`">
      <div flex flex-col gap-4>
        <button class="cmd cmd-btn" :class="isActiveCmdIndexArr[i] ? 'border-4' : 'b-transparent'" @click="play(i, c.timeout)">
          {{ c.label }}
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.cmd {
  padding: 0.75rem;
  border-width: 4px;
  border-style: dashed;
  /* @apply p-3 border-4 border-dashed; */
}
.cmd-btn {
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 1.5rem;
  background-color: rgba(251, 146, 60);
  @apply rounded-bl rounded-tl-3xl rounded-tr rounded-br-3xl bg-orange hover:bg-orange-6;
}
.cmd-btn:hover {
  background-color: rgb(234, 88, 12);
}
</style>
