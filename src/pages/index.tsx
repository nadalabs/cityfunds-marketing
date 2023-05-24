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
import Head from 'next/head';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#48DC95" />
        <meta
          name="description"
          content="Gain access to professionally-managed, diversified real estate portfolios in the world’s best cities - start with as little as $100."
        />
        <title>Nada</title>
      </Head>

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
