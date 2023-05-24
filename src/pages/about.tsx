import Footer from '@components/Footer';
import CardSlider from '@sections/CardSlider';
import CareersCTA from '@sections/CareersCTA';
import OurStory from '@sections/OurStory';
import PageHero from '@sections/PageHero';
import ValueProps from '@sections/ValueProps';

export default function AboutPage() {
  return (
    <>
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
      <OurStory />
      <CardSlider />
      <ValueProps />
      <CareersCTA />
      <Footer />
    </>
  );
}
