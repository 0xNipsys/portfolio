<script setup lang="ts">
import TermTable, { type TableColumn } from '@/components/TermTable.vue'
import { type Position, positions } from '@/constants/positions'
import { stackWeight } from '@/constants/stack-weights'
import { formatWorkPeriod } from '@/utils/date-utils'
import { ref } from 'vue'

defineProps<{
  lastKeyDown: KeyboardEvent | null
}>()

const selected = ref<Position | null>(null)

const tableColumns: TableColumn[] = [
  {
    field: 'id',
    width: '5rem',
    customHeader: '#',
    sortable: true
  },
  {
    field: 'company',
    width: '15rem',
    format: (row: any) => {
      const pos = row as Position
      return pos.clientCompany ? `${pos.clientCompany} (${pos.company} contract)` : `${pos.company}`
    },
    sortable: true
  },
  {
    field: 'role',
    width: '10rem',
    sortable: true
  },
  {
    field: 'type',
    width: '10rem',
    sortable: true
  },
  {
    field: 'stack',
    width: '25rem',
    format: (row: any) => {
      const pos = row as Position
      return pos.stack.sort((a, b) => stackWeight[b] - stackWeight[a]).join('/')
    },
    sortable: false
  },
  {
    field: 'period',
    width: '15rem',
    format: (row: any) => {
      const pos = row as Position
      return formatWorkPeriod(pos.period)
    },
    sortable: true
  }
]
</script>

<template>
  <TermTable
    ref-field="id"
    :columns="tableColumns"
    :entries="positions"
    :last-key-down="lastKeyDown"
    @select="selected = $event as Position"
    sort-by="id"
    sort-dir="desc"
  />
  {{ selected?.company }}
</template>
