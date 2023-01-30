<script setup lang="ts">
import VviFimonHomeTab from '~~/components/vvifimon/VviFimonHomeTab.vue'
import VviFimonFeedbackForm from '~~/components/vvifimon/VviFimonFeedbackForm.vue'
import VviFimonFAQTab from '~~/components/vvifimon/VviFimonFAQTab.vue'
import VviFimonChatTab from '~~/components/vvifimon/VviFimonChatTab.vue'
import VviFimonPlayTab from '~~/components/vvifimon/VviFimonPlayTab.vue'
import VviFimonAnimatedAvatar from '~~/components/vvifimon/VviFimonAnimatedAvatar.vue'

const vvifimonName = 'Qi'
const websiteName = 'VviFi.FYI'

const showChatbox = ref(false)

const tabs = ref([`Hi, my name is ${vvifimonName}`, 'Send Feedback', 'FAQs', 'Chat', 'Let\'s Play'])
const activeTabIndex = ref(0)
function setActiveTabIndex(index: number) {
  activeTabIndex.value = index
}

// const commandList = [{label: '/help'}, { label: '/sit' }, { label: '/feed', timeout: '5000' }, { label: '/sleep' }]
const commandList = []
const activeCommand = ref('')
const activeCommandIndex = ref()
function setActiveCommand(cmd: string) {
  if (performCommand(cmd))
    activeCommand.value = cmd
}

const cmdInputError = ref()
function performCommand(cmd: string) {
  if (!cmd)
    return

  cmdInputError.value = ''
  const isValidCmd = commandList.find(c => c.label === cmd)
  if (isValidCmd) {
    // console.log('VviFimon', cmd)
    activeCommandIndex.value = commandList.map(c => c.label).indexOf(cmd)
    return true
  }
  else {
    cmdInputError.value = `'${cmd}' is unrecognized command.`
    return false
  }
}

const faqs = ref([
  { question: 'How long will your site be \'Under Construction\'?', answer: '¯\\_(ツ)_/¯' },
  { question: 'WTF is a VviFimon?', answer: `I'm ${websiteName}'s website monster ${vvifimonName}. I'm here to answer questions, play with you, and look cute. /ᐠ - ˕ -マ` },
])

const messages = ref([
  { message: 'Hey, how\'s it goin\'?', answers: ['great', 'meh', '(ノಠ益ಠ)ノ彡┻━┻'], responses: ['(つ๑● ꇴ●)つヘ(•́ ∀ •̀๑ヘ )', '¯\\_(ツ)_/¯ meh too', '┬─┬ ノ( ゜-゜ノ)'] },
])
</script>

<template>
  <div fixed z-20 bottom-1 right-4 class="vvifimon-container">
    <div v-if="showChatbox" class="vvifimon-chatbox">
      <header flex items-center justify-between text-xl>
        <div flex items-center gap-1>
          <button v-if="activeTabIndex !== 0" activeTabIndex @click="setActiveTabIndex(0)">
            <div i-carbon:chevron-left />
          </button>
          <span font-bold>{{ tabs[activeTabIndex] }}</span>
        </div>
        <button @click="showChatbox = false">
          <div i-carbon:close />
        </button>
      </header>

      <div py-4 max-h-xs min-h-xs overflow-y-auto>
        <VviFimonHomeTab v-if="activeTabIndex === 0" :most-faq="faqs[0]" :vvifimon-name="vvifimonName" :cmd-input-error="cmdInputError" @set-active-tab-index="setActiveTabIndex" @set-active-command="setActiveCommand" />
        <VviFimonFeedbackForm v-if="activeTabIndex === 1" />
        <VviFimonFAQTab v-if="activeTabIndex === 2" :faqs="faqs" />
        <VviFimonChatTab v-if="activeTabIndex === 3" :messages="messages" />
        <VviFimonPlayTab v-if="activeTabIndex === 4" :commands="commandList" :active-command-index="activeCommandIndex" @set-active-command="setActiveCommand" />
      </div>

      <p text-center text-xs>
        VviFimon by <a href="https://shecodez.com" target="_blank" text-orange hover:underline uppercase>shecodez</a>
      </p>
    </div>

    <div flex justify-end mr-16 class="vvifimon-avatar">
      <!-- <div text-xs>
        {{ activeCommand.replace('/', '') }}
      </div> -->
      <button @click="showChatbox = !showChatbox">
        <VviFimonAnimatedAvatar />
      </button>
    </div>
  </div>
</template>

<style scoped>
.vvifimon-chatbox {
  @apply p-8 min-w-xs max-w-xs bg-gray-300 dark:bg-black bg-opacity-40 dark:bg-opacity-40 rounded-l rounded-tl-3xl  rounded-r rounded-br-3xl shadow-lg;
  backdrop-filter: saturate(180%) blur(20px);
}
</style>
