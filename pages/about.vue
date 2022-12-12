<script setup>
import tokyoImg from '@/assets/images/tokyo.png'
</script>

<template>
  <div h-screen flex items-center mt--15 class="p-about" :style="{ backgroundImage: `url(${tokyoImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }">
    <div bg-white dark:bg-gray-800 p-4 md:px-8 py-8 class="md:w-2/3 lg:w-1/2 xl:w-1/3 md:ml-20 lg:ml-40">
      <article prose dark:prose-invert>
        <h1>About</h1>
        <p>
          Hi there! Welcome to VviFi.FYI the 🔥hotspot for Tech & Travel gear, EDC, and all the Nerdy 💩 inbetween.
          Here you can look foward to all the brutally honest 😇 tech and gadget reviews, nerd herd podcasts, and travel exploration you can handle... plus some you can't. 😈
        </p>
        <h3>Schedule:</h3>
        <ul>
          <li>
            <NuxtLink to="/topics/nerdy">
              MAN (Mostly Anime News)
            </NuxtLink> - <b>Mondays</b>
          </li>
          <li>
            <NuxtLink to="/topics/edc">
              Her EDC
            </NuxtLink> - <b>Tuesdays</b>
          </li>
          <li>
            <NuxtLink to="/topics/wtf">
              WTF (Wonderful Tech Finds)
            </NuxtLink> - <b>Wednesday</b>
          </li>
          <li>
            <NuxtLink to="/topics/travel">
              Travel
            </NuxtLink> - <b>Thursdays</b>
          </li>
          <li>
            <NuxtLink to="/blog/tags/foodie">
              Foodie
            </NuxtLink> - <b>Fridays</b>
          </li>
          <li>
            <b>Saturday</b> or <b>Sunday</b> - <NuxtLink to="/blog/tags/special">
              Special
            </NuxtLink> (rare)
          </li>
        </ul>
        <p text-sm>
          <b>Note</b> : Although updates will NOT be daily while I have a full-time job ¯\_(ツ)_/¯, when I <u>do</u> update, I'll try to follow the schedule.
          <em>i.e.</em> a Thursday update will likely be about travel ✈️, and a Saturday / Sunday update is a special wildcard 🔮.
        </p>
      </article>
    </div>
  </div>
</template>

