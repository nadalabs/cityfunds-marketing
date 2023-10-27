import FeaturedImage from '@components/FeaturedImage';
import FeaturedLogos from '@components/FeaturedLogos';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import FaqsSection from '@components/cityfunds/NadaFaqs';
import TextSlider from '@components/cityfunds/TextSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import { SectionWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
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
        heading="Real Estate Investing Reinvented"
        btnText="Explore Offerings"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        btnTextSecondary="Schedule a Call"
        onClickSecondary={() =>
          window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')
        }
        primaryText="Diversified real estate portfolios in the nation's top cities."
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
        maxWidth={700}
      />
      <FeaturedLogos
        overline="Featured In"
        logos={investorsPage?.logos}
        seeMore
      />
      <SectionWrapper>
        <LongFormText title="Our Mission" content={investorsPage?.ourMission} />
      </SectionWrapper>
      <CityfundSlider cityfunds={cityfunds} isHome />

      <SectionWrapper>
        <Heading style={{ marginBottom: '-4rem' }}>Our Performance</Heading>
        <div style={{ marginBottom: isMobile ? '-7rem' : 0 }}>
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
        </div>
      </SectionWrapper>

      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={investorsPage?.values}
      />
      <FaqsSection
        faqs={investorsPage?.questions}
        seeAllUrl={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/cityfunds`}
      />
      <SectionWrapper>
        <FeaturedImage
          heading="Trusted by 10,000+ Investors"
          primaryText="With $1.8M+ capital invested"
          imageUrl="/images/america-states.png"
          btnText="Schedule a Call"
          onClick={() => window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')}
          isWide
        />
      </SectionWrapper>
      <SectionWrapper>
        <FeaturedImage
          overline="Have any questions?"
          heading="Let’s Talk"
          primaryText="Our team is licensed and standing by to answer your questions and share the Cityfunds strategy in private consultations. Contact Deyon Robertson, our Investor Relations Lead today to learn more and get access to private offerings."
          imageUrl="/images/deyon.png"
          btnText="Schedule a Call"
          onClick={() => window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')}
          isReversed
        />
      </SectionWrapper>
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
