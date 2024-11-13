import { Tab } from '@/enums/tab'

export default {
  [Tab.MainTab]: 'Terminal',
  [Tab.AboutMe]: 'About Me',
  [Tab.Experience]: 'Experience'
} satisfies Record<Tab, string>
