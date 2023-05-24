import Footer from '@components/Footer';
import CitySection from '@sections/CitySection';
import FaqsSection from '@sections/FaqsSection';
import FeaturedPublicity from '@sections/FeaturedPublicity';
import HeroSection from '@sections/HeroSection';
import HowItWorks from '@sections/HowItWorks';
import LocationSection from '@sections/LocationSection';
import PublisherCTA from '@sections/PublisherCTA';
import Testimonials from '@sections/Testimonials';
import ValueProps from '@sections/ValueProps';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPublicity />
      <CitySection />
      <LocationSection />
      <ValueProps />
      <FaqsSection />
      <HowItWorks />
      <Testimonials />
      <PublisherCTA />
      <Footer />
    </>
  );
}
