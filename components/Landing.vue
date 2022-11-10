<template>
  <img alt="VviFi Logo" src="/vvifi-banner.png" class="banner">
  <div flex flex-col children:mx-auto>
    <img alt="VviFi Avatar" src="/under-construction-avatar-t.png" class="avatar">
  </div>
  <p>Site under construction.</p>
  <div>~🥰 VviFi</div>
  <p>
    <a href="https://www.instagram.com/vvifi_fyi/">Instagram</a> ·
    <a href="https://www.twitch.tv/vvifi_fyi">Twitch</a> ·
    <a href="https://twitter.com/vvifi_fyi">Twitter</a> ·
    <a href="https://youtube.com/@vvifi_fyi">YouTube</a>
  </p>
</template>

<style scoped>
a {
  color: #dc9e45;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.avatar {
  height: 60%;
}
.banner {
  height: 25%;
  position: absolute;
  right: 10%;
  top: 0;
}
@media only screen and (max-width: 600px) {
  .avatar {
    height: 50%;
  }
  .banner {
    height: 15%;
  }
}
</style>
