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

function getArgOptionFormat(arg: CommandArgument): string {
  return arg.format ?? arg.options?.join('|') ?? ''
}

function submitCmd(): void {
  const cmd = props.cmdName ?? props.cmdInfo?.name ?? ''
  if (!cmd) return
  ShellInput.value = ''

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
      <template v-if="arg">
        --{{ arg.name }}=<span class="text-darkgray">{{ getArgOptionFormat(arg) }}</span>
      </template>
      <span v-else-if="cmdInfo.options" class="text-darkgray"
        >&nbsp;{{ cmdInfo.options.join('|') }}</span
      ></template
    >]</span
  >
</template>

<style scoped lang="scss"></style>
