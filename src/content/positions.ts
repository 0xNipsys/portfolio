export enum Company {
  Yanport = 'Yanport',
  Onepoint = 'Onepoint',
  Renault = 'Renault',
  Talan = 'Talan',
  Bell = 'Bell',
  Deepspace = 'Deepspace'
}

export enum Role {
  Frontend = 'Front-End',
  FullStack = 'Full-Stack'
}

export enum PositionType {
  Contract = 'Contract',
  FullTime = 'FullTime',
  PartTime = 'PartTime',
  WorkStudy = 'WorkStudy'
}

export interface Position {
  id: number
  company: Company
  contractCompany?: Company
  role: Role
  type: PositionType
}
