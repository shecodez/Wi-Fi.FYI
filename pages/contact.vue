<script setup>
import { FormKitSchema } from '@formkit/vue'
import { getNode } from '@formkit/core'

const { data: contactFormJson } = await useAsyncData('contactFormJson', () => {
  return queryContent('forms', 'contact').findOne()
})

// TODO: optimize: this seems like a lot just to update the hint text on input...
const contactForm = ref({ message: '' })
const contactFormMessageLength = computed(() => contactForm.value.message.length || 0)
watch(contactFormMessageLength, (messageLength) => {
  getNode('contactmessage').props.help = `${messageLength} / 500`
})
// https://formkit.com/advanced/custom-inputs#displaying-values
function handleMessageInput() {
  // console.log('handleMessageInput called')
  // const node = getNode('contactmessage')
  // node.props.help = `${node.context.value.langth} / 500`
}

const state = reactive({
  loading: false,
  sent: false,
  error: null,
  bot: null,
  isBot: false,

  handleMessageInput,
})

// If all inputs are valid it fires the @submit event
async function postContactForm(formData, node) {
  state.loading = true

  try {
    if (formData.bot) {
      state.isBot = true
    }
    else {
    // await sendContactEmail(formData)
    }
  }
  catch (error) {
    node.setErrors(error)
    state.error = 'Error sending message, please try again later.'
  }
  finally {
    state.loading = false
    state.sent = true
  }
}

const config = useRuntimeConfig()
useHead({
  title: `Contact | ${config.public.appName}`,
})
</script>

<template>
  <div id="contact" relative flex items-center class="p-contact">
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

    <div container mx-auto h-full w-full>
      <div relative z-10 ml-auto p-8 bg-white dark:bg-gray-800 shadow-md class="card md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 text-3xl lg:text-5xl font-bold mb-6 class="rainbow-text">
          Get in Touch
        </h2>

        <p>
          Have a question 🤔? Want to give feedback? Report a bug 🐞? et cetera. Please fill out this contact form
          or you can
          <a href="mailto:contact@vvifi.fyi" text-teal-500 hover:underline>contact@vvifi.fyi</a> via
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
          <FormKitSchema :schema="contactFormJson.body" :data="state" />
        </FormKit>
      </div>
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
