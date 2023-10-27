import FeaturedImage from '@components/FeaturedImage';
import HowItWorks from '@components/cityfunds/HowItWorks';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import NadaFaqs from '@components/cityfunds/NadaFaqs';
import Testimonials from '@components/cityfunds/Testimonials';
import EmailCapture from '@components/common/EmailCapture';
import PageHero from '@components/common/PageHero';
import { SectionWrapper } from '@elements/Containers';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { trackPageView } from '@utils/helpers';
import { getHomesharesPageContent } from 'lib/sanity';
import { useEffect } from 'react';

export default function HomesharesPage({ homesharesPage }) {
  useEffect(() => {
    trackPageView('Homeshares Page Viewed');
  });

  return (
    <>
      <PageHero
        heading="Unlock Home Equity with No Monthly Payments"
        primaryText="Trade in fractions of your home equity for cash and spend it on everyday items. Apply below and one of our home equity specialists will reach out."
        btnText="Apply Now"
        onClick={() => window.open(EXTERNAL_ROUTES.TYPEFORM, '_blank')}
        heroImages={[
          {
            name: 'Homeshares',
            heroImage: '/images/homeshares-hero.png',
          },
        ]}
        maxWidth={900}
      />
      <SectionWrapper>
        <FeaturedImage
          overline="Why did we create HomeShares?"
          heading="Your Equity, Your Way"
          primaryText="Your home is your biggest asset. It continuously grows with your hard earned time and money. It should be usable like any other savings account. Now you can unlock your equity in 14 days with no monthly payments."
          imageUrl="/images/homeshares.png"
          btnText="Apply Now"
          onClick={() => window.open(EXTERNAL_ROUTES.TYPEFORM, '_blank')}
          isReversed
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
        tutorials={homesharesPage?.tutorials}
        btnText="Apply Now"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.TYPEFORM)}
      />
      <NadaFaqs
        faqs={homesharesPage?.questions}
        seeAllUrl={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/homeshares`}
      />
      <Testimonials testimonials={homesharesPage?.testimonials} />
      <EmailCapture formName="Homeshares" isPopup />
    </>
  );
}

export async function getStaticProps() {
  const homesharesPage = await getHomesharesPageContent();

  return {
    props: { homesharesPage },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
