export interface CommandInfo {
  name: Command
  arguments?: CommandArgument[]
  options?: string[]
}

export interface CommandArgument {
  name: string
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
  Intro = 'intro',
  Help = 'help',
  SetLang = 'set-lang',
  Clear = 'clear'
}

export default [
  {
    name: Command.AboutMe
  },
  {
    name: Command.Positions,
    arguments: [
      {
        name: 'company',
        options: ['yanport', 'onepoint', 'renault', 'talan', 'bell', 'deepspace']
      },
      {
        name: 'date',
        format: 'YYYY-MM-DD'
      }
    ]
  },
  {
    name: Command.ProProjects,
    arguments: [
      {
        name: 'company',
        options: ['yanport', 'onepoint', 'renault', 'talan', 'bell']
      },
      {
        name: 'tech',
        options: ['angular', 'react', 'vue', 'web3', 'java', 'c#']
      }
    ]
  },
  {
    name: Command.PersoProjects,
    arguments: [
      {
        name: 'tech',
        options: ['angular', 'react', 'vue', 'web3', 'java', 'c#']
      }
    ]
  },
  {
    name: Command.SetLang,
    options: ['fr', 'en']
  },
  {
    name: Command.Intro
  },
  {
    name: Command.Help
  },
  {
    name: Command.Clear
  }
] satisfies CommandInfo[]
