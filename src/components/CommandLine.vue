<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import i18n, { currentLang } from '@/content/i18n'

const props = defineProps<{
  command?: string
  simulate?: boolean
}>()

const emit = defineEmits<{
  (e: 'onsubmit', input: string): void
}>()

const inputText = ref<string>('')
const inputEl = useTemplateRef<HTMLInputElement>('cmd-input')

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
      }, 300)
    }
    addChar(props.command)
  }
  inputEl.value?.focus()
})

function submit() {
  emit('onsubmit', inputText.value)
  inputText.value = ''
}
</script>

<template>
  <div class="flex">
    <div class="mr-2 font-bold">
      <span class="text-steelblue">{{ i18n[currentLang].cmdLinePrefix }}</span
      >:<span class="text-steelblue">~</span>$
    </div>

    <input
      v-model="inputText"
      ref="cmd-input"
      type="text"
      class="appearance-none w-full"
      onblur="this.focus()"
      spellcheck="false"
      :readonly="!!command"
      autofocus
      @keyup.enter="submit"
    />
  </div>
</template>

<style lang="scss" scoped>
input {
  all: unset;
}
</style>
