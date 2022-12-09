<template>
  <div min-h-screen flex flex-col>
    <Header />
    <main ref="main">
      <slot />
    </main>
    <Footer />
    <!-- <SocialLinksMenu /> -->
  </div>
</template>
