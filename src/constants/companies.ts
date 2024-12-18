import { Company, CompanySector, CompanySize } from '@/enums/work'
import bellLogo from '@/assets/logos/bell.webp'
import chainifyLogo from '@/assets/logos/chainify.webp'
import onepointLogo from '@/assets/logos/onepoint.webp'
import renaultDigitalLogo from '@/assets/logos/renault-digital.webp'
import yanportLogo from '@/assets/logos/yanport.webp'

export interface CompanyInfo {
  logo: string
  logoWrapColor: string
  location: string
  country: string
  size: CompanySize
  sector: CompanySector
}

export const Companies: Record<Company, CompanyInfo> = {
  Yanport: {
    logo: yanportLogo,
    logoWrapColor: '#1b46a5',
    location: 'Levallois-Perret, Hauts-de-Seine',
    country: 'France',
    size: CompanySize.SM,
    sector: CompanySector.RealEstate
  },
  Onepoint: {
    logo: onepointLogo,
    logoWrapColor: '#fff',
    location: 'Paris, Île-de-France',
    country: 'France',
    size: CompanySize.XXL,
    sector: CompanySector.ItConsulting
  },
  [Company.RenaultDigital]: {
    logo: renaultDigitalLogo,
    logoWrapColor: '#000',
    location: 'Boulogne-Billancourt, Hauts-de-Seine',
    country: 'France',
    size: CompanySize.MD,
    sector: CompanySector.ItConsulting
  },
  Talan: {
    logo: '',
    logoWrapColor: '',
    location: 'Montréal, Québec',
    country: 'Canada',
    size: CompanySize.XXXL,
    sector: CompanySector.ItConsulting
  },
  Bell: {
    logo: bellLogo,
    logoWrapColor: '#295296',
    location: 'Montréal, Québec',
    country: 'Canada',
    size: CompanySize.XXXXL,
    sector: CompanySector.Telecommunications
  },
  [Company.Chainify]: {
    logo: chainifyLogo,
    logoWrapColor: '#000',
    location: 'Sheridan, Wyoming',
    country: 'United-States',
    size: CompanySize.SM,
    sector: CompanySector.BlockchainServices
  }
}
