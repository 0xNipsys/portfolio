import { reactive } from 'vue'
import type { Tab } from '@/enums/tab'
import type { Command, CommandEntry } from '@/shell/commands'

export interface ShellData {
  input?: string
  submission?: string
  simCmd?: string
  fullscreenCmd?: Command
  history?: CommandEntry[]
}

export const Shells = reactive<Record<Tab, ShellData>>({
  MainTab: {},
  AboutMe: {},
  Experience: {}
})
