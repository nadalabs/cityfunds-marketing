import FeaturedImage from '@components/FeaturedImage';
import FeaturedLogos from '@components/FeaturedLogos';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import InvestorPromo from '@components/cityfunds/InvestorPromo';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import NadaFaqs from '@components/cityfunds/NadaFaqs';
import Testimonials from '@components/cityfunds/Testimonials';
import TextSlider from '@components/cityfunds/TextSlider';
import Webinanars from '@components/cityfunds/Webinars';
import EmailCapture from '@components/common/EmailCapture';
import PageHero from '@components/common/PageHero';
import { SectionWrapper } from '@elements/Containers';
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
        primaryText="Diversified real estate portfolios in the nation’s top cities."
        btnText="Explore Offerings"
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
        maxWidth={700}
      />
      <FeaturedLogos
        overline="Featured In"
        logos={cityfundsPage?.logos}
        seeMore
      />
      <CityfundSlider cityfunds={cityfunds} isHome />
      {/* <HowItWorks
        overline="Real Estate Investing Simplified"
        tutorials={cityfundsPage?.tutorials}
        btnText="Sign Up"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`, '_blank')
        }
        isPhoneFrame
      /> */}
      <SectionWrapper>
        <FeaturedImage
          overline="Why Cityfunds?"
          heading="Location, Location, Location"
          primaryText="Investing in real estate is all about location, yet the increased
            cost of living has made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes."
          imageUrl="/images/location-tiles.png"
          btnText="Explore Offerings"
          onClick={() =>
            window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
          }
          isReversed
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
      </SectionWrapper>
      <SectionWrapper>
        <FeaturedImage
          overline="What am I investing in?"
          heading="Diversified Portfolios of Homes"
          primaryText="Own fractional shares of peoples homes across the nations top cities on day one."
          imageUrl="/images/map.png"
          btnText="Explore Offerings"
          onClick={() =>
            window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
          }
          isWide
        />
      </SectionWrapper>
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={cityfundsPage?.values}
      />
      <NadaFaqs
        faqs={cityfundsPage?.questions}
        seeAllUrl={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/cityfunds`}
      />
      <Testimonials testimonials={cityfundsPage?.testimonials} />
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
  console.log(cityfundsPage);
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
