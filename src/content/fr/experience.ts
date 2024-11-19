import positions from '@/content/fr/positions'
import { Company, CompanySector, CompanySize, PositionRole, PositionType } from '@/enums/work'
import type { I18nExperience } from '@/content/interfaces'

export default {
  company: 'entreprise',
  consultingFirm: 'cabinet de conseil',
  contractorFor: 'consultant pour',
  role: 'rôle',
  type: 'type de contrat',
  stack: 'stack utilisée',
  period: 'période',
  positionDescription: 'description du poste',
  companyInfo: "informations sur l'entreprise",
  accomplishments: 'réalisations',
  developmentStack: 'stack de développement utilisée',
  sector: 'secteur',
  size: 'taille',
  location: 'localisation',
  country: 'pays',
  introduction: 'présentation',
  positions: positions,
  positionRoles: {
    [PositionRole.Backend]: 'Back-End',
    [PositionRole.Frontend]: 'Front-End',
    [PositionRole.FullStack]: 'Full-Stack'
  },
  positionTypes: {
    [PositionType.FullTime]: 'Temps plein',
    [PositionType.PartTime]: 'Temps partiel',
    [PositionType.WorkStudy]: 'Travail-études',
    [PositionType.Internship]: 'Stage'
  },
  companySector: {
    [CompanySector.RealEstate]: 'Immobilier',
    [CompanySector.ItConsulting]: 'Conseil en informatique',
    [CompanySector.Telecommunications]: 'Télécommunications',
    [CompanySector.BlockchainServices]: 'Services Blockchain'
  },
  companySizes: {
    [CompanySize.XS]: '1-10 employés',
    [CompanySize.SM]: '11-50 employés',
    [CompanySize.MD]: '51-200 employés',
    [CompanySize.LG]: '201-500 employés',
    [CompanySize.XL]: '501-1 000 employés',
    [CompanySize.XXL]: '1 001-5 000 employés',
    [CompanySize.XXXL]: '5 001-10 000 employés',
    [CompanySize.XXXXL]: '10 000+ employés'
  },
  companyIntroductions: {
    [Company.Yanport]:
      "Yanport accompagne au quotidien les professionnels de l'immobilier résidentiel grâce à ses " +
      "solutions d'évaluation, d'aide à la décision et d'analyse immobilière.",
    [Company.Onepoint]: '',
    [Company.RenaultDigital]:
      'Renault Digital numérise le cœur de métier de Renault pour ses employés, ses partenaires ' +
      'et ses clients dans le monde entier.',
    [Company.Talan]: '',
    [Company.Bell]:
      'Bell est la plus grande entreprise de communications du Canada. Fournissant des ' +
      "services avancés sans fil, Internet, télévision, médias et communications d'affaires " +
      'large bande.',
    [Company.Chainify]:
      'Chainify est une entreprise technologique qui vise à combler le fossé ' +
      'entre les jeux traditionnels et la technologie blockchain.'
  }
} satisfies I18nExperience
