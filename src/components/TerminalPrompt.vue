<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import i18n, { CurrentLang } from '@/content/i18n'
import { type CommandEntry, ShellInput, ShellSubmission } from '@/shell/commands'

const props = defineProps<{
  entries?: CommandEntry[]
  cmdInput?: string
  simulate?: boolean
}>()

const inputText = ref<string>('')
const inputEl = useTemplateRef<HTMLInputElement>('cmdInput')
const historyIndex = ref<number | null>(null)

defineExpose({ inputEl })

onMounted(() => {
  if (props.cmdInput) {
    if (!props.simulate) {
      inputText.value = props.cmdInput
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
    addChar(props.cmdInput)
  }
  inputEl.value?.focus()
})

watch(ShellInput, (input) => {
  if (props.cmdInput || !input) return
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
      <span class="text-steelblue">{{ i18n[CurrentLang].cmdLinePrefix }}</span
      >:<span class="text-steelblue">~</span>$
    </div>

    <input
      v-model="inputText"
      ref="cmdInput"
      type="text"
      spellcheck="false"
      :readonly="!!cmdInput"
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
