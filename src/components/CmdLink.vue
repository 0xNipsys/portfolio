<script setup lang="ts">
import {
  type CommandArgument,
  type CommandInfo,
  ShellInput,
  ShellSubmission
} from '@/shell/commands'

const props = defineProps<{
  cmdName?: string
  cmdInfo?: CommandInfo
  arg?: CommandArgument
}>()

function submitCmd(): void {
  const cmd = props.cmdName ?? props.cmdInfo?.name ?? ''
  if (!cmd) return
  ShellInput.value = ''

  if (props.cmdInfo?.options?.length) {
    ShellInput.value = `${cmd} `
    return
  }
  if (props.arg) {
    ShellInput.value = `${cmd} --${props.arg.name}=`
    return
  }

  ShellSubmission.value = cmd
}
</script>

<template>
  <span class="font-bold text-darkgoldenrod cursor-pointer" @click="submitCmd">
    <span>[{{ cmdName ?? cmdInfo?.name }}</span>
    <template v-if="cmdInfo">
      <template v-if="arg && arg.options">
        --{{ arg.name }}=<span class="text-darkgray"
          >{{ arg.options.slice(0, 6).join('|')
          }}<template v-if="arg.options.length > 6">|...</template></span
        >
      </template>
      <span v-else-if="cmdInfo.options" class="text-darkgray"
        >&nbsp;{{ cmdInfo.options.join('|') }}</span
      ></template
    >]</span
  >
</template>
