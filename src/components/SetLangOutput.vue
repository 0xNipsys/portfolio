<script setup lang="ts">
import { CurrentLang, i18n } from '@/content/i18n'
import { onMounted, ref } from 'vue'
import Commands, { Command, type CommandEntry, type CommandInfo } from '@/shell/commands'
import { Lang } from '@/enums/lang'

const props = defineProps<{
  entry: CommandEntry
}>()

const cmdInfo: CommandInfo | undefined = Commands.find((cmd) => cmd.name === Command.SetLang)
const changedToLang = ref('')

onMounted(() => {
  if (cmdInfo?.options?.includes(props.entry.option ?? '')) {
    CurrentLang.value = props.entry.option?.toUpperCase() as Lang
    changedToLang.value = CurrentLang.value.toLowerCase()
  }
})
</script>

<template>
  <span v-if="!!changedToLang"
    >{{ i18n.cmdOut['set-lang'].changed }}{{ i18n.cmdOut['set-lang'][changedToLang] }}</span
  >
  <span v-else class="text-firebrick"
    >Unrecognized or missing language. Expecting: {{ cmdInfo?.options?.join(', ') }}</span
  >
</template>

<style scoped lang="scss"></style>
