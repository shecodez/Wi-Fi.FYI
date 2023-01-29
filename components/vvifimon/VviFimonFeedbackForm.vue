<script setup lang="ts">
const config = useRuntimeConfig()

const state = reactive({
  loading: false,
  sent: false,
  error: '',
  bot: null,
  isBot: false,
  reCaptchaToken: '',

  // handleMessageInput,
})
const formData = reactive({
  email: '',
  message: '',
  bot: '',
  subscribe: true,
})

const reCAPTCHA = ref()
const reCaptchaAction = 'submit_feedback_email'
onMounted(() => {
  reCAPTCHA.value = useVueRecaptcha(config.public.reCaptchaSiteKey)
})

async function postFeedbackForm() {
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
        body: JSON.stringify({ ...formData, subject: 'vvifimon feedback' }),
      })

      // Throw an error if the response was not successful
      if (!response.ok)
        throw new Error('Response was not successful')

      // reset reCAPTCHA
      // reCAPTCHA.value.reset()
    }
  }
  catch (error: any) {
    state.error = 'Error, please try again later.' // e.error_description || e.message
  }
  finally {
    state.loading = false
    state.sent = true

    formData.email = ''
    formData.message = ''
  }
}
</script>

<template>
  <div>
    <div v-if="state.isBot" class="alert bot-alert">
      🍯 Oh honey pot! We think not, you're a bot!
    </div>
    <div v-if="state.sent" class="alert" :class="state.error ? 'error-alert' : 'success-alert'">
      <span v-if="state.error">❗ {{ state.error }}</span>
      <span v-else>✔️ Feedback sent. Thanks!</span>
    </div>

    <form flex flex-col gap-4>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input v-model="formData.email" name="email" type="email" required>
      </div>

      <input v-model="formData.bot" type="hidden" name="bot">

      <div class="form-control">
        <label for="message">Message</label>
        <textarea v-model="formData.message" rows="2" name="message" required />
      </div>

      <div flex items-center gap-2>
        <input v-model="formData.subscribe" name="subscribe" type="checkbox">
        <label for="subscribe">
          Subscribe to the Newsletter
        </label>
      </div>

      <button self-start mt-2 class="btn btn-orange">
        <div flex items-center gap-2>
          <div v-if="!state.loading" i-carbon:send-alt-filled />
          <span>{{ state.loading ? 'Loading...' : 'Send' }}</span>
        </div>
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-control {
  @apply flex flex-col gap-1;
}
.form-control label {
  @apply self-start text-sm;
}
.form-control input, .form-control textarea {
  @apply p-2 bg-gray-300 dark:bg-gray-800;
}

.btn-orange {
  @apply bg-orange hover:bg-orange-6 text-lg;
}
.btn {
  @apply py-2 px-6 rounded-l rounded-tl-3xl  rounded-r rounded-br-3xl;
}

.checkbox-orange {
  @apply appearance-none border w-4 h-4 checked:bg-orange
}
</style>
