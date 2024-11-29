<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
import type { TableColumn } from '@/components/pure/DataTable.vue'

const props = defineProps<{
  columns: TableColumn[]
  data: Record<string, any>
  selected: boolean
}>()

const rowEl = useTemplateRef<HTMLDivElement>('rowEl')

watch(
  () => props.selected,
  () => {
    // scrolling row into view only if it wasn't selected by hovering over it
    if (props.selected && !rowEl.value?.matches(':hover')) {
      rowEl.value?.scrollIntoView()
    }
  }
)
</script>

<template>
  <div
    ref="rowEl"
    class="table-row text-olivedrab cursor-pointer even:text-lightseagreen"
    :class="{ selected }"
  >
    <div
      v-for="col in columns"
      :key="col.field"
      class="table-cell border-x border-darkslategray px-2 py-0.5"
      :style="{ width: col.width }"
    >
      {{ col.format ? col.format(data) : data[col.field] }}
    </div>
  </div>
</template>
