import { Lang } from '@/enums/lang'
import { computed, ref, watch } from 'vue'
import { Command } from '@/shell/commands'
import enSetLang from '@/content/en/setLang-output'
import frSetLang from '@/content/fr/setLang-output'
import enIntro from '@/content/en/intro-output'
import frIntro from '@/content/fr/intro-output'
import enCmdDesc from '@/content/en/cmd-desc'
import frCmdDesc from '@/content/fr/cmd-desc'
import enTabTitles from '@/content/en/tab-titles'
import frTabTitles from '@/content/fr/tab-titles'
import enExperience from '@/content/en/experience'
import frExperience from '@/content/fr/experience'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import 'dayjs/locale/en'
import type { I18nContent } from '@/content/interfaces'

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
    experience: enExperience,
    tabTitles: enTabTitles,
    na: 'N/A',
    back: 'back',
    backspace: 'BACKSPACE',
    escape: 'ESC',
    or: 'or',
    exit: 'exit',
    fullScreenMode: 'full-screen mode',
    present: 'Present',
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
    experience: frExperience,
    tabTitles: frTabTitles,
    na: 'N/A',
    back: 'retour',
    backspace: 'BACKSPACE',
    escape: 'ESC',
    or: 'ou',
    exit: 'quitter',
    fullScreenMode: 'mode plein écran',
    present: "Aujourd'hui",
    unknownCmdErr: 'commande non reconnue'
  }
}

export const i18n = computed(() => content[CurrentLang.value])
