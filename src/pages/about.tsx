import FeaturedLogos from '@components/FeaturedLogos';
import CareersCTA from '@components/about/CareersCTA';
import TeamSlider from '@components/about/TeamSlider';
import TextSlider from '@components/cityfunds/TextSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import {
  backersLogosQuery,
  nadaValuesQuery,
  ourStoryQuery,
  teammateIndexQuery,
} from 'lib/queries';
import { sanityClient } from 'lib/sanity';

export default function AboutPage({ teammates, values, logos, ourStory }) {
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
        maxWidth={1000}
      />
      <SectionWrapper>
        <LongFormText
          title="Our Story"
          overline="We are on a Mission"
          content={ourStory}
        />
      </SectionWrapper>
      <FeaturedLogos overline="World Class Backing" logos={logos} />
      <TeamSlider teammates={teammates} />
      <TextSlider
        overline="How We Think"
        heading="Our Values"
        valueProps={values}
      />
      <CareersCTA />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const teammates = await sanityClient.fetch(teammateIndexQuery);
  const values = await sanityClient.fetch(nadaValuesQuery);
  const logos = await sanityClient.fetch(backersLogosQuery);
  const ourStoryData = await sanityClient.fetch(ourStoryQuery);
  const ourStory = ourStoryData?.summary?.content;

  return {
    props: { teammates, values, logos, ourStory },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
