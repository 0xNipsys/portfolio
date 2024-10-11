<script setup lang="ts">
import i18n, { CurrentLang } from '../content/i18n'

defineProps<{
  command: string
}>()
</script>

<template>
  <span class="text-firebrick"
    >{{ i18n[CurrentLang].outputs.unknownCmd.error }}: {{ command }}</span
  >
</template>

<style scoped lang="scss"></style>
