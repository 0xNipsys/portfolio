<script setup lang="ts">
import { computed } from 'vue'
import { CurrentLang } from '@/content/i18n'
import dayjs from 'dayjs'

export interface TableColumn {
  field: string
  width: string
  customHeader?: string
  format?: (row: Record<string, any>) => string
  sortable?: boolean
}

const props = defineProps<{
  refField: string
  columns: TableColumn[]
  entries: Record<string, any>[]
  sortBy?: string
  sortDir?: 'asc' | 'desc'
}>()

const rows = computed(() => {
  if (!props.sortBy || !props.sortDir) return props.entries
  const sortBy = props.sortBy
  const sortDir = props.sortDir

  return [...props.entries].sort((a, b) => {
    if (props.columns.find((col) => col.field === sortBy)?.sortable) {
      if (
        typeof a[sortBy] != 'string' &&
        !isNaN(a[sortBy]) &&
        typeof b[sortBy] != 'string' &&
        !isNaN(b[sortBy])
      ) {
        return sortDir === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
      }
      if (typeof a[sortBy] == 'string' && typeof b[sortBy] == 'string') {
        return sortDir === 'asc'
          ? (a[sortBy] as string).localeCompare(b[sortBy])
          : (b[sortBy] as string).localeCompare(a[sortBy])
      }
      if (
        Array.isArray(a[sortBy]) &&
        Array.isArray(b[sortBy]) &&
        dayjs(a[sortBy][0]).isValid() &&
        dayjs(b[sortBy][0]).isValid()
      ) {
        return sortDir === 'asc'
          ? dayjs(a[sortBy][0]).unix() - dayjs(b[sortBy][0]).unix()
          : dayjs(b[sortBy][0]).unix() - dayjs(a[sortBy][0]).unix()
      }
    }
    return 1
  })
})
</script>

<template>
  <div :key="CurrentLang" class="table table-fixed w-fit">
    <div class="table-header-group">
      <div class="table-row">
        <div
          v-for="col in columns"
          :key="col.field"
          class="table-cell font-bold border border-b-0 border-darkgray/30 px-2 py-1"
          :style="{ width: col.width }"
        >
          {{ col.customHeader ?? col.field.toUpperCase() }}
        </div>
      </div>
    </div>
    <div class="table-row-group">
      <div v-for="row in rows" :key="row[refField]" class="table-row">
        <div
          v-for="col in columns"
          :key="col.field"
          class="table-cell border border-darkgray/30 px-2 py-0.5"
          :style="{ width: col.width }"
        >
          {{ col.format ? col.format(row) : row[col.field] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-cell {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    border-left: none;
  }
}

.table-row:not(:last-child) .table-cell {
  border-bottom: none;
}
</style>
