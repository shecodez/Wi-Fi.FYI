<script setup lang="ts">
// import { throttledWatch, useMouse, useWindowSize } from '@vueuse/core'

const { x: mouseX, y: mouseY } = useMouse()
// const { width, height } = useWindowSize()
const window = reactive(useWindowSize())

const eye = ref(null as Element | null)
const eyeLocation = ref<DOMRect | undefined>(undefined)

onMounted(() => {
  eyeLocation.value = eye?.value?.getBoundingClientRect()
})

// debouncedWatch([width, height], () => {
//   eyeLocation.value = eye?.value?.getBoundingClientRect()
// }, { debounce: 200 })

const moveBounds = 42
const friction = 1 / 30
const moveX = ref(0)
const moveY = ref(0)
const translate = ref('translate(0px, 0px)')
throttledWatch([mouseX, mouseY], ([x, y]) => {
  if (eyeLocation.value) {
    const _mouseX = Math.max(-moveBounds, Math.min(moveBounds, window.width / 2 - x))
    const _mouseY = Math.max(-moveBounds, Math.min(moveBounds, window.height / 2 - y))
    const followX = (20 * _mouseX) / 100
    const followY = (20 * _mouseY) / 100

    moveX.value += (followX - moveX.value) * friction
    moveY.value += (followY - moveY.value) * friction

    translate.value = `translate(${-moveX.value}px, ${-moveY.value}px)`
  }
}, { throttle: 1000 / 60 })

function resetEyes() {
  translate.value = 'translate(0px, 0px)'
}

const menuNav = [
  { label: 'About', href: '/about' },
  { label: 'VviFi\'s 🔥Hotspot', href: '/hotspot' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  {
    icon: 'i-carbon:logo-discord',
    label: 'Discord',
    link: 'https://discord.gg/kE4Xu7WsQK',
  },
  { icon: 'i-carbon:logo-instagram', label: 'Instagram', link: 'https://www.instagram.com/vvifi_fyi/' },
  // { icon: 'i-carbon:logo-twitter', label: 'Twitter', link: 'https://twitter.com/vvifi_fyi' },
  { icon: 'i-carbon:logo-youtube', label: 'YouTube', link: 'https://youtube.com/@vvifi_fyi' },
  { icon: 'i-carbon:logo-pinterest', label: 'Pinterest', link: 'https://www.pinterest.com/vvifi_fyi/' },
]
</script>

<template>
  <header flex items-center justify-between absolute z-20 top-0 inset-x-10 md:inset-x-20>
    <img alt="VviFi Banner Logo" src="/images/logos/vvifi-banner.png" class="banner" h-24 md:h-36>

    <SideNavDrawer :nav-links="menuNav" :social-links="socialLinks">
      <div title="Menu" md:hidden text-xl flex items-center gap-2 border-2 p-2>
        <div i-carbon:menu />
        <span uppercase>Menu</span>
      </div>
    </SideNavDrawer>
    <nav text-2xl flex gap-4>
      <template v-for="n in menuNav" :key="n.href">
        <NuxtLink :to="n.href" font-bold hover:text-orange py-4 hidden md:block>
          {{ n.label }}
        </NuxtLink>
      </template>
    </nav>
  </header>

  <div flex flex-col children:mx-auto class="avatar">
    <div relative>
      <img absolute alt="VviFi Avatar blinking" src="/avatar/under-construction-avatar-eye-closed-smile.png" class="a-blink-layer">
      <img absolute alt="VviFi Avatar sclera" src="/avatar/animation/under-construction-avatar-eye-open-smile-bottom-layer.png" class="a-layer">
      <img absolute md-hidden alt="VviFi Avatar iris & pupil" src="/avatar/animation/under-construction-avatar-eye-open-smile-move-layer.png" class="a-layer">
      <div ref="eye" absolute h-full w-full hidden md-block :style="{ backgroundImage: 'url(/avatar/animation/under-construction-avatar-eye-open-smile-move-layer.png)', transform: translate }" class="a-layer move-layer" />
      <img relative alt="VviFi Avatar face" src="/avatar/animation/under-construction-avatar-eye-open-smile-top-layer.png" class="a-layer">
    </div>
  </div>

  <h2 text-3xl font-black uppercase>
    🚧 <span class="rainbow-text">Site under construction</span> 🚧
  </h2>
  <div>~❤️ VviFi</div>
  <div flex gap-2 justify-center items-center text="xl gray4">
    <template v-for="s in socialLinks" :key="s.link">
      <a :href="s.link" :title="s.label">
        <div :class="s.icon"><span sr-only>{{ s.label }}</span></div>
      </a> ·
    </template>
    <a href="https://twitter.com/vvifi_fyi">
      <div i-carbon:logo-twitter><span sr-only>Twitter</span></div>
    </a><span ml--2>(RIP) ·</span>
    <a href="https://www.twitch.tv/vvifi_fyi">
      <div text-2xl style="position: relative; top: 50%; transform: translateY(15%);"><IconsMdiTwitchSvg /> <span sr-only>Twitch</span></div>
    </a>
  </div>
</template>

<style scoped>
a:hover {
  color: #dc9e45;
  text-decoration: underline;
}

.avatar {
  height: 60%;
}

.a-blink-layer {
  z-index: 10;
  animation: blink 5s steps(5, start) infinite;
}
@keyframes blink {
  0% {
    visibility: hidden;
  }
  70% {
    visibility: hidden;
  }
  75% {
    visibility: visible;
  }
  80% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}

@media only screen and (max-width: 600px) {
  .avatar {
    height: 50%;
  }
}
</style>
