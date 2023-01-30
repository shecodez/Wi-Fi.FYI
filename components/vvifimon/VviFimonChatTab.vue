<script setup lang="ts">
const props = defineProps(['messages'])

const selectedAnswerIndexArr = ref(Array(props.messages.length).fill(-1))

const showResponse = ref(false)

function setSelectedAnswerIndex(messageIndex: number, answerIndex: number) {
  selectedAnswerIndexArr.value[messageIndex] = answerIndex
  showResponse.value = true
}
</script>

<template>
  <div flex flex-col gap-4 text-lg>
    <template v-for="(m, i) in messages" :key="`chat-message-${i}`">
      <div class="msg vvifimon-msg">
        {{ m.message }}
      </div>

      <div v-if="showResponse" rounded-full bg-orange class="msg user-msg">
        {{ m.answers[selectedAnswerIndexArr[i]] }}
      </div>
      <template v-for="(a, j) in m.answers" v-else :key="`message-answer-${j}`">
        <button rounded-full hover:bg-orange-6 class="msg user-msg" @click="setSelectedAnswerIndex(i, j)">
          {{ a }}
        </button>
      </template>

      <div v-if="showResponse" class="msg vvifimon-msg">
        {{ m.responses[selectedAnswerIndexArr[i]] }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.msg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  min-width: 5rem;
  /* @apply py-2 px-4 min-w-20; */
}
.user-msg {
  align-self: flex-start;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background-color: rgba(251, 146, 60);
  /* @apply self-start rounded-bl rounded-tl-3xl  rounded-r-3xl bg-orange; */
}
.vvifimon-msg {
  align-self: flex-end;
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-width: 1px;
  border-style: solid;
  background-color: rgb(107, 114, 128);
  /* @apply self-end rounded-br rounded-tr-3xl rounded-l-3xl border bg-gray-5; */
}
</style>
