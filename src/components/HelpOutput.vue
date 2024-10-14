<script setup lang="ts">
import Commands from '@/shell/commands'
import i18n, { CurrentLang, type I18nCmd } from '../content/i18n'
import CmdLink from '@/components/CmdLink.vue'
</script>

<template>
  <div v-for="cmd in Commands" :key="cmd.name" class="flex flex-col leading-5 my-3">
    <span class="text-olivedrab">- {{ i18n[CurrentLang].cmdDesc[cmd.name].description }}</span>
    <CmdLink :cmd-info="cmd" />

    <div v-for="arg in cmd.arguments ?? []" :key="arg.name" class="flex flex-col leading-5 mt-3">
      <span class="text-olivedrab"
        >- {{ (i18n[CurrentLang].cmdDesc[cmd.name] as I18nCmd).argsDesc?.[arg.name] }}</span
      >

      <CmdLink :cmd-info="cmd" :arg="arg" />
    </div>
  </div>
</template>
