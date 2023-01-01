<script setup lang="ts">
defineProps(['navLinks', 'socialLinks'])
const openNavDrawer = ref(false)
function openDrawer() {
  openNavDrawer.value = true
}
function closeDrawer() {
  openNavDrawer.value = false
}
</script>

<template>
  <button title="Menu" class="flex" @click="openDrawer">
    <slot />
    <span class="sr-only">Menu</span>
  </button>

  <Drawer :is-open="openNavDrawer" css="w-80 mr-auto shadow-lg bg-white dark:bg-black" @close="closeDrawer">
    <div relative py-4 flex flex-col items-center h-full text-center>
      <img src="/images/logos/vvifi-banner.png" alt="VviFi Banner Logo" w-12 absolute top-0 left-6>

      <SearchModal>
        <div absolute top-4 right-6 text-xl title="Search">
          🔍
        </div>
      </SearchModal>

      <div text-3xl pb-3 font-black class="rainbow-text">
        VviFi . FYI
      </div>

      <nav my-8 w-full flex-1 flex flex-col items-center>
        <template v-for="(n, i) in navLinks" :key="`nav-link-${i}`">
          <NuxtLink :to="n.href" :data-text="n.label" p-4 flex font-semibold text-xl tracking-wider :class="n.dropdown && 'dropdown'">
            {{ n.label }}
            <span v-if="n.dropdown" class="dots" />
          </NuxtLink>
        </template>
      </nav>

      <div uppercase flex flex-col divide-y space-y-3 py-6>
        <h2 text-3xl>
          Connect&nbsp;<span text-orange text-lg>with</span>&nbsp;Us
        </h2>
        <ul flex justify-center gap-4 text-xl pt-3 text-orange>
          <li v-for="(s, i) in socialLinks" :key="`sidenav-social-icon-${i}`" :title="s.label">
            <a :href="s.link" target="_blank" class="a-link"><div :class="s.icon" /></a>
          </li>
        </ul>
      </div>

      <div flex flex-col pb-4 gap-1>
        <p text-xs md:text-sm>
          &copy; {{ new Date().getFullYear() }}
          <span class="rainbow-text">&nbsp;VviFi . FYI&nbsp;</span>
          All Rights Reserved.
        </p>
        <div divide-x text-xs md:text-sm>
          <NuxtLink to="/legal/privacy" pr-2 text-orange>
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/legal/terms" pl-2 text-orange>
            Terms of Use
          </NuxtLink>
        </div>
      </div>

      <div flex items-center justify-center gap-1 text-xs md:text-sm>
        Made with <div i-carbon:favorite-filled /> by
        <a href="https://shecodez.com" target="_blank" text-orange>shecodez</a> | NJN
      </div>
    </div>
  </Drawer>
</template>
