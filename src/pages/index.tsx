import AccreditedGrid from '@components/cityfunds/AccreditedGrid';
import CityfundsGrid from '@components/cityfunds/CityfundGrid';
import InvestChart from '@components/cityfunds/InvestChart';
import InvestorPromo from '@components/cityfunds/InvestorPromo';
import EmailCapture from '@components/common/EmailCapture';
import PageHero from '@components/common/PageHero';
import FeaturedImage from '@components/marketing/FeaturedImage';
import HowItWorks from '@components/marketing/HowItWorks';
import KeyMetrics from '@components/marketing/KeyMetrics';
import Testimonials from '@components/marketing/Testimonials';
import ValueProps from '@components/marketing/ValueProps';
import Webinanars from '@components/marketing/Webinars';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { trackPageView } from '@utils/helpers';
import { getAllFundsContent, getCityfundsPageContent } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';
import { useEffect } from 'react';

interface CityfundsPageProps {
  cityfundsPage?: any;
  cityfunds: any[];
  partner: any;
}

export default function CityfundsPage({
  cityfundsPage,
  cityfunds,
  partner,
}: CityfundsPageProps) {
  const bannerText = partner?.promo?.banner
    ? cityfundsPage?.promo?.banner
    : cityfundsPage?.webinar?.banner;

  useEffect(() => {
    trackPageView('Cityfunds Page Viewed');
  });

  return (
    <>
      <PageHero
        cityfunds={cityfunds}
        feature={cityfundsPage?.marketing_hero}
        banner={cityfundsPage?.hero_banner}
        btnText="Explore Offerings"
        logoTitle="Featured In"
        logos={cityfundsPage?.logos}
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        // isBanner={!!bannerText}
      />
      <KeyMetrics
        metrics={[
          {
            label: 'Total Investors',
            value: 15,
            formattingFn: (val) => `${val}K+`,
          },
          {
            label: 'Home Equity Investments',
            value: 100,
            formattingFn: (val) => `${val}+`,
          },
          {
            label: 'Gross Asset Value',
            value: 40,
            formattingFn: (val) => `$${val}M+`,
          },
        ]}
      />
      <FeaturedImage
        feature={cityfundsPage?.cityfunds_feature}
        btnText="Explore Offerings"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        isWide
      />
      <FeaturedImage
        feature={cityfundsPage?.hei_feature}
        // ctaComponent={<EquityPayoff />}
        isWide
      />
      <InvestChart />

      <CityfundsGrid cityfunds={cityfunds} />
      <AccreditedGrid cityfunds={cityfunds} />

      <HowItWorks
        videoUrl={cityfundsPage?.video_url}
        tutorials={cityfundsPage?.tutorials}
        btnText="Sign Up"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`, '_blank')
        }
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
        onClick={() => window.open(process.env.NEXT_PUBLIC_NADA_URL, '_blank')}
        isBackground
      />

      {cityfundsPage?.promo && <InvestorPromo promo={cityfundsPage?.promo} />}
      {cityfundsPage?.webinar && (
        <Webinanars webinar={cityfundsPage?.webinar} />
      )}
      <EmailCapture formName="Cityfunds" isPopup />
    </>
  );
}

export async function getStaticProps() {
  const cityfundsPage = await getCityfundsPageContent();
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();
  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  return {
    props: { cityfundsPage, cityfunds },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
