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
      <PageHero feature={aboutPage?.about_hero} />
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
      <CareersCTA description={aboutPage?.careers} />
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
