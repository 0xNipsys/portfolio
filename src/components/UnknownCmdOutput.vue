<script setup lang="ts">
import i18n, { currentLang } from '../content/i18n'

defineProps<{
  command: string
}>()
</script>

<template>
  <span class="text-firebrick"
    >{{ i18n[currentLang].outputs.unknownCmd.error }}: {{ command }}</span
  >
</template>

<style scoped lang="scss"></style>
