<script setup lang="ts">
import { i18n } from '@/content/i18n'

defineProps<{
  command: string
}>()
</script>

<template>
  <span class="text-firebrick">{{ i18n.unknownCmdErr }}: {{ command }}</span>
</template>

<style scoped lang="scss"></style>
