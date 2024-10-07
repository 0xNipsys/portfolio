<script setup lang="ts">
import { onMounted, ref } from 'vue'
import figlet from 'figlet'
import standard from 'figlet/importable-fonts/Standard.js'

const figletText = ref('')

onMounted(() => {
  figlet.parseFont('Standard', standard)
  figlet.text(
    'Xavier Saliniere',
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
</template>

<style scoped lang="scss"></style>
