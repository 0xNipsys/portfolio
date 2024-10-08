<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import i18n, { currentLang } from '@/content/i18n'
import type { CommandEntry } from '@/shell/commands'

const props = defineProps<{
  entries?: CommandEntry[]
  command?: string
  simulate?: boolean
}>()

const emit = defineEmits<{
  (e: 'onsubmit', input: string): void
}>()

const inputText = ref<string>('')
const inputEl = useTemplateRef<HTMLInputElement>('cmdInput')
const historyIndex = ref<number | null>(null)

defineExpose({ inputEl })

onMounted(() => {
  if (props.command) {
    if (!props.simulate) {
      inputText.value = props.command
      return
    }

    let i = 0

    const addChar = (cmd: string) => {
      if (!cmd || i >= cmd.length) {
        submit()
        return
      }
      inputText.value += cmd.charAt(i)
      i++

      setTimeout(() => {
        addChar(cmd)
      }, 150)
    }
    addChar(props.command)
  }
  inputEl.value?.focus()
})

function submit() {
  emit('onsubmit', inputText.value)
  inputText.value = ''
}

function usePreviousEntry() {
  if (!props.entries || historyIndex.value === 0) return
  historyIndex.value === null
    ? (historyIndex.value = props.entries.length - 1)
    : historyIndex.value--
  inputText.value = props.entries[historyIndex.value].name
  updateCursorPosition()
}

function useNextEntry() {
  if (!props.entries || historyIndex.value === null) return

  if (historyIndex.value === props.entries.length - 1) {
    historyIndex.value = null
    inputText.value = ''
    return
  }

  historyIndex.value++
  inputText.value = props.entries[historyIndex.value].name
  updateCursorPosition()
}

function updateCursorPosition() {
  setTimeout(() => {
    if (inputEl.value) {
      inputEl.value.setSelectionRange(inputText.value.length, inputText.value.length)
    }
  }, 100)
}
</script>

<template>
  <div class="flex w-full">
    <div class="mr-2 font-bold">
      <span class="text-steelblue">{{ i18n[currentLang].cmdLinePrefix }}</span
      >:<span class="text-steelblue">~</span>$
    </div>

    <input
      v-model="inputText"
      ref="cmdInput"
      type="text"
      onblur="this.focus()"
      spellcheck="false"
      :readonly="!!command"
      @keydown.enter="submit"
      @keydown.up="usePreviousEntry"
      @keydown.down="useNextEntry"
      @beforeinput="historyIndex = null"
    />
  </div>
</template>

<style lang="scss" scoped>
input {
  all: unset;
  flex: 1 0 auto;
}
</style>
