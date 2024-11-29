import positions from '@/content/en/positions'
import { Company, CompanySector, CompanySize, PositionRole, PositionType } from '@/enums/work'
import type { I18nExperience } from '@/content/interfaces'

export default {
  selectPosition: 'select a position to learn more',
  viewMode: 'view mode:',
  company: 'company',
  consultingFirm: 'consulting firm',
  contractorFor: 'contractor for',
  role: 'role',
  type: 'contract type',
  stack: 'stack used',
  period: 'period',
  positionDescription: 'position description',
  companyInfo: 'company info',
  accomplishments: 'accomplishments',
  developmentStack: 'development stack used',
  sector: 'sector',
  size: 'size',
  location: 'location',
  country: 'country',
  introduction: 'introduction',
  positions: positions,
  positionRoles: {
    [PositionRole.Backend]: 'Back-End',
    [PositionRole.Frontend]: 'Front-End',
    [PositionRole.FullStack]: 'Full-Stack'
  },
  positionTypes: {
    [PositionType.FullTime]: 'Full-Time',
    [PositionType.PartTime]: 'Part-Time',
    [PositionType.WorkStudy]: 'Work-Study',
    [PositionType.Internship]: 'Internship'
  },
  companySector: {
    [CompanySector.RealEstate]: 'Real Estate',
    [CompanySector.ItConsulting]: 'IT Consulting',
    [CompanySector.Telecommunications]: 'Telecommunications',
    [CompanySector.BlockchainServices]: 'Blockchain Services'
  },
  companySizes: {
    [CompanySize.XS]: '1-10 employees',
    [CompanySize.SM]: '11-50 employees',
    [CompanySize.MD]: '51-200 employees',
    [CompanySize.LG]: '201-500 employees',
    [CompanySize.XL]: '501-1 000 employees',
    [CompanySize.XXL]: '1 001-5 000 employees',
    [CompanySize.XXXL]: '5 001-10 000 employees',
    [CompanySize.XXXXL]: '10 000+ employees'
  },
  companyIntroductions: {
    [Company.Yanport]:
      'Yanport supports residential real estate professionals on a daily basis with its ' +
      'valuation, decision support and real estate analysis solutions.',
    [Company.Onepoint]: '',
    [Company.RenaultDigital]:
      "Renault Digital digitizes Renault's core business for its employees, partners and " +
      'customers worldwide.',
    [Company.Talan]: '',
    [Company.Bell]:
      "Bell is Canada's largest communications company. Providing an advanced suite of wireless, " +
      'Internet, television, media and broadband business communications services.',
    [Company.Chainify]:
      'Chainify is a technology company that aims to bridge the gap between traditional gaming ' +
      'and blockchain technology.'
  }
} satisfies I18nExperience
