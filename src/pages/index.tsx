import Footer from '@components/Footer';
import CitySection from '@sections/CardSlider';
import FaqsSection from '@sections/FaqsSection';
import FeaturedPublicity from '@sections/FeaturedPublicity';
import HowItWorks from '@sections/HowItWorks';
import KeyMetrics from '@sections/KeyMetrics';
import PageHero from '@sections/PageHero';
import PublisherCTA from '@sections/PublisherCTA';
import Testimonials from '@sections/Testimonials';
import ValueProps from '@sections/ValueProps';

export default function HomePage() {
  return (
    <>
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
      <FeaturedPublicity />
      <CitySection />
      <KeyMetrics
        overline="Why Cityfunds?"
        heading="Location, Location, Location"
        primaryText="Investing in real estate is all about location, yet the increased
            cost of living have made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes."
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
      <ValueProps />
      <FaqsSection />
      <HowItWorks />
      <Testimonials />
      <PublisherCTA />
      <Footer />
    </>
  );
}
