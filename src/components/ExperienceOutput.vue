<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Commands, {
  Command,
  type CommandArgument,
  type CommandEntry,
  type CommandInfo
} from '@/shell/commands'
import ContentTable, { type TableColumn } from '@/components/ContentTable.vue'
import { type Position, positions } from '@/constants/positions'
import { stackWeight } from '@/constants/stack-weights'
import { formatWorkPeriod } from '@/utils/date-utils'

const props = defineProps<{
  entry: CommandEntry
}>()

const cmdInfo: CommandInfo | undefined = Commands.find((cmd) => cmd.name === Command.Experience)
const passedArg = ref<CommandArgument | null>(null)
const isArgValid = ref(false)

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

onMounted(() => {
  if (!props.entry.argName) return

  cmdInfo?.arguments?.forEach((arg: CommandArgument): void => {
    if (arg.name === props.entry.argName) {
      passedArg.value = arg

      if (arg.options?.includes(`${props.entry.argValue}`)) {
        isArgValid.value = true
      }
    }
  })
})
</script>

<template>
  <div v-if="entry.argName && !isArgValid" class="text-firebrick">
    <span v-if="passedArg"
      >Unrecognized argument value. Accepted values: {{ passedArg.options?.join(', ') }}</span
    >
    <span v-else
      >Unrecognized argument: {{ entry.argName }}. Accepted arguments:
      {{ cmdInfo?.arguments?.map((arg) => arg.name).join(', ') }}</span
    >
  </div>
  <ContentTable
    ref-field="id"
    :columns="tableColumns"
    :entries="positions"
    sort-by="id"
    sort-dir="desc"
    v-else
  />
</template>
