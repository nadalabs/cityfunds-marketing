import PageLayout from '@components/PageLayout';
import CardSlider from '@sections/CardSlider';
import CareersCTA from '@sections/CareersCTA';
import FeaturedLogos from '@sections/FeaturedLogos';
import LongFormText from '@sections/LongFormText';
import PageHero from '@sections/PageHero';
import TextSlider from '@sections/TextSlider';
import { OUR_VALUES } from '@utils/constants';

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
      <FeaturedLogos
        overline="World Class Backing"
        logos={[
          {
            name: 'Live Oak',
            imageUrl: '/icons/live-oak.svg',
            link: 'https://liveoakvp.com/',
          },
          {
            name: 'Revolution',
            imageUrl: '/icons/revolution.svg',
            link: 'https://revolution.com/',
          },
          {
            name: 'Capital Factory',
            imageUrl: '/icons/capital-factory.svg',
            link: 'https://www.capitalfactory.com/',
          },
          {
            name: 'Sweater Ventures',
            imageUrl: '/icons/sweater.svg',
            link: 'https://www.sweaterventures.com/',
          },
          {
            name: '7BC Venture Capital',
            imageUrl: '/icons/7bc-ventures.svg',
            link: 'https://www.7bc.vc/',
          },
          {
            name: 'LFG Ventures',
            imageUrl: '/icons/lfg-ventures.svg',
            link: 'https://www.letsfg.com/',
          },
          {
            name: 'Texas Venture Labs',
            imageUrl: '/icons/texas-ventures.svg',
            link: 'https://www.mccombs.utexas.edu/centers-and-initiatives/jon-brumley-texas-venture-labs/',
          },
          {
            name: 'Stonks Fund',
            imageUrl: '/icons/stonks.svg',
            link: 'https://stonks.com/',
          },
        ]}
      />
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
