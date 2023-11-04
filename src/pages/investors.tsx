import FeaturedImage from '@components/FeaturedImage';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import FaqsSection from '@components/cityfunds/NadaFaqs';
import TextSlider from '@components/cityfunds/TextSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import { SectionWrapper } from '@elements/Containers';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES, FUND_STATUS, REGULATION } from '@utils/constants';
import { trackPageView } from '@utils/helpers';
import { getAllFundsContent, getInvestorsPageContent } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';
import { useEffect } from 'react';

export default function InvestorsPage({ investorsPage, cityfunds }) {
  const isMobile = useIsMobile();
  useEffect(() => {
    trackPageView('Investors Page Viewed');
  });

  return (
    <>
      <PageHero
        heading="Creating New Real Estate Wealth"
        btnText="Explore Offerings"
        logos={investorsPage?.logos}
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        btnTextSecondary="Schedule a Call"
        onClickSecondary={() =>
          window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')
        }
        primaryText="Diversified Home Equity Investments in the nation's top cities."
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
      <SectionWrapper style={{ maxWidth: isMobile ? '100%' : '75%' }}>
        <LongFormText
          title="Our Strategy"
          content={investorsPage?.ourMission}
        />
      </SectionWrapper>
      <FeaturedImage
        feature={investorsPage?.hei_feature}
        btnText="Schedule a Call"
        onClick={() => window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')}
        isBackground
      />
      <CityfundSlider cityfunds={cityfunds} />
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        valueProps={investorsPage?.values}
      />
      <FaqsSection
        faqs={investorsPage?.questions}
        seeAllUrl={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/cityfunds`}
        isBackground
      />
      <FeaturedImage
        feature={investorsPage?.investors_feature}
        btnText="Schedule a Call"
        onClick={() => window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')}
        isReversed
      />
    </>
  );
}

export async function getStaticProps() {
  const investorsPage = await getInvestorsPageContent();
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();
  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  return {
    props: { investorsPage, cityfunds },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
