export interface IFundContent {
    fund_name: string;
    description: string;
    image_gallery: string[];
    card_front: string;
    card_back: string;
    culture_gallery: string[];
    culture_description: string;
    culture_articles: any[];
  }

  export enum FUND_TYPE {
    EQUITY = 'Equity',
    DEBT = 'Debt',
  }
  
  export enum REGULATION {
    RETAIL = 'Retail',
    ACCREDITED = 'Accredited',
  }