export interface IFundInfo {
  regulation: REGULATION;
  fundType: FUND_TYPE;
  strategy: STRATEGY;
  taxForm: TAX_FORM;
  targetIRR: string;
  liquidity: LIQUIDITY;
  fundTerm: FUND_TERM;
  lockupPeriod: LOCKUP_PERIOD;
  minInvestment: number;
  managementFee: number;
  fundSize: number;
}

export interface IFundImages {
  heroImage: string;
  cardImage: string;
  mapImage: string;
  accredImage: string;
  carouselImages: string[];
}

export interface IFundDocs {
  oneSheet: string;
  executiveSummary: string;
  offeringMemorandum: string;
  subscriptionAgreement: string;
  wireInstructions: string;
}

export interface IFundReturns {
  sharePrice: number;
  appreciation: number;
  totalAssets: number;
}

export interface ICityfund {
  name: string;
  images: IFundImages;
  information: IFundInfo;
  documents?: IFundDocs;
  returns?: IFundReturns;
}

export enum REGULATION {
  REG_A = 'Reg A+',
  REG_D = '506(c)',
}

export enum FUND_TYPE {
  EQUITY = 'Equity',
  DEBT = 'Debt',
}

export enum STRATEGY {
  GROWTH = 'Growth',
  INCOME = 'Income',
}

export enum TAX_FORM {
  DIV = '1099-DIV',
}

export enum LIQUIDITY {
  QUARTERLY = 'Quarterly',
}

export enum FUND_TERM {
  OPEN_ENDED = 'Open-ended',
  YEARS_5 = '60 Months',
}

export enum LOCKUP_PERIOD {
  NONE = 'N/A',
  YEARS_1 = '12 Months',
  YEARS_2 = '24 Months',
}
