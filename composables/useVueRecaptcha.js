import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'
import { useNuxtApp } from '#app'

export function useVueRecaptcha(pubicKey) {
  const { vueApp } = useNuxtApp()

  vueApp.use(VueReCaptcha, {
    siteKey: pubicKey,
    loaderOptions: { autoHideBadge: false },
  })

  const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

  return async (action) => {
    await recaptchaLoaded()
    return await executeRecaptcha(action)
  }
}
