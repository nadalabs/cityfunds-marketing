import HomePage from '@app/(tabs)/index';
import { getAllFundsContent, getCityfundsPageContent } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

export default async function Page() {
  const cityfundsPage = await getCityfundsPageContent();
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();

  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  return <HomePage cityfunds={cityfunds} cityfundsPage={cityfundsPage} />;
}
