<script setup lang="ts">
import type { Tab } from '@/enums/tab'
import i18n, { currentLang } from '../content/i18n'

defineProps<{
  tab: Tab
  active?: boolean
}>()
</script>

<template>
  <div
    :class="`flex items-center px-5 rounded-t-md lowercase transition-colors ${active ? 'bg-darkslategray cursor-default' : 'bg-darkslategray/70 cursor-pointer'}`"
  >
    {{ i18n[currentLang].tabTitles[tab] }}
  </div>
</template>
