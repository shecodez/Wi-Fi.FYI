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
})
const commentForm = ref({ message: '' })
const contactFormMessageLength = computed(() => commentForm.value?.message.length || 0)
watch(contactFormMessageLength, (messageLength) => {
  if (!state.sent)
    getNode('commentmessage').props.help = `${messageLength} / 1024`
})

const reCAPTCHA = ref()
const reCaptchaAction = 'submit_blog_comment'
onMounted(() => {
  reCAPTCHA.value = useVueRecaptcha(config.public.reCaptchaSiteKey)
})

async function postCommentForm(formData: any, node: FormKitNode) {
  state.loading = true

  try {
    if (formData.bot) {
      state.isBot = true
    }

    else {
    // Wait for the reCAPTCHA token
      state.reCaptchaToken = await reCAPTCHA.value(reCaptchaAction)

      // console.log('submit comment', formData)
      const params = new URLSearchParams()
      params.append('fields[name]', formData.name || 'Anonymous1')
      params.append('fields[email]', formData.email)
      params.append('fields[message]', formData.message)
      params.append('fields[post]', props.slug.split('/')[3])
      params.append('options[redirect]', `${props.slug}`)
      params.append('options[redirectError]', `${props.slug}`)

      // Submit the form to Netlify Function
      const response = await fetch('/.netlify/functions/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
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
    state.error = 'Error sending message, please try again later.'
  }
  finally {
    state.loading = false
    state.sent = true
  }
}
</script>

<template>
  <div>
    <h2 id="comments" text-3xl lg:text-5xl font-bold mb-6>
      <a href="#comments" class="rainbow-text">Leave a Comment</a>
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
