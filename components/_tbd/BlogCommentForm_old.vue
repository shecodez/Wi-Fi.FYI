<script setup lang="ts">
import { FormKit, FormKitSchema } from '@formkit/vue'
import { getNode } from '@formkit/core'
import type { FormKitNode } from '@formkit/core'

const props = defineProps(['slug'])

const config = useRuntimeConfig()

const { data: commentFormJson } = await useAsyncData('commentFormJson', () => {
  return queryContent('forms', 'comment').findOne()
})

const state = reactive({
  loading: false,
  sent: false,
  error: '',
  bot: null,
  isBot: false,
  reCaptchaToken: '',

  handleMessageInput,
})

const reCAPTCHA = ref()
const reCaptchaAction = 'submit_blog_comment'
onMounted(() => {
  reCAPTCHA.value = useVueRecaptcha(config.public.reCaptchaSiteKey)
})

// TODO: optimize: this seems like a lot just to update the hint text on input...
const commentForm = ref({ message: '' })
const commentFormMessageLength = computed(() => commentForm.value?.message.length || 0)
watch(commentFormMessageLength, (messageLength) => {
  if (!state.sent)
    getNode('commentmessage').props.help = `${messageLength} / 1024`
})
// https://formkit.com/advanced/custom-inputs#displaying-values
function handleMessageInput() {
  // console.log('handleMessageInput called')
  // const node = getNode('commentmessage')
  // node.props.help = `${node.context.value.length} / 1024`
}

async function postCommentForm(formData: any, node: FormKitNode) {
  state.loading = true

  try {
    if (formData.bot) {
      state.isBot = true
    }
    else {
      // Wait for the reCAPTCHA token
      state.reCaptchaToken = await reCAPTCHA.value(reCaptchaAction)

      const _formData = {
        post: props.slug,
        ...formData,
        recaptcha: {
          token: state.reCaptchaToken,
          action: reCaptchaAction,
        },
      }
      // console.log('submit comment', _formData)

      // Submit the form to Netlify
      const response = await fetch('/.netlify/functions/postcomment?branch=master', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: _formData,
      })

      // Throw an error if the response was not successful
      if (!response.ok)
        throw new Error('Response was not successful')

      // reset reCAPTCHA
      // reCAPTCHA.value.reset()
    }
  }
  catch (error: any) {
    node.setErrors(error)
    state.error = error// 'Error sending message, please try again later.'
  }
  finally {
    state.loading = false
    state.sent = true
  }
}
</script>

<template>
  <div>
    <h2 text-3xl lg:text-5xl font-bold mb-6 class="rainbow-text">
      Leave a Comment
    </h2>

    <div v-if="state.isBot" class="alert bot-alert">
      🍯 Oh honey pot! We think not, you're a bot!
    </div>
    <div v-if="state.sent" class="alert" :class="state.error ? 'error-alert' : 'success-alert'">
      <span v-if="state.error">❗ {{ state.error }}</span>
      <span v-else>✔️ Message sent. Thanks!</span>
    </div>

    <FormKit v-else id="commentform" v-model="commentForm" type="form" :actions="false" form-class="mt-6" @submit="postCommentForm">
      <FormKitSchema :schema="commentFormJson?.body" :data="state" />
    </FormKit>
  </div>
</template>

<style>
.mb-3 {
  margin-bottom: 0.75rem;
}
.text-right {
  text-align: right;
}
</style>
