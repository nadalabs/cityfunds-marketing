import CityfundsGrid from '@components/cityfunds/CityfundGrid';
import EquityChart from '@components/cityfunds/EquityChart';
import EquityPayoff from '@components/cityfunds/EquityPayoff';
import InvestorPromo from '@components/cityfunds/InvestorPromo';
import EmailCapture from '@components/common/EmailCapture';
import PageHero from '@components/common/PageHero';
import PageTracker from '@components/common/PageTracker';
import FeaturedImage from '@components/marketing/FeaturedImage';
import HowItWorks from '@components/marketing/HowItWorks';
import KeyMetrics from '@components/marketing/KeyMetrics';
import Testimonials from '@components/marketing/Testimonials';
import ValueProps from '@components/marketing/ValueProps';
import Webinanars from '@components/marketing/Webinars';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { getAllFundsContent, getCityfundsPageContent } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

export default async function HomePage() {
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
    <PageTracker pageName="Cityfunds">
      <PageHero
        cityfunds={cityfunds}
        feature={cityfundsPage?.marketing_hero}
        banner={cityfundsPage?.hero_banner}
        btnText="Explore Offerings"
        logoTitle="Featured In"
        logos={cityfundsPage?.logos}
        link={process.env.NEXT_PUBLIC_WEB_APP_URL}
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
      <CityfundsGrid cityfunds={cityfunds} />

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
      <FeaturedImage
        overline="FOR HOMEOWNERS"
        feature={cityfundsPage?.homeowners_feature}
        btnText="Learn More"
        link={process.env.NEXT_PUBLIC_NADA_URL}
        isBackground
      />

      {cityfundsPage?.promo && <InvestorPromo promo={cityfundsPage?.promo} />}
      <Webinanars webinar={cityfundsPage?.webinar} />
      <EmailCapture formName="Cityfunds" isPopup />
    </PageTracker>
  );
}
