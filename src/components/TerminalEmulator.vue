<script setup lang="ts">
import TerminalPrompt from '@/components/CommandLine.vue'
import { ref } from 'vue'
import { Command, type CommandEntry } from '@/shell/commands'
import TldrCmd from '@/components/TldrOutput.vue'
import UnknownCmdOutput from '@/components/UnknownCmdOutput.vue'

const cmdEntries = ref<CommandEntry[]>([])

/*onMounted(() => {
  figlet.parseFont('Standard', standard)
  figlet.text(
    'Xavier Saliniere',
    {
      font: 'Standard'
    },
    function (err, data) {
      test.value = data as string
    }
  )
})*/

function submitCommand(input: string) {
  cmdEntries.value.push({
    name: input,
    timestamp: Date.now()
  })
}
</script>

<template>
  <div class="flex-auto flex flex-col p-5 bg-darkslategray rounded-tr-md rounded-b-md">
    <template v-for="entry in cmdEntries" :key="entry.timestamp">
      <TerminalPrompt :command="entry.name" />
      <TldrCmd v-if="entry.name === Command.Tldr" />
      <UnknownCmdOutput v-else :command="entry.name" />
    </template>
    <TerminalPrompt @onsubmit="submitCommand" />
  </div>
</template>
