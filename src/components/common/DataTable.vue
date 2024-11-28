<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { CurrentLang } from '@/content/i18n'
import dayjs from 'dayjs'

export interface TableColumn {
  field: string
  width: string
  header: string
  format?: (row: Record<string, any>) => string
  sortable?: boolean
}

const props = defineProps<{
  refField: string
  columns: TableColumn[]
  entries: Record<string, any>[]
  lastKeyDown: KeyboardEvent | null
  sortBy?: string
  sortDir?: 'asc' | 'desc'
}>()

const emit = defineEmits<{
  (e: 'select', entry: Record<string, any>): void
}>()

const selectedIdx = ref(0)

watch(
  () => props.lastKeyDown,
  (e: KeyboardEvent | null) => {
    switch (e?.key) {
      case 'ArrowUp':
        selectedIdx.value = selectedIdx.value <= 0 ? rows.value.length - 1 : selectedIdx.value - 1
        break
      case 'ArrowDown':
        selectedIdx.value = selectedIdx.value >= rows.value.length - 1 ? 0 : selectedIdx.value + 1
        break
      case 'Enter':
        selectEntry()
        break
    }
  }
)

function selectEntry() {
  emit('select', rows.value[selectedIdx.value])
}

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
  <div class="flex flex-col h-full">
    <div :key="CurrentLang" class="table table-fixed w-full flex-shrink-0">
      <div class="table-header-group">
        <div class="table-row">
          <div
            v-for="col in columns"
            :key="col.field"
            class="table-cell font-bold border border-darkslategray text-darkgray/80 px-2 py-1"
            :style="{ width: col.width }"
          >
            {{ col.header.toUpperCase() }}
          </div>
        </div>
      </div>
      <div class="table-row-group">
        <div
          v-for="(row, i) in rows"
          :key="row[refField]"
          class="table-row text-olivedrab cursor-pointer even:text-lightseagreen"
          :class="{ selected: i === selectedIdx }"
          @mouseover="selectedIdx = i"
          @click="selectEntry"
        >
          <div
            v-for="col in columns"
            :key="col.field"
            class="table-cell border-x border-darkslategray px-2 py-0.5"
            :style="{ width: col.width }"
          >
            {{ col.format ? col.format(row) : row[col.field] }}
          </div>
        </div>
      </div>
    </div>

    <!--  Fake table to simulate first one going all the way down  -->
    <div class="table table-fixed flex-auto">
      <div class="table-row-group">
        <div class="table-row">
          <div
            v-for="col in columns"
            :key="col.field"
            class="table-cell border border-t-0 border-darkslategray"
            :style="{ width: col.width }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-cell {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    border-left: none;
  }
}

.table-row-group {
  .table-row {
    &.selected .table-cell::before {
      position: absolute;
      content: '';
      z-index: 0;
      top: 5px;
      right: 5px;
      left: 5px;
      bottom: 5px;
      background-color: rgba(55, 143, 210, 0.5);
    }
  }
}
</style>
