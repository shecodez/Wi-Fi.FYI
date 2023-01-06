<script setup lang="ts">
// const config = useRuntimeConfig()

const state = reactive({
  loading: false,
  email: '',
  sent: false,
  successMessage: '',
  errorMessage: '',
})

// const mailchimpListId = ref(config.public.mailchimpListId)

async function joinNewsletter() {
  state.loading = true
  state.errorMessage = ''
  state.successMessage = ''

  try {
    // console.log('join newsletter', state.email)

    // Submit the form to Netlify Function
    const response = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: state.email }),
    })

    const responseJson = await response.json()
    // Throw an error if the response was not successful
    if (responseJson.status === 'error')
      throw new Error(responseJson.errorMessage)

    if (responseJson.status === 'pending')
      state.successMessage = 'You have been subscribed. Please check your email to confirm.'

    else if (responseJson.status === 'subscribed')
      state.successMessage = 'You are already subscribed. Thank you for being a subscriber!'

    else
      state.errorMessage = 'We could not subscribe you. Please try again.'
  }
  catch (e: any) {
    state.errorMessage = e.error_description || e.message
  }
  finally {
    state.loading = false
    state.sent = true
    state.email = ''
  }
}
</script>

<template>
  <form max-w-md @submit.prevent="joinNewsletter">
    <div v-if="state.errorMessage" p-2 flex items-center my-1 class="error-alert">
      ❌ {{ state.errorMessage }}
    </div>
    <div v-if="state.sent && !state.errorMessage" p-2 flex items-center my-1 class="success-alert">
      ✔️ {{ state.successMessage }}
    </div>
    <div v-else class="form-control">
      <label for="email" pb-2 text-xs font-bold>Join the <span uppercase>Free</span> <NuxtLink to="/about" text-orange hover:underline>VviFi</NuxtLink> 😉</label>
      <div relative flex items-center>
        <input
          v-model="state.email"
          name="email"
          required
          type="email"
          placeholder="your@email.com"
          w-full p-2 bg-gray-200 dark:bg-gray-900 pr-10
        >
        <!-- <input type="hidden" name="listId" :value="mailchimpListId"> -->
        <button absolute right-0 p-3 hover:text-orange :class="state.loading && 'loading'">
          <div i-carbon:arrow-right />
          <span class="sr-only">Join</span>
        </button>
      </div>
      <div mt-2 dark:text-gray-400 text-xs>
        By clicking
        <div i-carbon:arrow-right inline-block /> you agree to the
        <NuxtLink to="/legal/privacy" text-orange hover:underline>
          Privacy Policy
        </NuxtLink>
        |
        <NuxtLink to="/legal/terms" text-orange hover:underline>
          Terms of Use
        </NuxtLink>. Pinky promise, no green eggs nor spam.
      </div>
    </div>
  </form>
</template>

<style scoped>
.success-alert {
  border-left-width: 4px;
  border-left-style: solid;
  border-color: rgb(22, 163, 74);
  background-color: rgba(74, 222, 128, 0.2);
  color: rgb(22, 163, 74);
  /* @apply border-l-4 border-green-600 bg-green-400 bg-opacity-20 text-green-600; */
}
.error-alert {
  border-left-width: 4px;
  border-left-style: solid;
  border-color: rgb(220, 38, 38);
  background-color: rgba(248, 113, 113, 0.2);
  color: rgb(220, 38, 38);
  /* @apply border-l-4 border-red-600 bg-red-400 bg-opacity-20 text-red-600; */
}
</style>
