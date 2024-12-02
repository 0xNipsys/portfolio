import { Command } from '@/shell/commands'
import { Tab } from '@/enums/tab'
import { Company, CompanySector, CompanySize, PositionRole, PositionType } from '@/enums/work'

export interface I18nContent {
  cmdDesc: Record<Command, I18nCmd>
  cmdLinePrefix: string
  cmdOut: Record<Command, Record<string, string>>
  tabTitles: Record<Tab, string>
  experience: I18nExperience
  na: string
  back: string
  backspace: string
  escape: string
  or: string
  exit: string
  fullScreenMode: string
  present: string
  unknownCmdErr: string
  updateTitle: string
  updateBody1: string
  updateBody2: string
  update: string
}

export interface I18nCmd {
  description: string
  argsDesc?: Record<string, string>
}

export interface I18nExperience {
  selectPosition: string
  viewMode: string
  company: string
  consultingFirm: string
  contractorFor: string
  role: string
  type: string
  stack: string
  period: string
  positionDescription: string
  companyInfo: string
  accomplishments: string
  developmentStack: string
  sector: string
  size: string
  location: string
  country: string
  introduction: string
  positions: Record<number, I18nPosition>
  positionRoles: Record<PositionRole, string>
  positionTypes: Record<PositionType, string>
  companySector: Record<CompanySector, string>
  companySizes: Record<CompanySize, string>
  companyIntroductions: Record<Company, string>
}

export interface I18nPosition {
  description: string
  beAccomplishments: string[]
  feAccomplishments: string[]
}
