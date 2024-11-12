import type { I18nPosition } from '@/content/i18n'

export default {
  1: {
    description:
      "Stage de fin d'année scolaire - Ma 1ère expérience de Dev Web en milieu professionnel. " +
      "Ma mission principale fut de participer à l'amélioration de leur agrégateur de données " +
      'immobilière, qui est divisé en deux micro services: le premier chargé de parcourir ' +
      "entièrement les annonces des portails immobiliers français afin d'en récupérer le code " +
      'HTML. Et le deuxième chargé de nettoyer et formater les métadonnées extraites à partir du ' +
      "code HTML des pages d'annonces immobilière.",
    beAccomplishments: [
      'Examiner et résoudre les problèmes liés au web crawling',
      "Améliorer l'extracteur de métadonnées html en prenant en charge les anciennes et les" +
        'nouvelles structures de données'
    ],
    feAccomplishments: []
  },
  2: {
    description: '',
    beAccomplishments: [],
    feAccomplishments: []
  },
  3: {
    description: '',
    beAccomplishments: [],
    feAccomplishments: []
  },
  4: {
    description: '',
    beAccomplishments: [],
    feAccomplishments: []
  },
  5: {
    description: '',
    beAccomplishments: [],
    feAccomplishments: []
  },
  6: {
    description: '',
    beAccomplishments: [],
    feAccomplishments: []
  }
} satisfies Record<number, I18nPosition>
