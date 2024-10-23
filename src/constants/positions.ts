import { Company, PositionRole, PositionType, Stack } from '@/enums/work'

export interface Position {
  id: number
  company: Company
  clientCompany?: Company
  role: PositionRole
  isLeadRole: boolean
  type: PositionType
  stack: Stack[]
  period: [Date, Date?]
}

export const positions: Position[] = [
  {
    id: 1,
    company: Company.Yanport,
    role: PositionRole.Backend,
    isLeadRole: false,
    type: PositionType.Internship,
    stack: [Stack.Java, Stack.Jsoup],
    period: [new Date(2016, 0), new Date(2016, 2)]
  },
  {
    id: 2,
    company: Company.Yanport,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.WorkStudy,
    stack: [
      Stack.AngularJS,
      Stack.Bootstrap,
      Stack.Cassandra,
      Stack.Datastore,
      Stack.Elasticsearch,
      Stack.Java,
      Stack.Javascript,
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
    stack: [
      Stack.Angular,
      Stack.AngularJS,
      Stack.AngularMaterial,
      Stack.Cassandra,
      Stack.CSSFlexbox,
      Stack.Datastore,
      Stack.Elasticsearch,
      Stack.Java,
      Stack.Javascript,
      Stack.Jsoup,
      Stack.PWA,
      Stack.RabbitMq,
      Stack.Redux,
      Stack.Responsive,
      Stack.SCSS,
      Stack.SSR,
      Stack.Typescript
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
    stack: [
      Stack.Angular,
      Stack.AngularMaterial,
      Stack.CSSFlexbox,
      Stack.Redux,
      Stack.SCSS,
      Stack.Typescript
    ],
    period: [new Date(2019, 8), new Date(2022, 0)]
  },
  {
    id: 5,
    company: Company.Chainify,
    role: PositionRole.FullStack,
    isLeadRole: false,
    type: PositionType.PartTime,
    stack: [
      Stack.AzureFunctions,
      Stack.Blockchain,
      Stack.CSharp,
      Stack.CSSFlexbox,
      Stack.DaisyUI,
      Stack.React,
      Stack.Serverless,
      Stack.Web3,
      Stack.Storybook
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
    stack: [
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
    period: [new Date(2022, 1)]
  }
]
