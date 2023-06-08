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
        isTextWide
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
          Nada is an investment & finance platform that’s redefined how anyone
          can access real estate.‍ Powered by a diverse group of talented and
          purpose-driven people. We're not just a company; we're a team of
          people who want to do good in the world.
        </PrimaryText>
        <PrimaryText>
          Founded on the belief that the financial system built around real
          estate is unnecessarily complicated, we set out to level the playing
          field with new products focused on transparency and simplicity.‍
          Anyone can now access real estate for as little as $100 and homeowners
          can access their home equity with no monthly payments.
        </PrimaryText>
      </SectionWrapper>
      <FeaturedLogos overline="World Class Backing" logos={FEATURED_BACKERS} />
      <CardSlider
        heading="Our Team"
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
        overline="How We Think"
        heading="Our Values"
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
