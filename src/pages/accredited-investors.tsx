import FeaturedImage from '@components/FeaturedImage';
import AccreditedSlider from '@components/cityfunds/AccreditedSlider';
import DocumentCenter from '@components/cityfunds/DocumentCenter';
import FaqsSection from '@components/cityfunds/FaqsSection';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import Testimonials from '@components/cityfunds/Testimonials';
import TextSlider from '@components/cityfunds/TextSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { EXTERNAL_ROUTES, FEATURED_CITIES } from '@utils/constants';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  ourFocusQuery,
} from 'lib/queries';
import { getClient } from 'lib/sanity.server';

export default function AccreditedInvestorsPage({
  testimonials,
  values,
  ourFocus,
}) {
  return (
    <PageLayout>
      <PageHero
        heading="Invest in Top Cities"
        primaryText="Novel index-like funds for a city’s home equity market."
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        formName="Accredited Lead"
        heroImages={FEATURED_CITIES.map(({ name, images }) => ({
          name,
          heroImage: images.heroImage,
        }))}
      />
      <AccreditedSlider
        heading="Our Funds"
        primaryText="Pick the fund that suits you, or invest in all six."
        cards={FEATURED_CITIES}
      />
      <DocumentCenter funds={FEATURED_CITIES} />

      <SectionWrapper>
        <LongFormText title="Our Focus" content={ourFocus} />
        <KeyMetrics
          metrics={[
            {
              label: 'Total Invested',
              value: 1.97,
              formattingFn: (val) => `$${val}M`,
              decimals: 2,
            },
            {
              label: 'Average NAV',
              value: 10.68,
              prefix: '$',
              decimals: 2,
            },
            {
              label: 'Properties Funded',
              value: 60,
              formattingFn: (val) => `${val}+`,
            },
          ]}
        />
        <KeyMetrics
          metrics={[
            {
              label: 'Total Appreciation',
              value: 120,
              formattingFn: (val) => `$${val}K`,
            },
            {
              label: '1 Year Return',
              value: 6.83,
              formattingFn: (val) => `${val}%`,
              decimals: 2,
            },
            {
              label: 'Average Appreciation',
              value: 14,
              formattingFn: (val) => `${val}%`,
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
      <Testimonials reviews={testimonials} />
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
  const ourFocusData = await getClient(preview).fetch(ourFocusQuery);
  const ourFocus = ourFocusData?.summary?.content;

  return {
    props: { testimonials, values, ourFocus },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
