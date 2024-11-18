import { reactive } from 'vue'
import type { Tab } from '@/enums/tab'
import type { Command } from '@/shell/commands'

export interface ShellData {
  input?: string
  submission?: string
  fullscreenCmd?: Command
}

export const Shells = reactive<Record<Tab, ShellData>>({
  MainTab: {},
  AboutMe: {},
  Experience: {}
})
