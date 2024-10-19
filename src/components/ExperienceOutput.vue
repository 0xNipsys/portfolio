<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Commands, {
  Command,
  type CommandArgument,
  type CommandEntry,
  type CommandInfo
} from '@/shell/commands'

const props = defineProps<{
  entry: CommandEntry
}>()

const cmdInfo: CommandInfo | undefined = Commands.find((cmd) => cmd.name === Command.Experience)
const passedArg = ref<CommandArgument | null>(null)
const isArgValid = ref(false)

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
  <span v-else> todo </span>
</template>
