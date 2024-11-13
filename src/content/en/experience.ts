import positions from '@/content/en/positions'
import { Company, CompanySector, CompanySize, PositionRole, PositionType } from '@/enums/work'
import type { I18nExperience } from '@/content/interfaces'

export default {
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
  developmentStack: 'development stack',
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
      'As a leader in the real estate data market, Yanport supports residential ' +
      'real estate professionals on a daily basis with its valuation, decision support and real ' +
      'estate analysis solutions.',
    [Company.Onepoint]:
      'For more than 20 years, Onepoint has been helping companies and public ' +
      'sector bodies achieve major transformations. We are convinced that economic growth and ' +
      "social progress are inseparable. That's why we put technological innovation at the service " +
      'of our customers and society as a whole. Our ambition is to work together to build a ' +
      'sustainable future that benefits everyone.',
    [Company.RenaultDigital]:
      "The aim of Renault Digital is to digitize Renault's core " +
      'business for its employees, partners and customers worldwide. Innovation is part of ' +
      "Renault's DNA. We are working to build the digital capabilities and scale of tomorrow.",
    [Company.Talan]:
      'Talan is an international consulting and technology expertise group that ' +
      'accelerates the transformation of its customers through the levers of innovation, ' +
      'technology and data. For over 20 years, Talan has been advising and supporting companies ' +
      'and public institutions in the implementation of their transformation and innovation ' +
      'projects in France and abroad.',
    [Company.Bell]:
      "Bell is Canada's largest communications company. It provides an advanced " +
      'suite of wireless, Internet, television, media and broadband business communications ' +
      'services from Bell. Founded in Montreal in 1880, Bell is wholly owned by BCE Inc.',
    [Company.Chainify]:
      'Chainify is a technology company that aims to bridge the gap between ' +
      'traditional gaming and blockchain technology. Our flagship game, DEEPSPACE, serves as a ' +
      'pilot for building our infrastructure, providing an easy way for game studios to enter the ' +
      'world of blockchain gaming with our plug-and-play solution.'
  }
} satisfies I18nExperience
