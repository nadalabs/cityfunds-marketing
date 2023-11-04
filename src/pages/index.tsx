import FeaturedImage from '@components/FeaturedImage';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import HowItWorks from '@components/cityfunds/HowItWorks';
import InvestorPromo from '@components/cityfunds/InvestorPromo';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import NadaFaqs from '@components/cityfunds/NadaFaqs';
import Testimonials from '@components/cityfunds/Testimonials';
import TextSlider from '@components/cityfunds/TextSlider';
import Webinanars from '@components/cityfunds/Webinars';
import EmailCapture from '@components/common/EmailCapture';
import PageHero from '@components/common/PageHero';
import { EXTERNAL_ROUTES, FUND_STATUS, REGULATION } from '@utils/constants';
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
  console.log(cityfundsPage);

  return (
    <>
      <PageHero
        heading="Own a Piece of Your Favorite City"
        primaryText="Diversified Home Equity Investments in the nation's top cities."
        btnText="Explore Offerings"
        logos={cityfundsPage?.logos}
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        heroImages={cityfunds
          .filter(
            ({ fund_data }) =>
              fund_data?.regulation === REGULATION.RETAIL &&
              fund_data?.fund_status !== FUND_STATUS.NEW_OFFERING
          )
          .map(({ fund_content }) => ({
            name: fund_content?.fund_name,
            heroImage: fund_content?.image_gallery[0],
          }))}
        bannerText={!!bannerText}
        maxWidth={720}
      />
      <KeyMetrics
        metrics={[
          {
            label: 'Total Investors',
            value: 10,
            formattingFn: (val) => `${val}K+`,
          },
          {
            label: 'Properties Funded',
            value: 70,
            formattingFn: (val) => `${val}+`,
          },
          {
            label: 'Gross Asset Value',
            value: 35,
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
      />
      <FeaturedImage
        feature={cityfundsPage?.hei_feature}
        btnText="Explore Offerings"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
      />
      <CityfundSlider cityfunds={cityfunds} isHome />
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        valueProps={cityfundsPage?.values}
      />
      <NadaFaqs
        faqs={cityfundsPage?.questions}
        seeAllUrl={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/cityfunds`}
      />
      <Testimonials testimonials={cityfundsPage?.testimonials} />
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
        feature={cityfundsPage?.homeowners_feature}
        btnText="Learn More"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
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
