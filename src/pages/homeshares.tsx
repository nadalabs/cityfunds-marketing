import FeaturedImage from '@components/FeaturedImage';
import HowItWorks from '@components/cityfunds/HowItWorks';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import Testimonials from '@components/cityfunds/Testimonials';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import NadaCardCTA from '@components/homeshares/NadaCardCTA';
import { SectionWrapper } from '@elements/Containers';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { homeIndexQuery, homesharesTestimonialsQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

export default function HomeSharesPage({ testimonials }) {
  return (
    <PageLayout>
      <PageHero
        heading="Unlock Home Equity with No Monthly Payments"
        primaryText="Trade in fractions of your home equity for cash and spend it on everyday items. Apply below and one of our home equity specialists will reach out."
        btnText="Apply Now"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.TYPEFORM)}
        formName="Homeshares Lead"
        heroImages={[
          {
            name: 'Homeshares',
            heroImage: '/images/homeshares-hero.png',
          },
        ]}
        isTextWide
      />
      <SectionWrapper>
        <FeaturedImage
          overline="Why did we create HomeShares?"
          heading="Your Equity, Your Way"
          primaryText="Your home is your biggest asset. It continuously grows with your hard earned time and money. It should be usable like any other savings account. Now you can unlock your equity in 14 days with no monthly payments."
          imageUrl="/images/homeshares.png"
          btnText="Apply Now"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.TYPEFORM)}
          isShortHeader
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
      <NadaCardCTA />
      <SectionWrapper>
        <FeaturedImage
          heading="Looking to Invest?"
          primaryText="Unlock diversified real estate portfolios with passive income in the nation's top cities."
          imageUrl="/images/austin.png"
          btnText="Learn More"
          onClick={() => window.location.replace('/')}
          isBorder
        />
      </SectionWrapper>
      <Testimonials reviews={testimonials} />
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const homePage = await getClient(preview).fetch(homeIndexQuery);
  const testimonials = await getClient(preview).fetch(
    homesharesTestimonialsQuery
  );

  return {
    props: { homePage: homePage[0], testimonials },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
