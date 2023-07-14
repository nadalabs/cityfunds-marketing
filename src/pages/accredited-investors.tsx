import FeaturedImage from '@components/FeaturedImage';
import FeaturedLogos from '@components/FeaturedLogos';
import AccreditedSlider from '@components/cityfunds/AccreditedSlider';
import DocumentCenter from '@components/cityfunds/DocumentCenter';
import FaqsSection from '@components/cityfunds/FaqsSection';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import TextSlider from '@components/cityfunds/TextSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES, FEATURED_CITIES } from '@utils/constants';
import { REGULATION } from '@utils/models';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  ourFocusQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import { getClient } from 'lib/sanity.server';

export default function AccreditedInvestorsPage({
  testimonials,
  values,
  logos,
  ourFocus,
}) {
  const retailFunds = FEATURED_CITIES.filter(
    ({ information }) => information.regulation !== REGULATION.REG_D
  );
  const isMobile = useIsMobile();

  return (
    <PageLayout>
      <PageHero
        heading="Real Estate Investing Reinvented"
        primaryText="Diversified real estate portfolios in the nation's top cities."
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        formName="Accredited Lead"
        heroImages={retailFunds.map(({ name, images }) => ({
          name,
          heroImage: images.heroImage,
        }))}
        isTextWide
      />
      <FeaturedLogos overline="Featured In" logos={logos} seeMore />
      <SectionWrapper>
        <LongFormText title="Our Mission" content={ourFocus} />
      </SectionWrapper>
      <AccreditedSlider
        heading="Our Funds"
        primaryText="Pick the fund that suits you, or invest in all six."
        cards={FEATURED_CITIES}
      />

      <SectionWrapper>
        <Heading style={{marginBottom: '-4rem'}}>Our Performance</Heading>
        <div style={{marginBottom: isMobile ? '-7rem' : 0 }}>
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
      <FaqsSection />
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
      <DocumentCenter funds={FEATURED_CITIES} />
      <SectionWrapper>
        <FeaturedImage
          overline="Have any questions?"
          heading="Let’s Talk"
          primaryText="Deyon Robertson is the Investor Relations Lead at Nada. With a background in investment banking at Citygroup, he brings extensive experience in Technology, Media, and Telecommunications. Mr. Robertson is licensed and focused on communicating Nada's shareholder value strategy to Cityfund investors."
          imageUrl="/images/deyon.png"
          btnText="Schedule a Call"
          onClick={() => window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')}
          isShort
        />
      </SectionWrapper>
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const testimonials = await getClient(preview).fetch(
    cityfundsTestimonialsQuery
  );
  const values = await getClient(preview).fetch(cityfundsValuesQuery);
  const logos = await getClient(preview).fetch(pressLogosQueryQuery);
  const ourFocusData = await getClient(preview).fetch(ourFocusQuery);
  const ourFocus = ourFocusData?.summary?.content;

  return {
    props: { testimonials, logos, values, ourFocus },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
