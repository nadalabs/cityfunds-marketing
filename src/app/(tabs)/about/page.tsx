import CareersCTA from '@components/about/CareersCTA';
import TeamSlider from '@components/about/TeamSlider';
import LongFormText from '@components/common/LongFormText';
import PageHero from '@components/common/PageHero';
import PageTracker from '@components/common/PageTracker';
import LogoSoup from '@components/marketing/LogoSoup';
import ValueProps from '@components/marketing/ValueProps';
import { SectionWrapper } from '@elements/Containers';
import { getAboutPageContent } from 'lib/sanity';

export default async function AboutPage() {
  const aboutPage = await getAboutPageContent();

  return (
    <PageTracker pageName="About">
      <PageHero feature={aboutPage?.about_hero} />
      <SectionWrapper>
        <LongFormText
          title="Our Story"
          overline="We are on a Mission"
          content={aboutPage?.ourStory}
          isNotWide
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
    </PageTracker>
  );
}
