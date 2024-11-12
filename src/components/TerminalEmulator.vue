<script setup lang="ts">
import TerminalPrompt from '@/components/TerminalPrompt.vue'
import { ref, useTemplateRef, watch } from 'vue'
import { Command, type CommandEntry, ShellFullscreenCmd, ShellSubmission } from '@/shell/commands'
import IntroOutput from '@/components/IntroOutput.vue'
import UnknownCmdOutput from '@/components/UnknownCmdOutput.vue'
import HelpOutput from '@/components/HelpOutput.vue'
import SetLangOutput from '@/components/SetLangOutput.vue'
import parseEntry from '@/shell/entry-parsing'
import ExperienceOutput from '@/components/ExperienceOutput.vue'

const cmdEntries = ref<CommandEntry[]>([])
const initialSubmit = ref(false)
const mainPrompt = useTemplateRef<typeof TerminalPrompt>('mainPrompt')
const fsKeyListener = useTemplateRef<HTMLButtonElement>('fsKeyListener')
const lastKeyDown = ref<KeyboardEvent | null>(null)

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

  if (cmdEntry.fullscreen) {
    ShellFullscreenCmd.value = cmdEntry.cmdName
  }

  setTimeout(() => {
    mainPrompt.value?.inputEl.scrollIntoView({ behavior: 'smooth' })
  }, 100)
})

watch(ShellFullscreenCmd, () => {
  if (ShellFullscreenCmd.value) {
    setTimeout(focusKeyListener, 200)
  } else {
    setTimeout(focusPrompt, 200)
  }
})

function focusKeyListener() {
  fsKeyListener.value?.focus()
}

function focusPrompt() {
  mainPrompt.value?.inputEl.focus()
}

function exitFullscreen() {
  ShellFullscreenCmd.value = null
}
</script>

<template>
  <div
    class="flex-auto p-5 bg-darkerslategray rounded-tr-md rounded-b-md overflow-y-scroll select-none"
  >
    <div v-if="!ShellFullscreenCmd" class="size-full flex flex-col" @click="focusPrompt">
      <TerminalPrompt v-if="!cmdEntries.length && !initialSubmit" :simInput="Command.Intro" />

      <template v-else>
        <template v-for="entry in cmdEntries" :key="entry.timestamp">
          <TerminalPrompt :cmdEntry="entry" />
          <SetLangOutput v-if="entry.cmdName === Command.SetLang" :entry="entry" />
          <IntroOutput v-else-if="entry.cmdName === Command.Intro" />
          <HelpOutput v-else-if="entry.cmdName === Command.Help" />
          <UnknownCmdOutput v-else-if="!entry.fullscreen" :command="entry.cmdName" />
        </template>
        <TerminalPrompt ref="mainPrompt" :entries="cmdEntries" />
      </template>
    </div>
    <div v-else class="size-full flex flex-col gap-3" @click="focusKeyListener">
      <div class="flex-auto">
        <ExperienceOutput
          v-if="ShellFullscreenCmd === Command.Experience"
          :last-key-down="lastKeyDown"
        />
      </div>

      <div class="flex text-steelblue">
        <button
          ref="fsKeyListener"
          class="opacity-0"
          @keydown.exact="lastKeyDown = $event"
          @keydown.ctrl.c.exact="exitFullscreen"
          autofocus
          onblur="this.focus()"
        />

        <div class="flex-auto text-right text-sm">
          full-screen mode /
          <button class="font-bold text-darkgoldenrod cursor-pointer" @click="exitFullscreen">
            [exit]
          </button>
          or &lt;CTRL+C&gt;
        </div>
      </div>
    </div>
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
