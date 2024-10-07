interface CommandInfo {
  name: Command
  description: string
  arguments?: CommandArgument[]
  options?: string[]
}

interface CommandArgument {
  name: string
  description: string
  options?: string[]
  format?: string
}

export interface CommandEntry {
  timestamp: number
  name: string
  argumentName?: string
  argumentValue?: string
}

export enum Command {
  AboutMe = 'about-me',
  Positions = 'positions',
  ProProjects = 'pro-projects',
  PersoProjects = 'perso-projects',
  Tldr = 'tldr',
  SetLang = 'set-lang'
}

export default [
  {
    name: Command.AboutMe,
    description: 'Learn more about me'
  },
  {
    name: Command.Positions,
    description: 'List all the positions I occupied',
    arguments: [
      {
        name: 'company',
        description: 'Filter positions by company',
        options: ['yanport', 'onepoint', 'renault', 'talan', 'bell', 'deepspace']
      },
      {
        name: 'date',
        description: 'Filter positions by date',
        format: 'YYYY-MM-DD'
      }
    ]
  },
  {
    name: Command.ProProjects,
    description: 'List all the professional projects I worked on',
    arguments: [
      {
        name: 'company',
        description: 'Filter professional projects by company',
        options: ['yanport', 'onepoint', 'renault', 'talan', 'bell']
      },
      {
        name: 'tech',
        description: 'Filter professional projects by technology',
        options: ['angular', 'react', 'vue', 'web3', 'java', 'c#']
      }
    ]
  },
  {
    name: Command.PersoProjects,
    description: 'List all the personal projects I worked on'
  },
  {
    name: Command.Tldr,
    description: 'Print this help page'
  },
  {
    name: Command.SetLang,
    description: 'Change language',
    options: ['fr', 'en']
  }
] satisfies CommandInfo[]
