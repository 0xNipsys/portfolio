<script setup lang="ts">
import { onMounted, ref } from 'vue'
import i18n, { currentLang } from '@/content/i18n'

const props = defineProps<{
  command?: string
  simulateTyping?: boolean
}>()

const emit = defineEmits<{
  (e: 'onsubmit', input: string): void
}>()

const inputText = ref<string>('')

onMounted(() => {
  if (props.command) {
    if (!props.simulateTyping) {
      inputText.value = props.command
      return
    }

    let i = 0

    const addChar = (cmd: string) => {
      if (!cmd || i >= cmd.length) {
        return
      }
      inputText.value += cmd.charAt(i)
      i++

      setTimeout(() => {
        addChar(cmd)
      }, 100)
    }
    addChar(props.command)
  }
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
