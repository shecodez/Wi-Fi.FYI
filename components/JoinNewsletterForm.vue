<script setup>
// import useSupabase from '@/use/supabase';

const state = reactive({
  loading: false,
  email: '',
  sent: false,
  error: '',
})
// const { supabase } = useSupabase();
async function joinNewsletter() {
  // console.log('join Newsletter', state.email)
  //   try {
  //     state.loading = true;
  //     let { data, error, status } = await supabase.from('subscribers').upsert({
  //       email: state.email,
  //     });
  //     if (error && status !== 406) throw error;
  //     if (data) {
  //       state.sent = true;
  //       console.log('subscribed to newsletter', data);
  //     }
  //   } catch (e: any) {
  //     state.error = e.error_description || e.message;
  //   } finally {
  //     state.loading = false;
  //   }
}
</script>

<template>
  <form @submit.prevent="joinNewsletter">
    <div v-if="state.error" p-2 flex items-center my-1 class="error-alert">
      🛑 {{ state.error }}
    </div>
    <div v-if="state.sent" p-2 flex items-center my-1 class="success-alert">
      ✔️ We added you. Thanks!
    </div>

    <div class="form-control">
      <label for="email" pb-2 text-xs font-bold>Join for <span uppercase>Free</span> <NuxtLink to="/about" text-orange hover:underline>VviFi</NuxtLink> 😉</label>
      <div relative flex items-center>
        <input
          v-model="state.email"
          name="email"
          required
          type="email"
          placeholder="your@email.com"
          w-full p-2 bg-gray-200 dark:bg-gray-900 pr-10
        >
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
        </NuxtLink>. Pinky promise, no green eggs and spam. 😉
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
