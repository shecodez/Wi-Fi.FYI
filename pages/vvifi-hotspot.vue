<script setup lang="ts">
const config = useRuntimeConfig()

const blogRoute = '/blog'
const wtfFavorites = [
  { name: 'WANDRD PRVKE 21L', href: 'https://www.wandrd.com/products/prvke?variant=39289416482896' },
  { name: 'Apple iPhone 11', href: `${blogRoute}/wtf/upgrade-your-iphone-11-to-support-magsafe-with-a-sticker` },
  { name: 'Apple Watch series 4', href: 'https://amzn.to/3WFIimv' },
  { name: 'MagSafe Wallet with Find my', href: `${blogRoute}/edc/her-edc-beginners-budget-edition#a-magsafe-wallet-that-supports-apples-find-my-service` },
  { name: 'BUDI 9 in 1 USB C Data cable and Mrcro SD Card Reader', href: 'https://amzn.to/3G9oZev' },
  { name: '3 in 1 Apple charging dock', href: 'https://amzn.to/3WKL3TS' },
]

const edcFavorites = [
  { name: 'mini stun gun', href: `${blogRoute}/edc/mini-stun-gun-disguised-as-a-key-fob` },
]

const categories = [
  { label: 'WTF (Wonderful Tech Finds)', image: '', items: wtfFavorites },
  { label: 'Her EDC gadgets', image: '', items: edcFavorites },
  { label: 'Videography & Photography', image: '', title: 'Wonderful Treasure Finds', items: [] },
  { label: 'Travel Gear', image: '', items: [] },
  { label: 'Nerdy 💩', image: '', items: [] },
  { label: 'Miscellaneous Must Haves', image: '', items: [] },
]

useHead({
  title: `VviFi's 🔥Hotspot | ${config.public.appName}`,
})
</script>

<template>
  <div text-center class="p-vvifi-hotspot">
    <h1 mt-10 uppercase font-black text-2xl>
      VviFi's 🔥Hotspot
    </h1>
    <p text-lg>
      A currated list personal favorites
    </p>
    <div mb-10 flex items-center justify-center gap-2 text-sm>
      <div i-carbon:time />
      <h3 uppercase>
        Last Updated: <u>12/11/22</u>
      </h3>
    </div>

    <section container mx-auto>
      <template v-for="category in categories" :key="category.label">
        <div mb-4>
          <h3 mb-2 font-bold text-xl>
            {{ category.label }}
          </h3>
          <ul>
            <li v-for="item in category.items" :key="item.name">
              <NuxtLink :to="item.href">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </section>
  </div>
</template>
