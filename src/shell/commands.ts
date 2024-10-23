import { ref } from 'vue'
import { Lang } from '@/enums/lang'
import { Company, PositionRole, Stack } from '@/enums/work'

export const ShellInput = ref('')
export const ShellSubmission = ref('')

export interface CommandInfo {
  name: Command
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

export default [
  {
    name: Command.AboutMe
  },
  {
    name: Command.Experience,
    arguments: [
      {
        name: 'company',
        options: enumToArg(Company)
      },
      {
        name: 'role',
        options: enumToArg(PositionRole)
      },
      {
        name: 'tech',
        options: enumToArg(Stack)
      }
    ]
  },
  {
    name: Command.ProProjects,
    arguments: [
      {
        name: 'company',
        options: enumToArg(Company)
      },
      {
        name: 'tech',
        options: enumToArg(Stack)
      }
    ]
  },
  {
    name: Command.PersoProjects,
    arguments: [
      {
        name: 'tech',
        options: enumToArg(Stack)
      }
    ]
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
] satisfies CommandInfo[]
