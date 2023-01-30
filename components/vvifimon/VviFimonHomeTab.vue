<script setup lang="ts">
defineProps(['mostFaq', 'vvifimonName', 'cmdInputError'])
const emit = defineEmits(['setActiveTabIndex', 'setActiveCommand'])

const cmdInput = ref('')
function emitActiveCommand() {
  emit('setActiveCommand', cmdInput.value)
  cmdInput.value = ''
}
</script>

<template>
  <div flex flex-col gap-4>
    <button py-2 px-6 rounded-l rounded-tl-3xl rounded-r rounded-br-3xl class="btn-orange" @click="$emit('setActiveTabIndex', 2)">
      Q: {{ mostFaq.question }}
    </button>

    <button py-2 px-6 rounded-l rounded-tl-3xl rounded-r rounded-br-3xl class="btn-orange" @click="$emit('setActiveTabIndex', 1)">
      <div flex items-center gap-2>
        <div i-carbon:send-alt-filled />
        <span>Leave feedback</span>
      </div>
    </button>

    <button py-2 px-6 rounded-l rounded-tl-3xl rounded-r rounded-br-3xl class="btn-orange" @click="$emit('setActiveTabIndex', 3)">
      <div flex items-center gap-2>
        <div i-carbon:logo-wechat />
        <span>Chat with {{ vvifimonName }}</span>
      </div>
    </button>

    <hr my-1>

    <div>
      <div flex gap-2>
        <div>
          <label for="cmd" sr-only>VviFimon command input</label>
          <input v-model="cmdInput" name="cmd" placeholder="/feed" w-full h-full px-2 bg-gray-300 dark:bg-gray-800 rounded-bl rounded-tl-3xl rounded-r-3xl @keyup.enter="emitActiveCommand">
        </div>

        <div relative>
          <div absolute top--3 right--3>
            <MusicPlayer />
          </div>
          <button py-2 px-6 rounded-l rounded-tl-3xl rounded-r rounded-br-3xl class="btn-orange" @click="$emit('setActiveTabIndex', 4)">
            Play
          </button>
        </div>
      </div>
      <div v-if="cmdInputError" text-xs text-left text-red mx-1 font-sans>
        {{ cmdInputError }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-orange {
  background-color: rgb(251, 146, 60);
  font-size: 1.125rem;
  line-height: 1.75rem;
  /* @apply bg-orange hover:bg-orange-6 text-lg; */
}
.btn-orange:hover {
  background-color: rgb(234, 88, 12);
}
.btn {
  @apply py-2 px-6 rounded-l rounded-tl-3xl  rounded-r rounded-br-3xl;
}

.cmd-input {
  @apply w-full h-full px-2 bg-gray-300 dark:bg-gray-800 rounded-bl rounded-tl-3xl rounded-r-3xl;
}
</style>
