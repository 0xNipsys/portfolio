<script setup lang="ts">
import { type CommandArgument, type CommandInfo } from '@/shell/commands'
import { Shells } from '@/shell/shell'

const props = defineProps<{
  cmdName?: string
  cmdInfo?: CommandInfo
  arg?: CommandArgument
}>()

function submitCmd(): void {
  const cmd = props.cmdName ?? props.cmdInfo?.name ?? ''
  if (!cmd) return

  if (props.cmdInfo?.options?.length) {
    Shells.MainTab.input = `${cmd} `
    return
  }
  if (props.arg) {
    Shells.MainTab.input = `${cmd} --${props.arg.name}=`
    return
  }

  Shells.MainTab.simCmd = cmd
}
</script>

<template>
  <button class="font-bold text-darkgoldenrod cursor-pointer inline-flex" @click="submitCmd">
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
    >]
  </button>
</template>
