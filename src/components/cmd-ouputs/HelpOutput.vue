<script setup lang="ts">
import { i18n } from '@/content/i18n'
import CmdLink from '@/components/core/CmdLink.vue'
import { Commands } from '@/shell/commands'
import { type I18nCmd } from '@/content/interfaces'
</script>

<template>
  <div v-for="cmd in Commands" :key="cmd.name" class="flex flex-col leading-5 my-2">
    <span class="text-olivedrab text-sm">- {{ i18n.cmdDesc[cmd.name].description }}</span>
    <CmdLink :cmd-info="cmd" />

    <div v-for="arg in cmd.arguments ?? []" :key="arg.name" class="flex flex-col leading-5 mt-3">
      <span class="text-olivedrab text-sm"
        >- {{ (i18n.cmdDesc[cmd.name] as I18nCmd).argsDesc?.[arg.name] }}</span
      >

      <CmdLink :cmd-info="cmd" :arg="arg" />
    </div>
  </div>
</template>
