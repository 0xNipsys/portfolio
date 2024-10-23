import { Stack } from '@/enums/work'

// Technology: 7
// Frameworks: 6
// Main Language: 5
// Main Libraries : 4
// Sub Language: 3
// Libraries: 2
// Tools: 1

export const stackWeight: Record<Stack, number> = {
  [Stack.AzureFunctions]: 7,
  [Stack.CSharp]: 5,
  [Stack.Angular]: 6,
  [Stack.AngularJS]: 6,
  [Stack.AngularMaterial]: 2,
  [Stack.Blockchain]: 7,
  [Stack.Bootstrap]: 2,
  [Stack.Cassandra]: 4,
  [Stack.CSSGrid]: 1,
  [Stack.DaisyUI]: 2,
  [Stack.Datastore]: 4,
  [Stack.Elasticsearch]: 4,
  [Stack.Element]: 2,
  [Stack.ElementPlus]: 2,
  [Stack.CSSFlexbox]: 1,
  [Stack.Java]: 5,
  [Stack.Javascript]: 5,
  [Stack.Jsoup]: 2,
  [Stack.PWA]: 4,
  [Stack.RabbitMq]: 4,
  [Stack.React]: 6,
  [Stack.Redux]: 6,
  [Stack.Responsive]: 1,
  [Stack.SCSS]: 3,
  [Stack.SSR]: 4,
  [Stack.Serverless]: 1,
  [Stack.Storybook]: 2,
  [Stack.TailwindCSS]: 4,
  [Stack.Typescript]: 5,
  [Stack.Vue2]: 6,
  [Stack.Vue3]: 6,
  [Stack.Web3]: 6
}
