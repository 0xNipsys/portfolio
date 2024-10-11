import { Lang } from '@/enums/lang'
import enTabTitles from '@/content/en/tab-titles'
import frTabTitles from '@/content/fr/tab-titles'
import enIntro from '@/content/en/intro-output'
import frIntro from '@/content/fr/intro-output'
import enUnknownCmd from '@/content/en/unknown-cmd-output'
import frUnknownCmd from '@/content/fr/unknown-cmd-output'
import enCmdDesc from '@/content/en/cmd-desc'
import frCmdDesc from '@/content/fr/cmd-desc'
import { ref } from 'vue'
import { Tab } from '@/enums/tab'
import { Command } from '@/shell/commands'

export interface I18nContent {
  cmdLinePrefix: string
  outputs: Record<Command & 'unknownCmd', Record<string, string>>
  cmdDesc: Record<Command, I18nCmd>
  tabTitles: Record<Tab, string>
}

export interface I18nCmd {
  description: string
  argsDesc?: Record<string, string>
}

export const CurrentLang = ref(Lang.EN)

export default {
  [Lang.EN]: {
    cmdLinePrefix: 'visitor@portfolio',
    outputs: {
      [Command.Intro]: enIntro,
      unknownCmd: enUnknownCmd
    },
    cmdDesc: enCmdDesc,
    tabTitles: enTabTitles
  },
  [Lang.FR]: {
    cmdLinePrefix: 'visiteur@portfolio',
    outputs: {
      [Command.Intro]: frIntro,
      unknownCmd: frUnknownCmd
    },
    cmdDesc: frCmdDesc,
    tabTitles: frTabTitles
  }
} satisfies Record<Lang, I18nContent>
