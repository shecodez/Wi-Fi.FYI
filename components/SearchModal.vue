<script setup>
import { AisHighlight, AisHits, AisInstantSearch, AisPagination, AisPoweredBy, AisSearchBox, AisStats } from 'vue-instantsearch/vue3/es/index.js'

const config = useRuntimeConfig()

const openSearch = ref(false)
function openModal() {
  openSearch.value = true
}
function closeModal() {
  openSearch.value = false
}

const indexes = ['Site'] // , 'Blog', 'Tags', 'Topics'
const state = reactive({
  index: 'Site',
  query: '',

  loading: false,
  error: null,
})

const indexName = config.public.searchIndex
// const { result, search } = useAlgoliaSearch(indexName)
const algolia = useAlgoliaRef()

async function submitSearch() {
  try {
    state.loading = true
    await search(state.query)
  }
  catch (error) {
    state.error = error
  }
  finally {
    state.loading = false
  }
}
</script>

<template>
  <client-only>
    <button title="Search" @click="openModal">
      <slot />
      <span sr-only>Search</span>
    </button>

    <Modal
      :is-open="openSearch"
      css="w-11/12 md:max-w-lg mx-auto rounded bg-white dark:bg-gray-800 shadow-lg "
      @close="closeModal"
    >
      <div p-4>
        <AisInstantSearch :index-name="indexName" :search-client="algolia" stalled-search-delay="200">
          <AisSearchBox show-loading-indicator pb-3 />

          <AisHits max-h-lg overflow-y-auto>
            <template #item="{ item }">
              <!-- <pre>{{ item }}</pre> -->
              <NuxtLink :to="item.url">
                <h2>
                  <AisHighlight attribute="title" :hit="item" font-bold pb-1 text-xl dark:text-white />
                </h2>
                <p>
                  <AisHighlight attribute="description" :hit="item" text-gray />
                </p>
              </NuxtLink>
            </template>
          </AisHits>
          <AisPagination pt-3 />
          <div flex items-center justify-between pt-3>
            <AisStats dark:text-white tracking-wide />
            <AisPoweredBy />
          </div>
        </AisInstantSearch>
      </div>
      <!-- <form class="search-form" @submit.prevent="submitSearch">
        <div flex rounded-t-lg focus-within:ring>
          <select v-model="state.index" p-3 rounded-tl focus:outline-none bg-transparent class="filter-dropdown">
            <template v-for="(f, i) in indexes" :key="`search-index-${i}`">
              <option :value="f">
                {{ f }}
              </option>
            </template>
          </select>

          <input id="search" v-model="state.query" type="text" placeholder="Search..." p-3 flex-1 focus:outline-none bg-transparent @keydown.enter.prevent="submitSearch">

          <button bg-orange rounded-tr class="px-3.5" @click="submitSearch">
            <div i-carbon:search />
          </button>
        </div>
      </form>

      <div p-4 border-y border-dashed border-gray-500 border-opacity-50 max-h-xl overflow-y-auto>
        <ul v-if="!!result">
          <template v-for="(r, i) in result?.hits" :key="`result-${i}`">
            <li border p-2>
              <pre>{{ r }}</pre>
            </li>
          </template>
        </ul>
        <div v-else py-6 text-center opacity-60>
          No recent searches
        </div>
      </div>

      <div flex items-center justify-between rounded-b-lg>
        <button p-2 bg-red hover:bg-red-500 rounded-bl text-sm @click="closeModal">
          <div i-carbon:close />
        </button>
        <div px-4 text-xs font-bold text-right>
          Hits: {{ result?.hits.length || 0 }}
        </div>
      </div> -->
    </Modal>
  </client-only>
</template>

<style scoped>
select.filter-dropdown option {
  background-color: black;
  /* @apply bg-black; */
}
</style>

<style>
.ais-Hits-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ais-Hits-item {
  width: 100%;
  border-radius: 0.25rem;
}
</style>
