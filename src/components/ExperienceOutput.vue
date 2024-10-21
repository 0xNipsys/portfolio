<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Commands, {
  Command,
  type CommandArgument,
  type CommandEntry,
  type CommandInfo
} from '@/shell/commands'
import ContentTable from '@/components/ContentTable.vue'
import { type Position, positions } from '@/content/positions'

const props = defineProps<{
  entry: CommandEntry
}>()

const cmdInfo: CommandInfo | undefined = Commands.find((cmd) => cmd.name === Command.Experience)
const passedArg = ref<CommandArgument | null>(null)
const isArgValid = ref(false)

const tableColumnFields: (keyof Position)[] = ['id', 'company', 'role', 'type', 'techs', 'period']

const tableFormat = (field: string, obj: Record<string, any>): string => {
  const position = obj as Position
  const key = field as keyof Position
  const val = position[key]

  switch (key) {
    case 'techs':
      return ''
    case 'period':
      return ''
    default:
      return `${val}`
  }
}

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
    :fields="tableColumnFields"
    :format="tableFormat"
    :entries="positions"
    v-else
  />
</template>
