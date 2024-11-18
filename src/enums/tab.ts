import { Command } from '@/shell/commands'

export enum Tab {
  MainTab = 'MainTab',
  AboutMe = 'AboutMe',
  Experience = 'Experience'
  /*ProfessionalProjects = 'ProfessionalProjects',
  PersonalProjects = 'PersonalProjects'*/
}

export const InitialTabCmd: Record<Tab, Command> = {
  MainTab: Command.Intro,
  AboutMe: Command.AboutMe,
  Experience: Command.Experience
}
