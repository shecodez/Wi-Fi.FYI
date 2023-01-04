<template>
  <div min-h-screen flex flex-col>
    <!-- <div class="fixed w-2 left-0 top-0 h-full bg-teal z-50" />
    <div class="fixed w-2 right-0 top-0 h-full bg-orange z-50" />
    <div class="fixed h-2 left-0 top-0 w-full rainbow-bg z-50" />
    <div class="fixed h-2 left-0 bottom-0 w-full rainbow-bg z-50" /> -->
    <Header />
    <main ref="main" px-4>
      <slot />
    </main>
    <Footer />
    <!-- <SocialLinksMenu /> -->
  </div>
</template>
