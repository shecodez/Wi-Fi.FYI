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

    // await sendContactEmail(formData)
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

useHead({
  title: `Contact | ${config.public.appName}`,
})
</script>

<template>
  <div id="contact" relative flex items-center justify-end class="p-contact">
    <div id="map-container" absolute inset-0 bg-gray-300 dark:bg-gray-800>
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Hachi%C5%8Dji+(shecodez)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
      />
    </div>

    <div relative z-10 p-4 md:p-8 bg-white dark:bg-gray-800 shadow-md class="md:w-2/3 lg:w-1/2 xl:w-1/3 md:mr-20 lg:mr-40">
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
  </div>
</template>

<style>
div.p-contact {
  min-height: calc(100vh - 6.5vh);
}
.send-btn {
  width: 100px !important;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.text-right {
  text-align: right;
}
.text-red {
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}
@media (min-width: 768px) {
  .md\:flex-row {
    flex-direction: row;
  }
}
</style>
