import { Company, PositionRole, PositionType, Tech } from '@/enums/work'

export interface Position {
  id: number
  company: Company
  clientCompany?: Company
  role: PositionRole
  isLeadRole: boolean
  type: PositionType
  techs: Tech[]
  period: [Date, Date?]
}

export const positions: Position[] = [
  {
    id: 1,
    company: Company.Yanport,
    role: PositionRole.Backend,
    isLeadRole: false,
    type: PositionType.Internship,
    techs: [Tech.Java, Tech.Jsoup],
    period: [new Date(2016, 0), new Date(2016, 2)]
  },
  {
    id: 2,
    company: Company.Yanport,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.WorkStudy,
    techs: [
      Tech.AngularJS,
      Tech.Bootstrap,
      Tech.Cassandra,
      Tech.Datastore,
      Tech.Elasticsearch,
      Tech.Java,
      Tech.Javascript,
      Tech.Jsoup,
      Tech.RabbitMq
    ],
    period: [new Date(2016, 6), new Date(2017, 10)]
  },
  {
    id: 3,
    company: Company.Yanport,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.FullTime,
    techs: [
      Tech.Angular,
      Tech.AngularJS,
      Tech.AngularMaterial,
      Tech.Cassandra,
      Tech.CSSFlexbox,
      Tech.Datastore,
      Tech.Elasticsearch,
      Tech.Java,
      Tech.Javascript,
      Tech.Jsoup,
      Tech.PWA,
      Tech.RabbitMq,
      Tech.Redux,
      Tech.Responsive,
      Tech.SCSS,
      Tech.SSR,
      Tech.Typescript
    ],
    period: [new Date(2017, 10), new Date(2019, 6)]
  },
  {
    id: 4,
    company: Company.Onepoint,
    clientCompany: Company.Renault,
    role: PositionRole.Frontend,
    isLeadRole: true,
    type: PositionType.FullTime,
    techs: [
      Tech.Angular,
      Tech.AngularMaterial,
      Tech.CSSFlexbox,
      Tech.Redux,
      Tech.SCSS,
      Tech.Typescript
    ],
    period: [new Date(2019, 8), new Date(2022, 0)]
  },
  {
    id: 5,
    company: Company.Chainify,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.PartTime,
    techs: [
      Tech.AzureFunctions,
      Tech.Blockchain,
      Tech.CSharp,
      Tech.CSSFlexbox,
      Tech.DaisyUI,
      Tech.React,
      Tech.Serverless,
      Tech.Web3,
      Tech.Storybook
    ],
    period: [new Date(2022, 4), new Date(2023, 6)]
  },
  {
    id: 6,
    company: Company.Talan,
    clientCompany: Company.Bell,
    role: PositionRole.Frontend,
    isLeadRole: true,
    type: PositionType.FullTime,
    techs: [
      Tech.CSSFlexbox,
      Tech.CSSGrid,
      Tech.Element,
      Tech.ElementPlus,
      Tech.Responsive,
      Tech.SCSS,
      Tech.Storybook,
      Tech.TailwindCSS,
      Tech.Typescript,
      Tech.Vue2,
      Tech.Vue3
    ],
    period: [new Date(2022, 1)]
  }
]
