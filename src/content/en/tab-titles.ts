import { Tab } from '@/enums/tab'

export default {
  [Tab.MainTab]: 'Terminal',
  [Tab.AboutMe]: 'About Me',
  [Tab.Experience]: 'Experience',
  [Tab.ProfessionalProjects]: 'Professional Projects',
  [Tab.PersonalProjects]: 'Personal Projects'
} satisfies Record<Tab, string>
