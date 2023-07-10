export interface IFundInfo {
  fundType: FUND_TYPE;
  strategy: STRATEGY;
  taxForm: TAX_FORM;
  targetIRR: number;
  liquidity: LIQUIDITY;
  fundTerm: FUND_TERM;
  lockupPeriod: LOCKUP_PERIOD;
  minInvestment: number;
  managementFee: number;
  fundSize: number;
}

export interface IFundDocs {
  investorPitchDeck: string;
  offeringMemorandum: string;
  subscriptionAgreement: string;
  operatingAgreement: string;
  wireInstructions: string;
}

export interface IFundReturns {
  sharePrice: number;
  appreciation: number;
  totalAssets: number;
}

export interface ICityfund {
  name: string;
  cardImage: string;
  information: IFundInfo;
  documents?: IFundDocs;
  returns?: IFundReturns;
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
  MONTHS = '60 Months',
}

export enum LOCKUP_PERIOD {
  NONE = 'N/A',
  MONTHS = '12 Months',
}
