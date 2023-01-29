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
  @apply p-3;
}
.faq-q {
  @apply rounded-l rounded-tl-3xl  rounded-r rounded-br-3xl bg-orange;
}
.faq-a {
  @apply rounded-br rounded-tr-3xl rounded-l-3xl bg-gray;
}
</style>
