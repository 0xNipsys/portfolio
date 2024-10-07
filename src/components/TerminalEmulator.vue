<script setup lang="ts">
import TerminalPrompt from '@/components/CommandLine.vue'
import { ref } from 'vue'
import { Command, type CommandEntry } from '@/shell/commands'
import TldrCmd from '@/components/TldrOutput.vue'
import UnknownCmdOutput from '@/components/UnknownCmdOutput.vue'

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
  <div class="flex-auto flex flex-col p-5 bg-darkslategray rounded-tr-md rounded-b-md cursor-text">
    <TerminalPrompt
      v-if="!cmdEntries.length && !initialSubmit"
      :command="Command.Tldr"
      @onsubmit="submitCommand"
      simulate
    />

    <template v-else>
      <template v-for="entry in cmdEntries" :key="entry.timestamp">
        <TerminalPrompt :command="entry.name" />
        <TldrCmd v-if="entry.name === Command.Tldr" />
        <UnknownCmdOutput v-else :command="entry.name" />
      </template>
      <TerminalPrompt @onsubmit="submitCommand" />
    </template>
  </div>
</template>
