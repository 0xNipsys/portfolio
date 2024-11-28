<script setup lang="ts">
import { onMounted, ref } from 'vue'
import figlet from 'figlet'
import standard from 'figlet/importable-fonts/Standard.js'
import { i18n } from '@/content/i18n'
import { Command } from '@/shell/commands'
import CmdLink from '@/components/CmdLink.vue'
import { Name } from '@/constants/base'

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
  <div class="hidden md:block font-mono text-xs leading-none whitespace-break-spaces">
    {{ figletText }}
  </div>

  <p>{{ i18n.cmdOut.intro.welcome }}</p>

  <p>
    {{ i18n.cmdOut.intro.iam }}
    <span class="text-lightseagreen font-bold">{{ Name }}</span
    >{{ i18n.cmdOut.intro.workTitle }}
  </p>
  <p class="leading-5 my-3">
    {{ i18n.cmdOut.intro.tabBrowsing }}<br />{{ i18n.cmdOut.intro.cmdBrowsing }}&nbsp;<CmdLink
      :cmd-name="Command.Help"
    /><span class="text-xs">&nbsp;{{ i18n.cmdOut.intro.clickable }}</span
    >.
  </p>
</template>
