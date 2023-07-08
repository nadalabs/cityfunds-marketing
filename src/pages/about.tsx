import FeaturedLogos from '@components/FeaturedLogos';
import CareersCTA from '@components/about/CareersCTA';
import TeamSlider from '@components/about/TeamSlider';
import TextSlider from '@components/cityfunds/TextSlider';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { Heading, LongText, Overline } from '@elements/Typography';
import { FEATURED_BACKERS, OUR_VALUES } from '@utils/constants';
import { teammateIndexQuery } from 'lib/queries';
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
        isTextWide
      />
      <SectionWrapper>
        <Overline>We are on a Mission</Overline>
        <Heading>Our Story</Heading>
        <LongText>
          Nada is an investment & finance platform that’s redefined how anyone
          can access real estate.‍ Powered by a diverse group of talented and
          purpose-driven people. We're not just a company; we're a team of
          people who want to do good in the world.
        </LongText>
        <LongText>
          Founded on the belief that the financial system built around real
          estate is unnecessarily complicated, we set out to level the playing
          field with new products focused on transparency and simplicity.‍
          Anyone can now access real estate for as little as $100 and homeowners
          can access their home equity with no monthly payments.
        </LongText>
      </SectionWrapper>
      <FeaturedLogos overline="World Class Backing" logos={FEATURED_BACKERS} />
      <TeamSlider teammates={teammates} />
      <TextSlider
        overline="How We Think"
        heading="Our Values"
        valueProps={OUR_VALUES}
      />
      <CareersCTA />
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
