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
} from '@pages/api/queries';

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
        isTextWide
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

export async function getStaticProps({ params, preview = false }) {
  const teammates = await getClient(preview).fetch(teammateIndexQuery);
  const values = await getClient(preview).fetch(nadaValuesQuery);
  const logos = await getClient(preview).fetch(backersLogosQuery);
  const ourStoryData = await getClient(preview).fetch(ourStoryQuery);
  const ourStory = ourStoryData?.summary?.content;

  return {
    props: { teammates, values, logos, ourStory },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
