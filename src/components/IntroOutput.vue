<script setup lang="ts">
import { onMounted, ref } from 'vue'
import figlet from 'figlet'
import standard from 'figlet/importable-fonts/Standard.js'
import Name from '@/content/name'
import i18n, { CurrentLang } from '../content/i18n'
import { Command } from '@/shell/commands'
import CmdLink from '@/components/CmdLink.vue'

const figletText = ref('')

onMounted(() => {
  figlet.parseFont('Standard', standard)
  figlet.text(
    Name,
    {
      font: 'Standard'
    },
    (_, data) => (figletText.value = data ?? '')
  )
})
</script>

<template>
  <div class="font-mono text-xs leading-none whitespace-break-spaces">
    {{ figletText }}
  </div>

  <p>{{ i18n[CurrentLang].outputs.intro.welcome }}</p>

  <p>
    {{ i18n[CurrentLang].outputs.intro.iam }}
    <span class="text-lightseagreen font-bold">{{ Name }}</span
    >{{ i18n[CurrentLang].outputs.intro.workTitle }}
  </p>
  <p class="leading-5 my-3">
    {{ i18n[CurrentLang].outputs.intro.tabBrowsing }}<br />{{
      i18n[CurrentLang].outputs.intro.cmdBrowsing
    }}&nbsp;<CmdLink :cmd-name="Command.Help" />.
  </p>
</template>

<style scoped lang="scss">
p {
}
</style>
