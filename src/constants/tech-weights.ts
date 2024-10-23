import { Tech } from '@/enums/work'

// Technology: 7
// Frameworks: 6
// Main Language: 5
// Main Libraries : 4
// Sub Language: 3
// Libraries: 2
// Tools: 1

export const techWeight: Record<Tech, number> = {
  [Tech.AzureFunctions]: 7,
  [Tech.CSharp]: 5,
  [Tech.Angular]: 6,
  [Tech.AngularJS]: 6,
  [Tech.AngularMaterial]: 2,
  [Tech.Blockchain]: 7,
  [Tech.Bootstrap]: 2,
  [Tech.Cassandra]: 4,
  [Tech.CSSGrid]: 1,
  [Tech.DaisyUI]: 2,
  [Tech.Datastore]: 4,
  [Tech.Elasticsearch]: 4,
  [Tech.Element]: 2,
  [Tech.ElementPlus]: 2,
  [Tech.CSSFlexbox]: 1,
  [Tech.Java]: 5,
  [Tech.Javascript]: 5,
  [Tech.Jsoup]: 2,
  [Tech.PWA]: 4,
  [Tech.RabbitMq]: 4,
  [Tech.React]: 6,
  [Tech.Redux]: 6,
  [Tech.Responsive]: 1,
  [Tech.SCSS]: 3,
  [Tech.SSR]: 4,
  [Tech.Serverless]: 1,
  [Tech.Storybook]: 2,
  [Tech.TailwindCSS]: 4,
  [Tech.Typescript]: 5,
  [Tech.Vue2]: 6,
  [Tech.Vue3]: 6,
  [Tech.Web3]: 6
}
