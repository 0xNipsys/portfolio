import { Lang } from '@/enums/lang'
import { computed, ref } from 'vue'
import { Tab } from '@/enums/tab'
import { Command } from '@/shell/commands'
import enSetLang from '@/content/en/setLang-output'
import frSetLang from '@/content/fr/setLang-output'
import enIntro from '@/content/en/intro-output'
import frIntro from '@/content/fr/intro-output'
import enCmdDesc from '@/content/en/cmd-desc'
import frCmdDesc from '@/content/fr/cmd-desc'
import enTabTitles from '@/content/en/tab-titles'
import frTabTitles from '@/content/fr/tab-titles'

export interface I18nContent {
  cmdLinePrefix: string
  cmdOut: Record<Command, Record<string, string>>
  cmdDesc: Record<Command, I18nCmd>
  unknownCmdErr: string
  tabTitles: Record<Tab, string>
}

export interface I18nCmd {
  description: string
  argsDesc?: Record<string, string>
}

export const CurrentLang = ref(Lang.EN)

const content: Record<Lang, I18nContent> = {
  [Lang.EN]: {
    cmdLinePrefix: 'visitor@portfolio',
    cmdOut: {
      [Command.AboutMe]: {},
      [Command.Experience]: {},
      [Command.ProProjects]: {},
      [Command.PersoProjects]: {},
      [Command.SetLang]: enSetLang,
      [Command.Intro]: enIntro,
      [Command.Help]: {},
      [Command.Clear]: {}
    },
    cmdDesc: enCmdDesc,
    unknownCmdErr: 'command not recognized',
    tabTitles: enTabTitles
  },
  [Lang.FR]: {
    cmdLinePrefix: 'visiteur@portfolio',
    cmdOut: {
      [Command.AboutMe]: {},
      [Command.Experience]: {},
      [Command.ProProjects]: {},
      [Command.PersoProjects]: {},
      [Command.SetLang]: frSetLang,
      [Command.Intro]: frIntro,
      [Command.Help]: {},
      [Command.Clear]: {}
    },
    cmdDesc: frCmdDesc,
    unknownCmdErr: 'commande non reconnue',
    tabTitles: frTabTitles
  }
}

export const i18n = computed(() => content[CurrentLang.value])
