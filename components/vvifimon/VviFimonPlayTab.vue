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
    <template v-for="(c, i) in commands" :key="`cmd-${i}`">
      <div flex flex-col gap-4>
        <button class="cmd cmd-btn border-4" :class="isActiveCmdIndexArr[i] ? 'border-4' : 'b-transparent'" @click="play(i, c.timeout)">
          {{ c.label }}
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.cmd {
  @apply p-3;
}
.cmd-btn {
  @apply rounded-l rounded-tl-3xl  rounded-r rounded-br-3xl bg-orange hover:bg-orange-6;
}
</style>
