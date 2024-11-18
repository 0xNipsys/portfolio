import { Lang } from '@/enums/lang'

export interface CommandInfo {
  name: Command
  fullscreen?: boolean
  arguments?: CommandArgument[]
  options?: string[]
}

export interface CommandArgument {
  name: string
  options?: string[]
}

export interface CommandEntry {
  timestamp: number
  cmdName: Command
  fullscreen?: boolean
  option?: string
  argName?: string
  argValue?: string
}

export enum Command {
  AboutMe = 'about-me',
  Experience = 'experience',
  ProProjects = 'pro-projects',
  PersoProjects = 'perso-projects',
  Intro = 'intro',
  Help = 'help',
  SetLang = 'set-lang',
  Clear = 'clear'
}

function enumToArg(o: { [s: string]: any } | ArrayLike<any>): string[] {
  return Object.values(o).map((l: string) => {
    return l.replace(' ', '').replace('-', '').toLowerCase()
  })
}

export const Commands: CommandInfo[] = [
  {
    name: Command.AboutMe
  },
  {
    name: Command.Experience,
    fullscreen: true
  },
  {
    name: Command.SetLang,
    options: enumToArg(Lang)
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
]
