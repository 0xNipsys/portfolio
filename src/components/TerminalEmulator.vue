<script setup lang="ts">
import TerminalPrompt from '@/components/TerminalPrompt.vue'
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'
import { Command, type CommandEntry } from '@/shell/commands'
import IntroOutput from '@/components/IntroOutput.vue'
import UnknownCmdOutput from '@/components/UnknownCmdOutput.vue'
import HelpOutput from '@/components/HelpOutput.vue'
import SetLangOutput from '@/components/SetLangOutput.vue'
import parseEntry from '@/shell/entry-parsing'
import ExperienceOutput from '@/components/ExperienceOutput.vue'
import { i18n } from '@/content/i18n'
import { InitialTabCmd, Tab } from '@/enums/tab'
import { Shells } from '@/shell/shell'

const props = defineProps<{
  tab: Tab
}>()

const cmdEntries = ref<CommandEntry[]>([])
const initialSubmit = ref(false)
const mainPrompt = useTemplateRef<typeof TerminalPrompt>('mainPrompt')
const fsKeyListener = useTemplateRef<HTMLButtonElement>('fsKeyListener')
const lastKeyDown = ref<KeyboardEvent | null>(null)

const fullScreenCmd = computed(() => Shells[props.tab].fullscreenCmd)

onMounted(() => {
  if (props.tab !== Tab.MainTab) {
    Shells[props.tab] = {}
  }
})

watch(
  () => Shells[props.tab].submission,
  (submission) => {
    if (!submission) return
    Shells[props.tab].submission = ''
    initialSubmit.value = true

    if (submission === 'clear') {
      cmdEntries.value = []
      return
    }

    const cmdEntry = parseEntry(submission)
    cmdEntries.value.push(cmdEntry)

    if (cmdEntry.fullscreen) {
      Shells[props.tab].fullscreenCmd = cmdEntry.cmdName
    }

    setTimeout(() => {
      mainPrompt.value?.inputEl.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
)

watch(
  () => Shells[props.tab].fullscreenCmd,
  () => {
    if (Shells[props.tab].fullscreenCmd) {
      setTimeout(focusKeyListener, 200)
    } else {
      setTimeout(focusPrompt, 200)
    }
  }
)

function focusKeyListener() {
  fsKeyListener.value?.focus()
}

function focusPrompt() {
  mainPrompt.value?.inputEl.focus()
}

function exitFullscreen() {
  if (props.tab !== Tab.MainTab) return
  Shells[props.tab].fullscreenCmd = undefined
}
</script>

<template>
  <div class="bg-darkerslategray w-full h-full overflow-y-scroll select-none">
    <div v-if="!fullScreenCmd" class="size-full flex flex-col" @click="focusPrompt">
      <TerminalPrompt
        v-if="!cmdEntries.length && !initialSubmit"
        :tab="tab"
        :simInput="InitialTabCmd[tab]"
      />

      <template v-else>
        <template v-for="entry in cmdEntries" :key="entry.timestamp">
          <TerminalPrompt :tab="tab" :cmdEntry="entry" />
          <SetLangOutput v-if="entry.cmdName === Command.SetLang" :entry="entry" />
          <IntroOutput v-else-if="entry.cmdName === Command.Intro" />
          <HelpOutput v-else-if="entry.cmdName === Command.Help" />
          <UnknownCmdOutput v-else-if="!entry.fullscreen" :command="entry.cmdName" />
        </template>
        <TerminalPrompt ref="mainPrompt" :tab="tab" :entries="cmdEntries" />
      </template>
    </div>
    <div v-else class="size-full flex flex-col gap-3" @click="focusKeyListener">
      <div class="flex-auto">
        <ExperienceOutput
          v-if="fullScreenCmd === Command.Experience"
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

        <div v-if="tab === Tab.MainTab" class="flex-auto text-right text-sm">
          {{ i18n.fullScreenMode }} /
          <button class="font-bold text-darkgoldenrod cursor-pointer" @click="exitFullscreen">
            [{{ i18n.exit }}]
          </button>
          {{ i18n.or }} &lt;{{ i18n.ctrlC }}&gt;
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
