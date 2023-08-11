import { createClient } from '@supabase/supabase-js';
import { capitalizeFirstLetter } from '@utils/helpers';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

export const getAllFundsData = async (): Promise<any> => {
  let { data: fund_data } = await supabase.from('cityfunds').select('*');
  return fund_data;
};

export const getFundDataById = async (id: string): Promise<any> => {
  let { data: fund_data } = await supabase
    .from('cityfunds')
    .select('*')
    .eq('fund_name', capitalizeFirstLetter(id))
    .single();
  return fund_data;
};

export const getCityDataById = async (id: string): Promise<any> => {
  let { data: city_data } = await supabase
    .from('cities')
    .select('*')
    .eq('city_name', capitalizeFirstLetter(id))
    .single();
  return city_data;
};

export const getHomesharesById = async (id: string): Promise<any> => {
  let { data: city_data } = await supabase
    .from('homeshares')
    .select('*')
    .eq('fund_name', capitalizeFirstLetter(id))
  return city_data;
};

export const getDocumentsById = async (id: string): Promise<any> => {
  let { data: city_data } = await supabase
    .from('documents')
    .select('*')
    .eq('fund_name', capitalizeFirstLetter(id))
    .single();
  return city_data;
};
