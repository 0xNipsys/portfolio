<script setup lang="ts">
import TerminalPrompt from '@/components/CommandLine.vue'
import { ref } from 'vue'
import { Command, type CommandEntry } from '@/shell/commands'
import IntroOutput from '@/components/IntroOutput.vue'
import UnknownCmdOutput from '@/components/UnknownCmdOutput.vue'
import HelpOutput from '@/components/HelpOutput.vue'

const cmdEntries = ref<CommandEntry[]>([])
const initialSubmit = ref(false)

function submitCommand(input: string) {
  initialSubmit.value = true

  if (input === 'clear') {
    cmdEntries.value = []
    return
  }

  cmdEntries.value.push({
    name: input,
    timestamp: Date.now()
  })
}
</script>

<template>
  <div
    class="flex-auto flex flex-col p-5 bg-darkerslategray rounded-tr-md rounded-b-md cursor-text overflow-y-scroll"
  >
    <TerminalPrompt
      v-if="!cmdEntries.length && !initialSubmit"
      :command="Command.Intro"
      @onsubmit="submitCommand"
      simulate
    />

    <template v-else>
      <template v-for="entry in cmdEntries" :key="entry.timestamp">
        <TerminalPrompt :command="entry.name" />
        <IntroOutput v-if="entry.name === Command.Intro" />
        <HelpOutput v-else-if="entry.name === Command.Help" />
        <UnknownCmdOutput v-else :command="entry.name" />
      </template>
      <TerminalPrompt @onsubmit="submitCommand" />
    </template>
  </div>
</template>
