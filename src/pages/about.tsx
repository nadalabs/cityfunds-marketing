import Footer from '@components/Footer';
import Header from '@components/Header';
import CardSlider from '@sections/CardSlider';
import CareersCTA from '@sections/CareersCTA';
import FeaturedLogos from '@sections/FeaturedLogos';
import LongFormText from '@sections/LongFormText';
import PageHero from '@sections/PageHero';
import ValueProps from '@sections/ValueProps';
import { OUR_VALUES } from '@utils/constants';

export default function AboutPage() {
  return (
    <>
      <Header />
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
        content={OUR_VALUES}
      />
      <FeaturedLogos
        overline="World Class Backing"
        logos={[
          { name: 'Live Oak', imageUrl: '/icons/live-oak.svg', link: '' },
          {
            name: 'Revolution',
            imageUrl: '/icons/revolution.svg',
            link: '',
          },
          {
            name: 'Capital Factory',
            imageUrl: '/icons/capital-factory.svg',
            link: '',
          },
          {
            name: 'Sweater Ventures',
            imageUrl: '/icons/sweater.svg',
            link: '',
          },
          {
            name: '7BC Venture Capital',
            imageUrl: '/icons/7bc-ventures.svg',
            link: '',
          },
          {
            name: 'LFG Ventures',
            imageUrl: '/icons/lfg-ventures.svg',
            link: '',
          },
          {
            name: 'Texas Venture Labs',
            imageUrl: '/icons/texas-ventures.svg',
            link: '',
          },
          {
            name: 'Stonks Fund',
            imageUrl: '/icons/stonks.svg',
            link: '',
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
      <ValueProps
        overline="Our Values"
        heading="How We Think"
        primaryText="We have plenty of reasons."
        valueProps={OUR_VALUES}
      />
      <CareersCTA />
      <Footer />
    </>
  );
}
