import { Lang } from '@/enums/lang'
import enTabTitles from '@/content/en/tab-titles'
import frTabTitles from '@/content/fr/tab-titles'
import enIntro from '@/content/en/intro-output'
import frIntro from '@/content/fr/intro-output'
import enUnknownCmd from '@/content/en/unknown-cmd-output'
import frUnknownCmd from '@/content/fr/unknown-cmd-output'
import { ref } from 'vue'
import { Tab } from '@/enums/tab'
import { Command } from '@/shell/commands'

interface i18nContent {
  cmdLinePrefix: string
  outputs: Record<Command & 'unknownCmd', Record<string, string>>
  tabTitles: Record<Tab, string>
}

export const CurrentLang = ref(Lang.EN)

export default {
  [Lang.EN]: {
    cmdLinePrefix: 'visitor@portfolio',
    outputs: {
      [Command.Intro]: enIntro,
      unknownCmd: enUnknownCmd
    },
    tabTitles: enTabTitles
  },
  [Lang.FR]: {
    cmdLinePrefix: 'visiteur@portfolio',
    outputs: {
      [Command.Intro]: frIntro,
      unknownCmd: frUnknownCmd
    },
    tabTitles: frTabTitles
  }
} satisfies Record<Lang, i18nContent>
