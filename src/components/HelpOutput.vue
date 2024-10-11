<script setup lang="ts">
import Commands, { type CommandArgument } from '@/shell/commands'
import i18n, { CurrentLang, type I18nCmd } from '../content/i18n'

function getArgOptionFormat(arg: CommandArgument): string {
  return arg.format ?? arg.options?.join('|') ?? ''
}
</script>

<template>
  <div v-for="cmd in Commands" :key="cmd.name" class="flex flex-col leading-5 my-3">
    <span class="text-olivedrab">- {{ i18n[CurrentLang].cmdDesc[cmd.name].description }}</span>
    <span class="font-bold text-darkgoldenrod"
      >[{{ cmd.name
      }}<span v-if="cmd.options" class="text-darkgray">&nbsp;{{ cmd.options.join('|') }}</span
      >]</span
    >

    <div v-for="arg in cmd.arguments ?? []" :key="arg.name" class="flex flex-col leading-5 mt-3">
      <span class="text-olivedrab"
        >- {{ (i18n[CurrentLang].cmdDesc[cmd.name] as I18nCmd).argsDesc?.[arg.name] }}</span
      >
      <span class="font-bold text-darkgoldenrod"
        >[{{ cmd.name }} --{{ arg.name }}=<span class="text-darkgray">{{
          getArgOptionFormat(arg)
        }}</span
        >]</span
      >
    </div>
  </div>
</template>
