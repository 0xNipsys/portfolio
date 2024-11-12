import { Lang } from '@/enums/lang'
import { computed, ref, watch } from 'vue'
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
import enPositions from '@/content/en/positions'
import frPositions from '@/content/fr/positions'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import 'dayjs/locale/en'

export interface I18nContent {
  cmdDesc: Record<Command, I18nCmd>
  cmdLinePrefix: string
  cmdOut: Record<Command, Record<string, string>>
  tabTitles: Record<Tab, string>
  positions: Record<number, I18nPosition>
  present: string
  unknownCmdErr: string
}

export interface I18nCmd {
  description: string
  argsDesc?: Record<string, string>
}

export interface I18nPosition {
  description: string
  beAccomplishments: string[]
  feAccomplishments: string[]
}

export interface I18nCompany {
  mission: string
}

export const CurrentLang = ref(Lang.EN)
watch(
  CurrentLang,
  () => {
    switch (CurrentLang.value) {
      case Lang.FR:
        dayjs.locale('fr')
        break
      case Lang.EN:
        dayjs.locale('en')
        break
    }
  },
  { immediate: true }
)

const content: Record<Lang, I18nContent> = {
  [Lang.EN]: {
    cmdDesc: enCmdDesc,
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
    positions: enPositions,
    present: 'Present',
    tabTitles: enTabTitles,
    unknownCmdErr: 'command not recognized'
  },
  [Lang.FR]: {
    cmdDesc: frCmdDesc,
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
    positions: frPositions,
    present: "Aujourd'hui",
    tabTitles: frTabTitles,
    unknownCmdErr: 'commande non reconnue'
  }
}

export const i18n = computed(() => content[CurrentLang.value])
