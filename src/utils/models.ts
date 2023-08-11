import { FUND_STATUS, FUND_TYPE, LIQUIDITY, REGULATION } from "./constants";

export interface ICityfund {
  fund_data: IFundData;
  fund_content: IFundContent;
}

export interface IFundData {
  offering_id: string;
  fund_name: string;
  fund_status: FUND_STATUS;
  fund_type: FUND_TYPE;
  regulation: REGULATION;
  liquidity: LIQUIDITY;
  target_irr: string;
  lockup_months: number;
  term_months: number;
  min_investment: number;
  management_fee: number;
  fund_size: number;
  share_price: number;
  appreciation: number;
  total_assets: number;
  total_investors: number;
}

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
