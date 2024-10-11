<script setup lang="ts">
import type { Tab } from '@/enums/tab'
import i18n, { CurrentLang } from '../content/i18n'

defineProps<{
  tab: Tab
  active?: boolean
}>()
</script>

<template>
  <div
    :class="`flex items-center px-5 rounded-t-md lowercase transition-colors bg-darkerslategray ${active ? 'cursor-default' : 'bg-darkslategray text cursor-pointer'}`"
  >
    {{ i18n[CurrentLang].tabTitles[tab] }}
  </div>
</template>
