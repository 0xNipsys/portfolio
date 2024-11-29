<script setup lang="ts">
import type { Position } from '@/constants/positions'
import { formatStack, formatWorkPeriod } from '@/utils/position-formatting'
import { useTemplateRef, watch } from 'vue'

const props = defineProps<{
  entry: Position
  selected: boolean
}>()

const cardEl = useTemplateRef<HTMLDivElement>('cardEl')

watch(
  () => props.selected,
  () => {
    // scrolling card into view only if it wasn't selected by hovering over it
    if (props.selected && !cardEl.value?.matches(':hover')) {
      cardEl.value?.scrollIntoView()
    }
  }
)
</script>

<template>
  <div
    ref="cardEl"
    :class="`border ${selected ? 'border-steelblue' : 'border-darkslategray'} overflow-hidden text-sm cursor-pointer`"
  >
    <div
      class="flex bg-darkslategray px-2 pt-1"
      :class="{ 'bg-steelblue': selected, 'text-steelblue': !selected }"
    >
      <div class="flex-auto">
        <span class="text-xs">company</span>
        <div class="font-bold text-darkgray">{{ entry.company }}</div>
      </div>
      <div class="flex-auto text-right">
        <span class="text-xs">role</span>
        <div class="text-darkgray">{{ entry.role }}</div>
      </div>
    </div>

    <div class="px-2 pb-1">
      <div>
        <span class="text-xs text-steelblue">stack</span>
        <div class="overflow-hidden text-ellipsis text-nowrap text-darkgray">
          <span
            v-for="(e, i) in formatStack(entry).split('/')"
            :key="e"
            :class="i === 0 ? 'text-olivedrab font-bold' : 'text-darkgray'"
            ><template v-if="i > 0">/</template>{{ e }}</span
          >
        </div>
      </div>

      <div class="flex">
        <div class="flex-auto">
          <span class="text-xs text-steelblue">contract type</span>
          <div>{{ entry.type }}</div>
        </div>
        <div class="flex-auto text-right">
          <span class="text-xs text-steelblue">period</span>
          <div>{{ formatWorkPeriod(entry) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
