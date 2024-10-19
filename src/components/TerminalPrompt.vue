<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import { i18n } from '@/content/i18n'
import { type CommandEntry, ShellInput, ShellSubmission } from '@/shell/commands'

const props = defineProps<{
  entries?: CommandEntry[]
  cmdEntry?: CommandEntry
  simInput?: string
}>()

const inputText = ref<string>('')
const inputEl = useTemplateRef<HTMLInputElement>('cmdInput')
const historyIndex = ref<number | null>(null)

defineExpose({ inputEl })

onMounted(() => {
  if (props.cmdEntry) {
    inputText.value = `${props.cmdEntry.cmdName}${props.cmdEntry.option ? ` ${props.cmdEntry.option}` : ''}${props.cmdEntry.argName ? ` ${props.cmdEntry.argName}=${props.cmdEntry.argValue}` : ''}`
  } else if (props.simInput) {
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
    addChar(props.simInput)
    inputEl.value?.focus()
  }
})

watch(ShellInput, (input) => {
  if (props.cmdEntry || props.simInput || !input) return
  inputText.value = input
  ShellInput.value = ''
})

function submit() {
  ShellSubmission.value = inputText.value
  inputText.value = ''
}

function usePreviousEntry() {
  if (!props.entries || historyIndex.value === 0) return
  historyIndex.value === null
    ? (historyIndex.value = props.entries.length - 1)
    : historyIndex.value--
  inputText.value = props.entries[historyIndex.value].cmdName
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
  inputText.value = props.entries[historyIndex.value].cmdName
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
      <span class="text-steelblue">{{ i18n.cmdLinePrefix }}</span
      >:<span class="text-steelblue">~</span>$
    </div>

    <input
      v-model="inputText"
      ref="cmdInput"
      type="text"
      spellcheck="false"
      :readonly="!!cmdEntry || !!simInput"
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
  opacity: 0.8;
}
</style>
