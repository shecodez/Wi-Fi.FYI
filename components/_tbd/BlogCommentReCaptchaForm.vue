<script setup>
const props = defineProps(['slug'])

const state = reactive({
  loading: false,
  sent: false,
  error: null,
  bot: null,
  isBot: false,
})

const comment = ref({
  name: '',
  email: '',
  message: '',
})

const commentFormMessageLength = computed(() => `${comment.value.message.length} / 1024`)

async function postCommentForm(event) {
  state.loading = true

  try {
    if (formData.bot) {
      state.isBot = true
    }
    else {
      // Wait for the reCAPTCHA token
      await this.$recaptcha.getResponse()

      // Submit the form to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(new FormData(event.target)).toString(),
      })

      // Throw an error if the response was not successful
      if (!response.ok)
        throw new Error('Response was not successful')

      // reset reCAPTCHA
      await this.$recaptcha.reset()
    }
  }
  catch (error) {
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

    <form name="comment" method="POST" action="" data-netlify="true" data-netlify-recaptcha="true" @submit.prevent="postCommentForm">
      <input type="hidden" name="post" :value="slug">

      <div flex flex-col md:flex-row gap-3>
        <div flex-1 md:mb-3>
          <label sr-only for="name">Name</label>
          <input v-model="comment.name" placeholder="Name" p-3 w-full bg-gray-200 dark:bg-gray-900>
          <div text-red text-xs />
        </div>

        <div flex-1 md:mb-3>
          <label sr-only for="name">E-Mail</label>
          <input v-model="comment.email" placeholder="E-Mail" required p-3 w-full bg-gray-200 dark:bg-gray-900>
          <div text-red text-xs />
        </div>
      </div>

      <input v-model="state.bot" type="hidden" name="bot">

      <div mb-3>
        <label sr-only for="message">Message</label>
        <textarea v-model="comment.message" name="message" placeholder="Enter your message" rows="4" required p-3 w-full bg-gray-200 dark:bg-gray-900 />
        <div text-xs text-gray-500 text-right>
          {{ commentFormMessageLength }}
        </div>
        <div text-red text-xs />
      </div>

      <!-- <recaptcha /> -->
      <!-- <small>
        This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small> -->

      <button px-8 py-2 mt-4 uppercase flex items-center gap-1 class="rainbow-bg">
        {{ state.loading ? 'Sending...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>
