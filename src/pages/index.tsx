import FeaturedImage from '@components/FeaturedImage';
import AccredBanner from '@components/cityfunds/AccredBanner';
import CityfundsGrid from '@components/cityfunds/CityfundGrid';
import CityfundsHero from '@components/cityfunds/CityfundsHero';
import EquityPayoff from '@components/cityfunds/EquityPayoff';
import InvestChart from '@components/cityfunds/InvestChart';
import EmailCapture from '@components/common/EmailCapture';
import HowItWorks from '@components/marketing/HowItWorks';
import KeyMetrics from '@components/marketing/KeyMetrics';
import Testimonials from '@components/marketing/Testimonials';
import ValueProps from '@components/marketing/ValueProps';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { trackPageView } from '@utils/helpers';
import { getAllFundsContent, getCityfundsPageContent } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const bannerText = partner?.promo?.banner
    ? cityfundsPage?.promo?.banner
    : cityfundsPage?.webinar?.banner;

  useEffect(() => {
    trackPageView('Cityfunds Page Viewed');
  });

  return (
    <>
      <CityfundsHero
        cityfunds={cityfunds}
        heading="Own a Piece of Your Favorite City"
        primaryText="Diversified Home Equity Investments in the nation's top cities."
        btnText="Explore Offerings"
        logos={cityfundsPage?.logos}
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        isBanner={!!bannerText}
        maxWidth={580}
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
        isBackground
      />
      <FeaturedImage
        feature={cityfundsPage?.cityfunds_feature}
        btnText="Explore Offerings"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
      />
      <FeaturedImage
        feature={cityfundsPage?.hei_feature}
        ctaComponent={<EquityPayoff />}
      />
      <InvestChart />

      <CityfundsGrid cityfunds={cityfunds} />
      <AccredBanner cityfunds={cityfunds} />
      <ValueProps
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        valueProps={cityfundsPage?.values}
        link={EXTERNAL_ROUTES.HUBSPOT_FAQS}
        linkText="See All FAQs"
      />
      <Testimonials testimonials={cityfundsPage?.testimonials} isBackground />
      <HowItWorks
        overline="Real Estate Investing Simplified"
        tutorials={cityfundsPage?.tutorials}
        btnText="Sign Up"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`, '_blank')
        }
        isPhoneFrame
      />
      <FeaturedImage
        overline="FOR HOMEOWNERS"
        feature={cityfundsPage?.homeowners_feature}
        btnText="Learn More"
        onClick={() => router.push(`/homeshares`)}
        isBackground
      />

      {/* {cityfundsPage?.promo && <InvestorPromo promo={cityfundsPage?.promo} />} */}
      {/* {cityfundsPage?.webinar && (
        <Webinanars webinar={cityfundsPage?.webinar} />
      )} */}
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
