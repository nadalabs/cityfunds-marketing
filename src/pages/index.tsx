import Head from 'next/head';
import HeroSection from '../sections/HeroSection';
import LocationSection from '../sections/LocationSection';
import CitySection from '../sections/CitySection';
import FeaturedPublicity from '../sections/FeaturedPublicity';
import ValueProps from '../sections/ValueProps';
import FaqsSection from '../sections/FaqsSection';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import EmailCapture from '../sections/EmailCapture';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Gain access to professionally-managed, diversified real estate portfolios in the world’s best cities - start with as little as $100."
        />
        <title>Nada</title>
      </Head>

      <HeroSection />

      <div style={{ margin: '0 156px' }}>
        <FeaturedPublicity />
        <CitySection />
        <LocationSection />
        <ValueProps />
        <FaqsSection />
        <HowItWorks />
        <Testimonials />
        <EmailCapture />
      </div>
    </>
  );
}
