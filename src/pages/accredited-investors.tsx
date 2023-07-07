import KeyMetrics from '@components/cityfunds/KeyMetrics';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import FaqsSection from '@components/cityfunds/FaqsSection';
import PageHero from '@components/common/PageHero';
import TextSlider from '@components/cityfunds/TextSlider';
import { EXTERNAL_ROUTES, FEATURED_CITIES, VALUE_PROPS } from '@utils/constants';
import { teammateIndexQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

export default function AccreditedPage({ teammates }) {
  return (
    <PageLayout>
      <PageHero
        heading="Helping Homeowners Reduce Debt"
        primaryText="Helping 10 Million Homeowners reduce their debt through home equity investments."
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        formName="Accredited Lead"
        heroImages={FEATURED_CITIES}
        isTextWide
      />
      <SectionWrapper>
        <Overline>We are on a Mission</Overline>
        <Heading>Our Focus</Heading>
        <PrimaryText>
          We offer a diversified portfolio of home equity investments that
          provide investors with exposure into some of the top Markets around
          the U.S (Austin, Dallas, Miami, and Tampa) for as little as $100.
        </PrimaryText>
        <PrimaryText>
          A Home Equity Investment is a financial agreement that allows
          investors to tap into thehomeowner’s equity in exchange for a portion
          of the home's future appreciation. This is secured via a lien on the
          home
        </PrimaryText>
      </SectionWrapper>
      <KeyMetrics
          metrics={[
            {
              label: 'Total Investors',
              value: 7000,
              formattingFn: (val) => `${val.toLocaleString('us-en')}+`,
            },
            {
              label: 'Properties Funded',
              value: 60,
              formattingFn: (val) => `${val}+`,
            },
            {
              label: 'Avgerage Appreciation',
              value: 11.7,
              formattingFn: (val) => `${val}%`,
              decimals: 1,
            },
          ]}
        />
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={VALUE_PROPS}
      />
    <FaqsSection />

    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const teammates = await getClient(preview).fetch(teammateIndexQuery);

  return {
    props: { teammates },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
