import CityfundHero from '@components/cityfunds/CityfundHero';
import EquityPayoff from '@components/cityfunds/EquityPayoff';
import EmailCapture from '@components/common/EmailCapture';
import PageTracker from '@components/common/PageTracker';
import FeaturedImage from '@components/marketing/FeaturedImage';
import KeyMetrics from '@components/marketing/KeyMetrics';
import { getAllFundsContent, getCityfundsPageContent } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

export default async function LandingPage() {
  const cityfundsPage = await getCityfundsPageContent();
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();

  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  return (
    <PageTracker pageName="Get Started">
      <CityfundHero
        banner={cityfundsPage?.hero_banner}
        hero={cityfundsPage?.marketing_hero}
        logos={cityfundsPage?.logos}
        cityfunds={cityfunds}
      />
      <KeyMetrics metrics={cityfundsPage?.metrics} />

      <FeaturedImage feature={cityfundsPage?.cityfunds_feature} isWide />
      <FeaturedImage
        feature={cityfundsPage?.hei_feature}
        component={<EquityPayoff />}
        isReversed
        isWide
      />

      <EmailCapture isLanding />
    </PageTracker>
  );
}
