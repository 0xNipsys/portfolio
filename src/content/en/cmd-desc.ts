import { Command } from '@/shell/commands'
import type { I18nCmd } from '@/content/interfaces'

export default {
  [Command.AboutMe]: {
    description: 'Learn more about me'
  },
  [Command.Experience]: {
    description: 'Browse the positions I occupied',
    argsDesc: {
      company: 'Filter positions by company',
      role: 'Filter positions by role',
      tech: 'Filter positions by technology'
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
