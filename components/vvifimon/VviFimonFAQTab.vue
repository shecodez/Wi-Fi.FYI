<script setup lang="ts">
const props = defineProps(['faqs'])

const showAnswerIndexArr = ref(Array(props.faqs.length).fill(false))
showAnswerIndexArr.value[0] = true
function setSelectedAnswerIndex(faqIndex: number) {
  showAnswerIndexArr.value[faqIndex] = !showAnswerIndexArr.value[faqIndex]
}
</script>

<template>
  <div flex flex-col gap-4>
    <template v-for="(f, i) in faqs" :key="`faq-${i}`">
      <div flex flex-col gap-4>
        <button class="faq faq-q" hover:bg-orange-6 @click="setSelectedAnswerIndex(i)">
          {{ f.question }}
        </button>

        <div v-if="showAnswerIndexArr[i]" class="faq faq-a">
          {{ f.answer }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.faq {
  padding: 0.75rem;
  /* @apply p-3; */
}
.faq-q {
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 1.5rem;
  background-color: rgba(251, 146, 60);
  /* @apply rounded-bl rounded-tl-3xl rounded-tr rounded-br-3xl bg-orange; */
}
.faq-a {
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-width: 1px;
  border-style: solid;
  background-color: rgb(107, 114, 128);
  /* @apply rounded-br rounded-tr-3xl rounded-l-3xl bg-gray-5; */
}
</style>
