import Footer from '@components/Footer';
import Application from '@sections/Application';
import HowItWorks from '@sections/HowItWorks';
import KeyMetrics from '@sections/KeyMetrics';
import PageHero from '@sections/PageHero';
import Testimonials from '@sections/Testimonials';

export default function HomeSharesPage() {
  return (
    <>
      <PageHero
        heading="Unlock Home Equity with No Debt or Monthly Payments"
        primaryText="Trade in fractions of your home equity for cash and spend it on everyday items. Apply below and one of our home equity specialists will reach out."
        heroImages={[
          {
            name: 'Homeshares',
            imageUrl: '/images/homeshares-hero.png',
          },
        ]}
      />
      <KeyMetrics
        overline="Build Your Real Estate Wealth"
        heading="Making homeownership accessible."
        primaryText="Investing in real estate is all about location, yet the increased cost of living have made desirable places unaffordable. Now, owning real estate in your favorite city takes less than 5 minutes."
        imageUrl="/images/homeshares.png"
        metrics={[
          {
            label: 'Average amount unlocked',
            value: 33045,
            formattingFn: (val) => `$${val}`,
          },
          {
            label: 'Average days to close',
            value: 13.8,
            decimals: 1,
          },
          {
            label: 'Monthly Payments',
            value: 0,
          },
        ]}
      />
      <HowItWorks />
      <Testimonials />
      <Application />
      <Footer />
    </>
  );
}
