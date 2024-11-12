import { Company } from '@/enums/work'
import yanportLogo from '@/assets/logos/yanport.png'
import renaultDigitalLogo from '@/assets/logos/renault-digital.png'

export interface CompanyInfo {
  logo: string
  logoWrapColor: string
}

export const Companies: Record<Company, CompanyInfo> = {
  Yanport: {
    logo: yanportLogo,
    logoWrapColor: '#1b46a5'
  },
  Onepoint: {
    logo: '',
    logoWrapColor: ''
  },
  [Company.RenaultDigital]: {
    logo: renaultDigitalLogo,
    logoWrapColor: '#fff'
  },
  Talan: {
    logo: '',
    logoWrapColor: ''
  },
  Bell: {
    logo: '',
    logoWrapColor: ''
  },
  [Company.Chainify]: {
    logo: '',
    logoWrapColor: ''
  }
}
