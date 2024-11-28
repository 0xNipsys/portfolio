import { Company, PositionRole, PositionType, Stack } from '@/enums/work'

export interface Position {
  id: number
  company: Company
  consultingFirm?: Company
  role: PositionRole
  isLeadRole: boolean
  type: PositionType
  feStack: Stack[]
  beStack: Stack[]
  period: [Date, Date?]
}

export const positions: Position[] = [
  {
    id: 1,
    company: Company.Yanport,
    role: PositionRole.Backend,
    isLeadRole: false,
    type: PositionType.Internship,
    feStack: [],
    beStack: [Stack.Java, Stack.Jsoup],
    period: [new Date(2016, 0), new Date(2016, 2)]
  },
  {
    id: 2,
    company: Company.Yanport,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.WorkStudy,
    feStack: [Stack.AngularJS, Stack.Bootstrap, Stack.Javascript],
    beStack: [
      Stack.Cassandra,
      Stack.Datastore,
      Stack.Elasticsearch,
      Stack.Java,
      Stack.Jsoup,
      Stack.RabbitMq
    ],
    period: [new Date(2016, 6), new Date(2017, 10)]
  },
  {
    id: 3,
    company: Company.Yanport,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.FullTime,
    feStack: [
      Stack.Angular,
      Stack.AngularJS,
      Stack.AngularMaterial,
      Stack.CSSFlexbox,
      Stack.Javascript,
      Stack.PWA,
      Stack.Redux,
      Stack.Responsive,
      Stack.SCSS,
      Stack.SSR,
      Stack.Typescript
    ],
    beStack: [
      Stack.Cassandra,
      Stack.Datastore,
      Stack.Elasticsearch,
      Stack.Java,
      Stack.Jsoup,
      Stack.RabbitMq
    ],
    period: [new Date(2017, 10), new Date(2019, 6)]
  },
  {
    id: 4,
    company: Company.RenaultDigital,
    consultingFirm: Company.Onepoint,
    role: PositionRole.Frontend,
    isLeadRole: true,
    type: PositionType.FullTime,
    feStack: [
      Stack.Angular,
      Stack.AngularMaterial,
      Stack.CSSFlexbox,
      Stack.Redux,
      Stack.SCSS,
      Stack.Typescript
    ],
    beStack: [],
    period: [new Date(2019, 8), new Date(2022, 0)]
  },
  {
    id: 5,
    company: Company.Chainify,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.PartTime,
    feStack: [
      Stack.CSSFlexbox,
      Stack.CSSGrid,
      Stack.DaisyUI,
      Stack.NextJS,
      Stack.React,
      Stack.Responsive,
      Stack.SCSS,
      Stack.Storybook,
      Stack.Typescript
    ],
    beStack: [Stack.AzureFunctions, Stack.Blockchain, Stack.CSharp, Stack.Serverless, Stack.Web3],
    period: [new Date(2022, 4), new Date(2023, 6)]
  },
  {
    id: 6,
    company: Company.Bell,
    consultingFirm: Company.Talan,
    role: PositionRole.Frontend,
    isLeadRole: true,
    type: PositionType.FullTime,
    feStack: [
      Stack.CSSFlexbox,
      Stack.CSSGrid,
      Stack.Element,
      Stack.ElementPlus,
      Stack.Responsive,
      Stack.SCSS,
      Stack.Storybook,
      Stack.TailwindCSS,
      Stack.Typescript,
      Stack.Vue2,
      Stack.Vue3
    ],
    beStack: [],
    period: [new Date(2022, 1)]
  }
]
