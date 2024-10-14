<script setup lang="ts">
import TerminalPrompt from '@/components/TerminalPrompt.vue'
import { ref, useTemplateRef, watch } from 'vue'
import { Command, type CommandEntry, ShellSubmission } from '@/shell/commands'
import IntroOutput from '@/components/IntroOutput.vue'
import UnknownCmdOutput from '@/components/UnknownCmdOutput.vue'
import HelpOutput from '@/components/HelpOutput.vue'

const cmdEntries = ref<CommandEntry[]>([])
const initialSubmit = ref(false)
const mainPrompt = useTemplateRef<typeof TerminalPrompt>('mainPrompt')

watch(ShellSubmission, (submission) => {
  if (!submission) return
  ShellSubmission.value = ''
  initialSubmit.value = true

  if (submission === 'clear') {
    cmdEntries.value = []
    return
  }

  cmdEntries.value.push({
    name: submission,
    timestamp: Date.now()
  })
  setTimeout(() => {
    mainPrompt.value?.inputEl.scrollIntoView({ behavior: 'smooth' })
  }, 100)
})
</script>

<template>
  <div
    class="flex-auto flex flex-col p-5 bg-darkerslategray rounded-tr-md rounded-b-md cursor-text overflow-y-scroll"
  >
    <TerminalPrompt
      v-if="!cmdEntries.length && !initialSubmit"
      :cmdInput="Command.Intro"
      simulate
    />

    <template v-else>
      <template v-for="entry in cmdEntries" :key="entry.timestamp">
        <TerminalPrompt :cmdInput="entry.name" />
        <IntroOutput v-if="entry.name === Command.Intro" />
        <HelpOutput v-else-if="entry.name === Command.Help" />
        <UnknownCmdOutput v-else :command="entry.name" />
      </template>
      <TerminalPrompt ref="mainPrompt" :entries="cmdEntries" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
:host {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #1c3848;
}

::-webkit-scrollbar-thumb:hover {
  cursor: default;
  background: #152b37;
}
</style>
