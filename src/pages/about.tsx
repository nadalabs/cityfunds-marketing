import PageLayout from '@components/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import {
  Heading,
  Overline,
  PrimaryText,
  SecondaryText,
} from '@elements/Typography';
import CardSlider from '@sections/CardSlider';
import CareersCTA from '@sections/CareersCTA';
import FeaturedLogos from '@sections/FeaturedLogos';
import PageHero from '@sections/PageHero';
import TextSlider from '@sections/TextSlider';
import { FEATURED_BACKERS, OUR_VALUES } from '@utils/constants';
import { teammateIndexQuery } from 'lib/queries';
import { urlForImage } from 'lib/sanity';
import { getClient } from 'lib/sanity.server';

export default function AboutPage({ teammates }) {
  return (
    <PageLayout>
      <PageHero
        heading="Create products that unlock wealth & financial freedom."
        primaryText="Unlock diversified real estate portfolios with passive income in the nations top cities."
        heroImages={[
          {
            name: 'About',
            heroImage: '/images/about-hero.png',
          },
        ]}
      />
      {/* <LongFormText
        overline={`We are on a Mission`}
        title={`Our Story`}
        content={``}
      /> */}
      <SectionWrapper>
        <Overline>We are on a Mission</Overline>
        <Heading>Our Story</Heading>
        <PrimaryText>
          Nada is an investment, finance, and banking platform that has
          redefined how everyone accesses real estate assets.‍
        </PrimaryText>
        <PrimaryText>
          Nada was founded on the belief that the financial system built around
          real estate assets was far too restrictive and unnecessarily
          complicated. We realized that the industry insiders and the wealthy
          had an unfair advantage. So, we set out to level the playing field by
          creating new financial products with transparency and simplicity built
          into every step.‍
        </PrimaryText>
        <PrimaryText>
          Founded by a couple of non-conformists with the experience and grit to
          break down these barriers. Co-founder and CEO John Green spent his 20s
          as a full-time touring & recording punk rocker before his career
          leading risk and strategy within the mortgage industry. Co-founder and
          CFO Mauricio Delgado dropped out of Stanford to start his first
          company at 19 before launching a career spanning Wall Street as CEO of
          an auto fintech company.
        </PrimaryText>
        <PrimaryText>
          Today, Nada is powered by a diverse group of talented and
          purpose-driven people who believe everyone deserves access to real
          estate wealth. We have created financial products enabling everyone to
          access home equity by investing as little as $250 in a single city or
          spending equity on a Visa® debit card. We're not just a company; we're
          a team of people who want to do good in the world.
        </PrimaryText>
      </SectionWrapper>
      <FeaturedLogos overline="World Class Backing" logos={FEATURED_BACKERS} />
      <CardSlider
        heading="Our Team"
        primaryText={
          'Cityfunds is the only investment platform that provides direct access to diversified portfolios of owner-occupied homes in the nation’s top cities.'
        }
        cards={teammates?.map(({ name, role, linkedIn, image }) => ({
          name,
          description: (
            <SecondaryText style={{ color: 'white', margin: 0 }}>
              {role}
            </SecondaryText>
          ),
          cardImage: urlForImage(image).url(),
          link: linkedIn,
          isSmallText: true,
        }))}
      />
      <TextSlider
        overline="Our Values"
        heading="How We Think"
        primaryText="We have plenty of reasons."
        valueProps={OUR_VALUES}
      />
      <CareersCTA />
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // const data = await getClient(preview).fetch(contentByLabelQuery, {
  //   label: 'our-story',
  // });
  const teammates = await getClient(preview).fetch(teammateIndexQuery);
  // const content = data?.content ?? null;

  return {
    props: { teammates },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
