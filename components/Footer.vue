<template>
  <div
    text="xl gray4"
    mt-auto
    p-5
    flex
    flex-col
    md:flex-row
    justify-center
    items-center
    gap-4
  >
    <NuxtLink i-carbon-campsite to="/" />
    <JoinNewsletterForm />
    <DarkToggle />
  </div>
</template>
