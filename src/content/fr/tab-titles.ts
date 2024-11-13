import { Tab } from '@/enums/tab'

export default {
  [Tab.MainTab]: 'Terminal',
  [Tab.AboutMe]: 'À propos de moi',
  [Tab.Experience]: 'Expérience'
} satisfies Record<Tab, string>
