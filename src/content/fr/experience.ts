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
  developmentStack: 'stack de développement',
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
      'Leader sur le marché des données immobilières, Yanport accompagne au ' +
      "quotidien les professionnels de l'immobilier résidentiel grâce à ses solutions " +
      "d'évaluation, d'aide à la décision et d'analyse immobilière.",
    [Company.Onepoint]:
      'Depuis plus de 20 ans, Onepoint aide les entreprises et les organismes ' +
      'du secteur public à réaliser des transformations majeures. Nous sommes convaincus que la ' +
      "croissance économique et le progrès social sont indissociables. C'est pourquoi nous " +
      "mettons l'innovation technologique au service de nos clients et de la société dans son " +
      "ensemble. Notre ambition est de travailler ensemble à la construction d'un avenir durable " +
      'qui profite à tous.',
    [Company.RenaultDigital]:
      "L'objectif de Renault Digital est de numériser le cœur de métier " +
      'de Renault pour ses employés, ses partenaires et ses clients dans le monde entier. ' +
      "L'innovation fait partie de l'ADN de Renault. Nous travaillons à construire les " +
      "capacités numériques et l'échelle de demain.",
    [Company.Talan]:
      'Talan est un groupe international de conseil et d’expertises ' +
      'technologiques qui accélère la transformation de ses clients par les leviers de ' +
      "l'innovation, la technologie et la data. Depuis plus de 20 ans, Talan conseille et " +
      'accompagne les entreprises et les institutions publiques dans la mise en œuvre de leurs ' +
      "projets de transformation et d'innovation en France et à l'international.",
    [Company.Bell]:
      'Bell est la plus grande entreprise de communications du Canada. Elle ' +
      'fournit un ensemble évolué de services sans fil, Internet, de télévision, de médias et de ' +
      "communications d'affaires large bande de Bell. Fondée à Montréal en 1880, Bell est la " +
      'propriété exclusive de BCE Inc.',
    [Company.Chainify]:
      'Chainify est une entreprise technologique qui vise à combler le fossé ' +
      'entre les jeux traditionnels et la technologie blockchain. Notre jeu phare, DEEPSPACE, ' +
      'sert de pilote pour la construction de notre infrastructure, offrant aux studios de jeu un ' +
      "moyen facile d'entrer dans le monde du jeu blockchain grâce à notre solution plug-and-play."
  }
} satisfies I18nExperience
