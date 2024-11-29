<script setup lang="ts">
import TerminalPrompt from '@/components/core/TerminalPrompt.vue'
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'
import { Command } from '@/shell/commands'
import IntroOutput from '@/components/cmd-ouputs/IntroOutput.vue'
import UnknownCmdOutput from '@/components/cmd-ouputs/UnknownCmdOutput.vue'
import HelpOutput from '@/components/cmd-ouputs/HelpOutput.vue'
import SetLangOutput from '@/components/cmd-ouputs/SetLangOutput.vue'
import parseEntry from '@/shell/entry-parsing'
import ExperienceOutput from '@/components/cmd-ouputs/ExperienceOutput.vue'
import { i18n } from '@/content/i18n'
import { InitialTabCmd, Tab } from '@/enums/tab'
import { Shells } from '@/shell/shell'

const props = defineProps<{
  tab: Tab
}>()

const mainPrompt = useTemplateRef<typeof TerminalPrompt>('mainPrompt')
const fsKeyListener = useTemplateRef<HTMLButtonElement>('fsKeyListener')
const lastKeyDown = ref<KeyboardEvent | null>(null)
const ready = ref(false)

const fullScreenCmd = computed(() => Shells[props.tab].fullscreenCmd)

onMounted(() => {
  setTimeout(() => {
    focusPrompt()
    ready.value = true
    if (!Shells[props.tab].history?.length) {
      mainPrompt.value?.simulate(InitialTabCmd[props.tab])
    }
  }, 50)
})

watch(
  () => Shells[props.tab].submission,
  (submission) => {
    if (!submission) return
    Shells[props.tab].submission = ''

    if (submission === 'clear') {
      Shells[props.tab].history = []
      return
    }

    const cmdEntry = parseEntry(submission)
    Shells[props.tab].history = [...(Shells[props.tab].history ?? []), cmdEntry]

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

watch(
  () => Shells[props.tab].simCmd,
  () => {
    if (!Shells[props.tab].simCmd) return
    mainPrompt.value?.simulate(Shells[props.tab].simCmd!)
    Shells[props.tab].simCmd = ''
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
  <div
    class="bg-darkerslategray size-full overflow-y-scroll select-none text-sm sm:text-base"
    :class="{ 'opacity-0': !ready }"
  >
    <div v-if="!fullScreenCmd" class="size-full flex flex-col" @click="focusPrompt">
      <template v-for="entry in Shells[props.tab].history" :key="entry.timestamp">
        <TerminalPrompt :tab="tab" :cmdEntry="entry" />
        <SetLangOutput v-if="entry.cmdName === Command.SetLang" :entry="entry" />
        <IntroOutput v-else-if="entry.cmdName === Command.Intro" />
        <HelpOutput v-else-if="entry.cmdName === Command.Help" />
        <UnknownCmdOutput v-else-if="!entry.fullscreen" :command="entry.cmdName" />
      </template>
      <TerminalPrompt ref="mainPrompt" :tab="tab" :entries="Shells[props.tab].history" />
    </div>
    <div v-else class="size-full flex flex-col gap-3" @click="focusKeyListener">
      <div class="flex-auto overflow-hidden">
        <ExperienceOutput
          v-if="fullScreenCmd === Command.Experience"
          :last-key-down="lastKeyDown"
        />
      </div>

      <button
        ref="fsKeyListener"
        class="opacity-0 fixed bottom-0"
        @keydown.exact="lastKeyDown = $event"
        @keydown.esc.exact="exitFullscreen"
        autofocus
        onblur="this.focus()"
      />

      <div v-if="tab === Tab.MainTab" class="flex text-steelblue">
        <div class="flex-auto flex items-center justify-end text-sm">
          {{ i18n.fullScreenMode }} /&nbsp;
          <button
            class="font-bold text-darkgoldenrod cursor-pointer text-base"
            @click="exitFullscreen"
          >
            [{{ i18n.exit }}]
          </button>
          &nbsp;{{ i18n.or }} &lt;{{ i18n.escape }}&gt;
        </div>
      </div>
    </div>
  </div>
</template>
