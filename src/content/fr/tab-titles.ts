import { Tab } from '@/enums/tab'

export default {
  [Tab.MainTab]: 'Terminal',
  [Tab.AboutMe]: 'À propos de moi',
  [Tab.Experience]: 'Expérience',
  [Tab.ProfessionalProjects]: 'Projets professionnels',
  [Tab.PersonalProjects]: 'Projets personnels'
} satisfies Record<Tab, string>
