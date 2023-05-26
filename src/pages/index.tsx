import Footer from '@components/Footer';
import Header from '@components/Header';
import CardSlider from '@sections/CardSlider';
import FaqsSection from '@sections/FaqsSection';
import FeaturedLogos from '@sections/FeaturedLogos';
import HowItWorks from '@sections/HowItWorks';
import KeyMetrics from '@sections/KeyMetrics';
import PageHero from '@sections/PageHero';
import PublisherCTA from '@sections/PublisherCTA';
import Testimonials from '@sections/Testimonials';
import ValueProps from '@sections/ValueProps';
import { VALUE_PROPS } from '@utils/constants';

export default function HomePage() {
  return (
    <>
      <Header isDarkMode />
      <PageHero
        heading="Own a Piece of Your Favorite City"
        primaryText="Diversified real estate portfolios with passive income in the nations top cities."
        heroImages={[
          {
            name: 'Dallas',
            imageUrl: '/images/dallas-hero.png',
            numProperties: 10,
          },
          {
            name: 'Austin',
            imageUrl: '/images/austin-hero.png',
            numProperties: 10,
          },
          {
            name: 'Miami',
            imageUrl: '/images/miami-hero.png',
            numProperties: 10,
          },
          {
            name: 'Tampa',
            imageUrl: '/images/tampa-hero.png',
            numProperties: 10,
          },
        ]}
      />
      <FeaturedLogos
        overline="Featured In"
        logos={[
          { name: 'Forbes', imageUrl: '/icons/forbes.svg', link: '' },
          {
            name: 'The Motley Fool',
            imageUrl: '/icons/motley-fool.svg',
            link: '',
          },
          {
            name: 'TechCrunch',
            imageUrl: '/icons/techcrunch.svg',
            link: 'https://techcrunch.com/2022/07/27/you-cant-afford-a-house-but-you-can-probably-afford-nada',
          },
          {
            name: 'Yahoo Finance',
            imageUrl: '/icons/yahoo-finance.svg',
            link: '',
          },
        ]}
      />
      <CardSlider
        heading="Pick your favorite Cityfund, or invest in all of them"
        primaryText={
          'Cityfunds is the only investment platform that provides direct access to diversified portfolios of owner-occupied homes in the nation’s top cities.'
        }
        cards={[
          {
            title: 'Dallas',
            description: '102 Properties',
            imageUrl: '/images/dallas.png',
          },
          {
            title: 'Austin',
            description: '102 Properties',
            imageUrl: '/images/austin.png',
          },
          {
            title: 'Miami',
            description: '102 Properties',
            imageUrl: '/images/miami.png',
          },
          {
            title: 'Tampa',
            description: '102 Properties',
            imageUrl: '/images/tampa.png',
          },
          {
            title: 'Coming Soon',
            imageUrl: '/images/coming-soon-1.png',
          },
          {
            title: 'Coming Soon',
            imageUrl: '/images/coming-soon-2.png',
          },
        ]}
      />
      <KeyMetrics
        overline="Why Cityfunds?"
        heading="Location, Location, Location"
        primaryText="Investing in real estate is all about location, yet the increased
            cost of living have made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes."
        imageUrl="/images/location-tiles.png"
        metrics={[
          {
            label: 'Total Investors',
            value: 7000,
            formattingFn: (val) => `${val}+`,
          },
          {
            label: 'Total Invested',
            value: 1.8,
            decimals: 1,
            formattingFn: (val) => `$${val}M`,
          },
          {
            label: 'Properties Funded',
            value: 60,
            formattingFn: (val) => `${val}+`,
          },
        ]}
      />
      <ValueProps
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={VALUE_PROPS}
      />
      <FaqsSection />
      <HowItWorks />
      <Testimonials />
      <PublisherCTA />
      <Footer />
    </>
  );
}
