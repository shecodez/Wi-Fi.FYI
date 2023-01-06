<script setup lang="ts">
import { FormKitSchema } from '@formkit/vue'
import { getNode } from '@formkit/core'
import type { FormKitNode } from '@formkit/core'

const config = useRuntimeConfig()

const { data: contactFormJson } = await useAsyncData('contactFormJson', () => {
  return queryContent('forms', 'contact').findOne()
})

const state = reactive({
  loading: false,
  sent: false,
  error: '',
  bot: null,
  isBot: false,
  reCaptchaToken: '',

  // handleMessageInput,
})

// TODO: optimize: this seems like a lot just to update the hint text on input...
const contactForm = ref({ message: '' })
const contactFormMessageLength = computed(() => contactForm.value?.message.length || 0)
watch(contactFormMessageLength, (messageLength) => {
  if (!state.sent)
    getNode('contactmessage').props.help = `${messageLength} / 500`
})
// https://formkit.com/advanced/custom-inputs#displaying-values
function handleMessageInput() {
  // console.log('handleMessageInput called')
  // const node = getNode('contactmessage')
  // node.props.help = `${node.context.value.length} / 500`
}

const reCAPTCHA = ref()
const reCaptchaAction = 'submit_contact_email'
onMounted(() => {
  reCAPTCHA.value = useVueRecaptcha(config.public.reCaptchaSiteKey)
})

// If all inputs are valid it fires the @submit event
async function postContactForm(formData: any, node: FormKitNode) {
  state.loading = true

  try {
    if (formData.bot) {
      state.isBot = true
    }
    else {
      // Wait for the reCAPTCHA token
      state.reCaptchaToken = await reCAPTCHA.value(reCaptchaAction)

      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
    state.error = 'Error, please try again later.' // e.error_description || e.message
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
      Get in Touch
    </h2>

    <p>
      Have a question 🤔? Want to give feedback? Report a bug 🐞? et cetera. Please fill out this contact form
      or you can always
      <a href="mailto:contact@vvifi.fyi" text-orange hover:underline>contact@vvifi.fyi</a> via
      email. 🥰
    </p>

    <div v-if="state.isBot" class="alert bot-alert">
      🍯 Oh honey pot! We think not, you're a bot!
    </div>
    <div v-if="state.sent" class="alert" :class="state.error ? 'error-alert' : 'success-alert'">
      <span v-if="state.error">❗ {{ state.error }}</span>
      <span v-else>✔️ Message sent. Thanks!</span>
    </div>

    <FormKit v-else id="contactform" v-model="contactForm" type="form" :actions="false" form-class="mt-6" @submit="postContactForm">
      <FormKitSchema :schema="contactFormJson?.body" :data="state" />
    </FormKit>
  </div>
</template>
