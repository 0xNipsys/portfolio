import { Command } from '@/shell/commands'
import type { I18nCmd } from '@/content/interfaces'

export default {
  [Command.AboutMe]: {
    description: 'En savoir plus sur moi'
  },
  [Command.Experience]: {
    description: "Parcourir les postes que j'ai occupés",
    argsDesc: {
      company: 'Filtrer les postes par entreprise',
      role: 'Filtrer les positions par rôle',
      tech: 'Filtrer les positions par technologie'
    }
  },
  [Command.ProProjects]: {
    description: "Liste de tous les projets professionnels sur lesquels j'ai travaillé",
    argsDesc: {
      company: 'Filtrer les projets professionnels par entreprise',
      tech: 'Filtrer les projets professionnels par technologie'
    }
  },
  [Command.PersoProjects]: {
    description: "Liste de tous les projets personnels sur lesquels j'ai travaillé",
    argsDesc: {
      tech: 'Filtrer les projets personnels par technologie'
    }
  },
  [Command.SetLang]: {
    description: 'Changer de langue'
  },
  [Command.Intro]: {
    description: "Afficher le message d'introduction"
  },
  [Command.Help]: {
    description: 'Afficher la liste des commandes'
  },
  [Command.Clear]: {
    description: "Effacer l'écran du terminal"
  }
} satisfies Record<Command, I18nCmd>
