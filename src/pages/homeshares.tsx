import FeaturedImage from '@components/FeaturedImage';
import EmailCapture from '@components/common/EmailCapture';
import PageHero from '@components/common/PageHero';
import FaqQuestions from '@components/marketing/FaqQuestions';
import HowItWorks from '@components/marketing/HowItWorks';
import KeyMetrics from '@components/marketing/KeyMetrics';
import Testimonials from '@components/marketing/Testimonials';
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
        heroImage={homesharesPage?.hero_image}
        btnText="Apply Now"
        onClick={() => window.open(EXTERNAL_ROUTES.TYPEFORM, '_blank')}
        maxWidth={900}
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
      <FeaturedImage
        feature={homesharesPage?.homeshares_feature}
        btnText="Apply Now"
        onClick={() => window.open(EXTERNAL_ROUTES.TYPEFORM, '_blank')}
        isReversed
      />
      <HowItWorks
        overline="Three easy steps to unlock your home equity"
        tutorials={homesharesPage?.tutorials}
        btnText="Apply Now"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.TYPEFORM)}
      />
      <FaqQuestions
        faqs={homesharesPage?.questions}
        link={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/homeshares`}
        linkText="See All FAQs"
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
