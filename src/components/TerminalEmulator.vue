<script setup lang="ts">
import TerminalPrompt from '@/components/TerminalPrompt.vue'
import { ref, useTemplateRef, watch } from 'vue'
import { Command, type CommandEntry, ShellSubmission } from '@/shell/commands'
import IntroOutput from '@/components/IntroOutput.vue'
import UnknownCmdOutput from '@/components/UnknownCmdOutput.vue'
import HelpOutput from '@/components/HelpOutput.vue'
import SetLangOutput from '@/components/SetLangOutput.vue'
import parseEntry from '@/shell/entry-parsing'
import ExperienceOutput from '@/components/ExperienceOutput.vue'

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

  const cmdEntry = parseEntry(submission)
  cmdEntries.value.push(cmdEntry)

  setTimeout(() => {
    mainPrompt.value?.inputEl.scrollIntoView({ behavior: 'smooth' })
  }, 100)
})

function onClick() {
  mainPrompt.value?.inputEl.focus()
}
</script>

<template>
  <div
    class="flex-auto flex flex-col p-5 bg-darkerslategray rounded-tr-md rounded-b-md overflow-y-scroll select-none"
    @click="onClick"
  >
    <TerminalPrompt v-if="!cmdEntries.length && !initialSubmit" :simInput="Command.Intro" />

    <template v-else>
      <template v-for="entry in cmdEntries" :key="entry.timestamp">
        <TerminalPrompt :cmdEntry="entry" />
        <ExperienceOutput v-if="entry.cmdName === Command.Experience" :entry="entry" />
        <SetLangOutput v-else-if="entry.cmdName === Command.SetLang" :entry="entry" />
        <IntroOutput v-else-if="entry.cmdName === Command.Intro" />
        <HelpOutput v-else-if="entry.cmdName === Command.Help" />
        <UnknownCmdOutput v-else :command="entry.cmdName" />
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
