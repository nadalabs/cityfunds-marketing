import CareersCTA from '@components/about/CareersCTA';
import TeamSlider from '@components/about/TeamSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import LogoSoup from '@components/marketing/LogoSoup';
import ValueProps from '@components/marketing/ValueProps';
import { SectionWrapper } from '@elements/Containers';
import useIsMobile from '@hooks/useIsMobile';
import { trackPageView } from '@utils/helpers';
import { getAboutPageContent } from 'lib/sanity';
import { useEffect } from 'react';

export default function AboutPage({ aboutPage }) {
  const isMobile = useIsMobile();

  useEffect(() => {
    trackPageView('About Page Viewed');
  });

  return (
    <>
      <PageHero
        heading="Create products that unlock wealth & financial freedom."
        primaryText="Unlock diversified real estate portfolios with passive income in the nations top cities."
        heroImage="/images/about-hero.png"
        maxWidth={1000}
      />
      <SectionWrapper style={{ maxWidth: isMobile ? '100%' : '75%' }}>
        <LongFormText
          title="Our Story"
          overline="We are on a Mission"
          content={aboutPage?.ourStory}
        />
      </SectionWrapper>
      <LogoSoup overline="World Class Backing" logos={aboutPage?.logos} />
      <TeamSlider teammates={aboutPage?.teammates} />
      <ValueProps
        overline="How We Think"
        heading="Our Values"
        valueProps={aboutPage?.values}
      />
      <CareersCTA />
    </>
  );
}

export async function getStaticProps() {
  const aboutPage = await getAboutPageContent();

  return {
    props: { aboutPage },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
