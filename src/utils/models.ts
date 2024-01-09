import { FUND_STATUS, FUND_TYPE, REGULATION } from './constants';

export interface ICityfund {
  fund_data: IFundData;
  fund_content: IFundContent;
}

export interface IFundData {
  id: string;
  fund_name: string;
  fund_status: FUND_STATUS;
  fund_type: FUND_TYPE;
  regulation: REGULATION;
  target_return: number;
  min_investment: number;
  management_fee: number;
  fund_size: number;
  share_price: number;
  total_assets: number;
  total_aum: number;
  total_investors: number;
  nav_update?: Date;
  series_url?: string;
}

export interface IFundContent {
  fund_name: string;
  call_to_action: string;
  highlights: string[];
  description: string;
  image_gallery: string[];
  card_back: string;
  culture_gallery: string[];
  culture_description: string;
  culture_articles: any[];
}

export interface IFeature {
  title: string;
  description: string;
  image: string;
}
