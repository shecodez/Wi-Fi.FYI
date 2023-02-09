<script setup>
const openSearch = ref(false)
function openModal() {
  openSearch.value = true
}
function closeModal() {
  openSearch.value = false
}

const filters = ['All', 'Blog', 'Tags', 'Topics']
const state = reactive({
  filter: 'All',
  query: '',
  results: [],

  loading: false,
  error: null,
})
</script>

<template>
  <client-only>
    <button title="Search" @click="openModal">
      <slot />
      <span sr-only>Search</span>
    </button>

    <Modal
      :is-open="openSearch"
      css="w-11/12 md:max-w-lg mx-auto rounded shadow-lg bg-white dark:bg-gray-800"
      @close="closeModal"
    >
      <form class="search-form">
        <div flex rounded-t-lg focus-within:ring>
          <select v-model="state.filter" p-3 rounded-tl focus:outline-none bg-transparent class="filter-dropdown">
            <template v-for="(f, i) in filters" :key="`search-filter-${i}`">
              <option :value="f">
                {{ f }}
              </option>
            </template>
          </select>

          <input id="search" v-model="state.query" type="text" placeholder="Search..." p-3 flex-1 focus:outline-none bg-transparent>

          <button type="button" bg-orange rounded-tr class="px-3.5">
            <div i-carbon:search />
          </button>
        </div>
      </form>

      <div p-4 border-y border-dashed border-gray-500 border-opacity-50>
        <div v-if="state.results.length">
          {{ state.results }}
        </div>
        <div v-else py-6 text-center opacity-60>
          No recent searches
        </div>
      </div>

      <div flex items-center justify-between rounded-b-lg>
        <button p-2 bg-red hover:bg-red-500 rounded-bl text-sm @click="closeModal">
          <div i-carbon:close />
        </button>
        <div px-4 text-xs font-bold text-right>
          Hits: {{ state.results.length }}
        </div>
      </div>
    </Modal>
  </client-only>
</template>

<style scoped>
select.filter-dropdown option {
  background-color: black;
  /* @apply bg-black; */
}
</style>
