import CityfundsGrid from '@components/cityfunds/CityfundGrid';
import CityfundHero from '@components/cityfunds/CityfundHero';
import EquityChart from '@components/cityfunds/EquityChart';
import EquityPayoff from '@components/cityfunds/EquityPayoff';
import InvestorPromo from '@components/cityfunds/InvestorPromo';
import EmailCapture from '@components/common/EmailCapture';
import PageTracker from '@components/common/PageTracker';
import FeaturedImage from '@components/marketing/FeaturedImage';
import HowItWorks from '@components/marketing/HowItWorks';
import KeyMetrics from '@components/marketing/KeyMetrics';
import Testimonials from '@components/marketing/Testimonials';
import ValueProps from '@components/marketing/ValueProps';
import Webinars from '@components/marketing/Webinars';
import { EXTERNAL_ROUTES } from '@utils/constants';
import {
  getAllFundsContent,
  getCityfundsAppContent,
  getCityfundsPageContent,
} from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

export default async function HomePage() {
  const cityfundsPage = await getCityfundsPageContent();
  const cityfundsApp = await getCityfundsAppContent();
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
      <CityfundHero
        cityfunds={cityfunds}
        hero={cityfundsPage?.marketing_hero}
        banner={cityfundsPage?.hero_banner}
        logos={cityfundsPage?.logos}
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
        isReversed
        isWide
      />
      <EquityChart />
      <CityfundsGrid cityfunds={cityfunds} />

      <HowItWorks
        title="Ways to Invest"
        tutorials={cityfundsPage?.invest_options}
        scrollId="ways-to-invest"
        isReversed
      />
      <HowItWorks
        video={cityfundsPage?.video}
        tutorials={cityfundsPage?.tutorials}
        btnText="Sign Up"
        link={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`}
        scrollId="how-it-works"
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
        feature={cityfundsApp?.ira_401k_form}
        btnText="Get Started"
        link={EXTERNAL_ROUTES.IRA_FORM}
      />
      <FeaturedImage
        overline="FOR HOMEOWNERS"
        feature={cityfundsPage?.homeowners_feature}
        btnText="Learn More"
        link={process.env.NEXT_PUBLIC_NADA_URL}
        isBackground
      />

      {cityfundsApp?.investor_promo?.show_promo && (
        <InvestorPromo promo={cityfundsApp?.investor_promo} />
      )}
      {cityfunds
        .filter(({ fund_content }) => fund_content?.investor_promo?.show_promo)
        .map(({ fund_content }, idx) => (
          <InvestorPromo
            key={idx}
            promo={fund_content.investor_promo}
            isReversed={idx % 2 !== 1}
          />
        ))}

      {cityfundsApp?.investor_webinar && (
        <Webinars webinar={cityfundsApp?.investor_webinar} />
      )}
      <EmailCapture isPopup />
    </PageTracker>
  );
}
