import FeaturedImage from '@components/FeaturedImage';
import FeaturedLogos from '@components/FeaturedLogos';
import CityfundCards from '@components/cityfunds/CityfundCards';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import FaqsSection from '@components/cityfunds/NadaFaqs';
import TextSlider from '@components/cityfunds/TextSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { PrimaryButton, SecondaryButton } from '@elements/Buttons';
import { SectionWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import {
  EXTERNAL_ROUTES,
  FAQS,
  FUND_STATUS,
  REGULATION,
} from '@utils/constants';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  ourFocusQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import { getAllFundsContent, sanityClient } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

export default function AccreditedInvestorsPage({
  cityfunds,
  values,
  logos,
  ourFocus,
}) {
  const isMobile = useIsMobile();
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout hideLinks>
      <PageHero
        heading="Real Estate Investing Reinvented"
        heroCTA={
          <>
            <PrimaryButton onClick={() => scrollToId('cityfunds')}>
              View Our Offerings
            </PrimaryButton>
            <SecondaryButton
              onClick={() =>
                window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')
              }
              style={{ color: 'white', marginLeft: '1rem' }}
            >
              Schedule a Call
            </SecondaryButton>
          </>
        }
        primaryText="Diversified real estate portfolios in the nation's top cities."
        heroImages={cityfunds
          .filter(
            ({ fund_data }) =>
              fund_data?.regulation === REGULATION.RETAIL &&
              fund_data?.fund_status === FUND_STATUS.ACTIVE
          )
          .map(({ fund_content }) => ({
            name: fund_content?.fund_name,
            heroImage: fund_content?.image_gallery[0],
          }))}
        isTextWide
      />
      <FeaturedLogos overline="Featured In" logos={logos} seeMore />
      <SectionWrapper>
        <LongFormText title="Our Mission" content={ourFocus} />
      </SectionWrapper>
      <CityfundCards cityfunds={cityfunds} />

      <SectionWrapper>
        <Heading style={{ marginBottom: '-4rem' }}>Our Performance</Heading>
        <div style={{ marginBottom: isMobile ? '-7rem' : 0 }}>
          <KeyMetrics
            metrics={[
              {
                label: 'Total Gross Asset Value',
                value: 35,
                formattingFn: (val) => `$${val}M+`,
              },
              {
                label: 'Properties Funded',
                value: 60,
                formattingFn: (val) => `${val}+`,
              },
              {
                label: 'Total Members on Platform',
                value: 8,
                formattingFn: (val) => `${val}k+`,
              },
            ]}
          />
        </div>
        <KeyMetrics
          metrics={[
            {
              label: 'Average Appreciation',
              value: 14,
              formattingFn: (val) => `${val}%`,
            },
            {
              label: 'Major Markets',
              value: 4,
            },
          ]}
        />
      </SectionWrapper>

      <TextSlider
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={values}
      />
      <FaqsSection faqs={FAQS.slice(0, 3)} />
      <SectionWrapper>
        <FeaturedImage
          heading="Trusted by 8,000+ Investors"
          primaryText="With $1.8M+ capital invested"
          imageUrl="/images/america-states.png"
          btnText="Schedule a Call"
          onClick={() => window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')}
          isReversed
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
          isShort
        />
      </SectionWrapper>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();
  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  const testimonials = await sanityClient.fetch(cityfundsTestimonialsQuery);
  const values = await sanityClient.fetch(cityfundsValuesQuery);
  const logos = await sanityClient.fetch(pressLogosQueryQuery);
  const ourFocusData = await sanityClient.fetch(ourFocusQuery);
  const ourFocus = ourFocusData?.summary?.content;

  return {
    props: { cityfunds, testimonials, logos, values, ourFocus },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
