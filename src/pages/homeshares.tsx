import FeaturedImage from '@components/FeaturedImage';
import Footer from '@components/Footer';
import Header from '@components/Header';
import KeyMetrics from '@components/KeyMetrics';
import { SectionWrapper } from '@elements/Containers';
import HowItWorks from '@sections/HowItWorks';
import PageHero from '@sections/PageHero';
import Testimonials from '@sections/Testimonials';
import { EXTERNAL_ROUTES } from '@utils/constants';

export default function HomeSharesPage() {
  return (
    <>
      <Header />
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
      <SectionWrapper>
        <FeaturedImage
          overline="Build Your Real Estate Wealth"
          heading="Making homeownership accessible."
          primaryText="Investing in real estate is all about location, yet the increased cost of living have made desirable places unaffordable. Now, owning real estate in your favorite city takes less than 5 minutes."
          imageUrl="/images/homeshares.png"
          btnText="Apply Now"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.TYPEFORM)}
        />
        <KeyMetrics
          metrics={[
            {
              label: 'Average Amount Unlocked',
              value: 47045,
              prefix: '$',
            },
            {
              label: 'Average Days to Close',
              value: 13.8,
              decimals: 1,
            },
            {
              label: 'Monthly Payments',
              value: 0,
            },
          ]}
        />
      </SectionWrapper>
      <HowItWorks
        overline="Three easy steps to unlock your home equity"
        steps={[
          {
            title: 'Apply for a Homeshare',
            description: 'Fill out an application in under 90 seconds',
            imageUrl: '/images/homeshares-1.png',
          },
          {
            title: 'Schedule  Inspection',
            description: "Once approved, we'll schedule your home inspection",
            imageUrl: '/images/homeshares-2.png',
          },
          {
            title: 'Get Funded',
            description:
              'We will finalize the paperwork & deposit funds in a few days',
            imageUrl: '/images/homeshares-3.png',
          },
        ]}
        btnText="Apply Now"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.TYPEFORM)}
      />
      <Testimonials
        reviews={[
          {
            name: 'Veronica S.',
            location: 'Austin, TX',
            text: 'Homeshares helped me invest in myself and open my own business',
          },
          {
            name: 'Veronica S.',
            location: 'Austin, TX',
            text: 'Homeshares helped me invest in myself and open my own business',
          },
        ]}
      />
      <Footer />
    </>
  );
}
