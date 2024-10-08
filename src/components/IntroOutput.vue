<script setup lang="ts">
import { onMounted, ref } from 'vue'
import figlet from 'figlet'
import standard from 'figlet/importable-fonts/Standard.js'

const name = 'Xavier Saliniere'
const figletText = ref('')

onMounted(() => {
  figlet.parseFont('Standard', standard)
  figlet.text(
    name,
    {
      font: 'Standard'
    },
    (_, data) => (figletText.value = data ?? '')
  )
})
</script>

<template>
  <div class="font-mono text-xs leading-none whitespace-break-spaces">
    {{ figletText }}
  </div>

  <p>Welcome to my terminal-inspired Portfolio!</p>

  <p>
    I'm <span class="text-lightseagreen font-bold">{{ name }}</span
    >, a senior Web app developer.
  </p>
  <p class="leading-5 my-3">
    This porfolio app can be browsed by clicking on the tabs above.<br />Or, for the full command
    line experience, get started by typing <span class="text-olivedrab font-bold">help</span>.
  </p>
</template>

<style scoped lang="scss">
p {
}
</style>
