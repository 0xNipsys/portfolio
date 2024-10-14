import { Command } from '@/shell/commands'
import type { I18nCmd } from '@/content/i18n'

export default {
  [Command.AboutMe]: {
    description: 'Learn more about me'
  },
  [Command.Experience]: {
    description: 'List all the positions I occupied',
    argsDesc: {
      company: 'Filter positions by company',
      date: 'Filter positions by date'
    }
  },
  [Command.ProProjects]: {
    description: 'List all the professional projects I worked on',
    argsDesc: {
      company: 'Filter professional projects by company',
      tech: 'Filter professional projects by technology'
    }
  },
  [Command.PersoProjects]: {
    description: 'List all the personal projects I worked on',
    argsDesc: {
      tech: 'Filter personal projects by technology'
    }
  },
  [Command.SetLang]: {
    description: 'Change language'
  },
  [Command.Intro]: {
    description: 'Print intro message'
  },
  [Command.Help]: {
    description: 'Print list of commands'
  },
  [Command.Clear]: {
    description: 'Clear the terminal screen'
  }
} satisfies Record<Command, I18nCmd>
