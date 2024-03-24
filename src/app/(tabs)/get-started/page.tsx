import CityfundHero from '@components/cityfunds/CityfundHero';
import EquityChart from '@components/cityfunds/EquityChart';
import EquityPayoff from '@components/cityfunds/EquityPayoff';
import PageTracker from '@components/common/PageTracker';
import FeaturedImage from '@components/marketing/FeaturedImage';
import HowItWorks from '@components/marketing/HowItWorks';
import KeyMetrics from '@components/marketing/KeyMetrics';
import Testimonials from '@components/marketing/Testimonials';
import ValueProps from '@components/marketing/ValueProps';
import { EXTERNAL_ROUTES } from '@utils/constants';
import {
  getAllFundsContent,
  getCityfundsPageContent,
  getNadaOfferingContent,
} from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

export default async function LandingPage() {
  const cityfundsPage = await getCityfundsPageContent();
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();
  const nada_offering = await getNadaOfferingContent();

  const cityfunds = fundsData
    .filter((item) => item?.fund_name !== 'Nada')
    .map((data) => {
      const content = fundsContent.find(
        (content) => content.fund_name === data.fund_name
      );
      return {
        fund_data: data,
        fund_content: data.fund_name === 'Nada' ? nada_offering : content,
      };
    });

  return (
    <PageTracker pageName="Get Started">
      <CityfundHero
        banner={cityfundsPage?.hero_banner}
        feature={cityfundsPage?.marketing_hero}
        logos={cityfundsPage?.logos}
        cityfunds={cityfunds}
      />
      <KeyMetrics metrics={cityfundsPage?.metrics} />

      <FeaturedImage
        feature={cityfundsPage?.cityfunds_feature}
        btnText="Explore Offerings"
        link={process.env.NEXT_PUBLIC_WEB_APP_URL}
        isWide
      />
      <FeaturedImage
        feature={cityfundsPage?.hei_feature}
        component={<EquityPayoff />}
        isWide
      />
      <EquityChart />

      <HowItWorks
        video={cityfundsPage?.video}
        tutorials={cityfundsPage?.tutorials}
        btnText="Sign Up"
        link={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`}
      />
      <Testimonials testimonials={cityfundsPage?.testimonials} />
      <ValueProps
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        valueProps={cityfundsPage?.values}
        link={EXTERNAL_ROUTES.HUBSPOT_FAQS}
        linkText="See All FAQs"
      />
    </PageTracker>
  );
}
