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
import { PrimaryButton, SecondaryButton } from '@elements/Buttons';
import { SectionWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES, FAQS, FEATURED_CITIES } from '@utils/constants';
import { REGULATION } from '@utils/models';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  ourFocusQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import { getClient } from 'lib/sanity.server';

export default function AccreditedInvestorsPage({ values, logos, ourFocus }) {
  const retailFunds = FEATURED_CITIES.filter(
    ({ information }) => information.regulation !== REGULATION.REG_D
  );
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
      <DocumentCenter funds={FEATURED_CITIES} />
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
