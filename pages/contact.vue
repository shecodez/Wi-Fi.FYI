<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  title: `Contact | ${config.public.appName}`,
})
</script>

<template>
  <div id="contact" relative flex items-center justify-end class="p-contact">
    <div id="map-container" absolute inset-0 bg-gray-300 dark:bg-gray-800>
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Hachi%C5%8Dji+(shecodez)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
      />
    </div>

    <div relative z-10 p-4 md:p-8 bg-white dark:bg-gray-800 shadow-md class="md:w-2/3 lg:w-1/2 xl:w-1/3 md:mr-20 lg:mr-40">
      <ContactForm />
    </div>
  </div>
</template>

<style>
div.p-contact {
  min-height: calc(100vh - 6.5vh);
}
.send-btn {
  width: 100px !important;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.text-right {
  text-align: right;
}
.text-red {
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}
.ml-auto {
  margin-left: auto;
}
@media (min-width: 768px) {
  .md\:flex-row {
    flex-direction: row;
  }
}
</style>
