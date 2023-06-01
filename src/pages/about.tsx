import PageLayout from '@components/PageLayout';
import CardSlider from '@sections/CardSlider';
import CareersCTA from '@sections/CareersCTA';
import FeaturedLogos from '@sections/FeaturedLogos';
import LongFormText from '@sections/LongFormText';
import PageHero from '@sections/PageHero';
import TextSlider from '@sections/TextSlider';
import { FEATURED_BACKERS, OUR_VALUES } from '@utils/constants';

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        heading="Create products that unlock wealth & financial freedom."
        primaryText="Unlock diversified real estate portfolios with passive income in the nations top cities."
        heroImages={[
          {
            name: 'About',
            imageUrl: '/images/about-hero.png',
          },
        ]}
      />
      <LongFormText
        overline="We are on a Mission"
        title="Our Story"
        content={[]}
      />
      <FeaturedLogos overline="World Class Backing" logos={FEATURED_BACKERS} />
      <CardSlider
        heading="Our Team"
        primaryText={
          'Cityfunds is the only investment platform that provides direct access to diversified portfolios of owner-occupied homes in the nation’s top cities.'
        }
        cards={[
          {
            title: 'John Green',
            description: 'Founder & CEO',
            imageUrl: '/images/john.png',
          },
          {
            title: 'Mauricio Delgado',
            description: 'Co-Founder & CFO',
            imageUrl: '/images/mauricio.png',
          },
          {
            title: 'Sundance Brennan',
            description: 'VP Revenue',
            imageUrl: '/images/sundance.png',
          },
          {
            title: 'Jeremy Males',
            description: 'VP Investments',
            imageUrl: '/images/jeremy.png',
          },
        ]}
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
