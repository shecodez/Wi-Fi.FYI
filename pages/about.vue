<script setup>
import tokyoImg from '@/assets/images/tokyo.png'
</script>

<template>
  <div h-screen flex items-center mt--15 class="p-about" :style="{ backgroundImage: `url(${tokyoImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }">
    <div p-4 md:px-8 py-8 bg-white dark:bg-gray-800 shadow-md class="md:w-2/3 lg:w-1/2 xl:w-1/3 md:ml-20 lg:ml-40">
      <article prose dark:prose-invert>
        <h1>About</h1>

        <p font-italic>
          Hi there! 👋<br> Welcome to VviFi– the nomadic nerds hotspot for <NuxtLink to="/topics/wtf">
            #Tech
          </NuxtLink>, <NuxtLink to="/topics/travel">
            #Travel
          </NuxtLink>, and <NuxtLink to="/blog/tags/fat">
            #Food
          </NuxtLink> –.FYI
        </p>
        <p>
          Here you can look forward to all the brutally honest 😇 tech and gadget reviews, nerdy Cringey Corner podcasts, and travel & food adventure you can handle... and some you can't. 😈
        </p>
        <h3><em>Tentative</em> Schedule:</h3>
        <ul>
          <li>
            <NuxtLink to="/topics/mad">
              MAD (Music, Anime, & Drama)
            </NuxtLink> - <b>Mondays</b>
          </li>
          <li>
            <NuxtLink to="/topics/travel">
              Travel for VviFi
            </NuxtLink> - <b>Tuesdays</b>
            <i text-xs block text-gray>FYI - Tuesday is the cheapest day to fly ✈️</i>
          </li>
          <li>
            <NuxtLink to="/topics/wtf">
              WTF (Wonderful Tech Finds)
            </NuxtLink> - <b>Wednesday</b>
          </li>
          <li>
            <NuxtLink to="/topics/throwback">
              Throwback
            </NuxtLink> /
            <NuxtLink to="/topics/thirsty">
              Thirsty
            </NuxtLink> - <b>Thursdays</b>
          </li>
          <li>
            <NuxtLink to="/blog/tags/fat">
              FAT (Food Adventure Time)
            </NuxtLink> /
            <NuxtLink to="/blog/tags/fyi">
              FYI
            </NuxtLink> - <b>Fridays</b>
          </li>
          <li>
            <b>Saturday</b> / <b>Sunday</b> - <NuxtLink to="/blog/tags/special">
              Special
            </NuxtLink> (rare)
          </li>
        </ul>
        <p text-sm>
          <b>Note</b> : Although updates will NOT be daily while I have a full-time job ¯\_(ツ)_/¯, when I <u>do</u> update, I'll try to follow the schedule.
          <em>i.e.</em> a Tuesday update will likely be about travel ✈️, and a Saturday / Sunday update is a special wildcard 🔮.
        </p>
      </article>
    </div>
  </div>
</template>

