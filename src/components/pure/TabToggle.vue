<script setup lang="ts">
import type { Tab } from '@/enums/tab'
import { i18n } from '@/content/i18n'

defineProps<{
  tab: Tab
  active?: boolean
}>()
</script>

<template>
  <div
    class="flex items-center text-xs px-2 sm:text-sm sm:px-3 lg:text-md lg:px-5 rounded-t-md lowercase transition-colors bg-darkerslategray"
    :class="{ 'cursor-default': active, 'bg-darkslategray cursor-pointer': !active }"
  >
    {{ i18n.tabTitles[tab] }}
  </div>
</template>
