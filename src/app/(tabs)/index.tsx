'use client';

import AccreditedGrid from '@components/cityfunds/AccreditedGrid';
import CityfundsGrid from '@components/cityfunds/CityfundGrid';
import EquityChart from '@components/cityfunds/EquityChart';
import EquityPayoff from '@components/cityfunds/EquityPayoff';
import InvestorPromo from '@components/cityfunds/InvestorPromo';
import EmailCapture from '@components/common/EmailCapture';
import PageHero from '@components/common/PageHero';
import FeaturedImage from '@components/marketing/FeaturedImage';
import HowItWorks from '@components/marketing/HowItWorks';
import KeyMetrics from '@components/marketing/KeyMetrics';
import Testimonials from '@components/marketing/Testimonials';
import ValueProps from '@components/marketing/ValueProps';
import Webinanars from '@components/marketing/Webinars';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { trackPageView } from '@utils/helpers';
import { useEffect } from 'react';

interface HomePageProps {
  cityfundsPage?: any;
  cityfunds: any[];
}

export default function HomePage({ cityfundsPage, cityfunds }: HomePageProps) {
  useEffect(() => {
    trackPageView('Cityfunds Page Viewed');
  });

  return (
    <>
      <PageHero
        cityfunds={cityfunds}
        feature={cityfundsPage?.marketing_hero}
        banner={cityfundsPage?.hero_banner}
        btnText="Explore Offerings"
        logoTitle="Featured In"
        logos={cityfundsPage?.logos}
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
      />
      <KeyMetrics metrics={cityfundsPage?.metrics} />
      <FeaturedImage
        feature={cityfundsPage?.hei_feature}
        component={<EquityPayoff />}
        isWide
      />
      <EquityChart />
      <FeaturedImage
        feature={cityfundsPage?.cityfunds_feature}
        btnText="Explore Offerings"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        isWide
      />

      <CityfundsGrid cityfunds={cityfunds} />
      <AccreditedGrid cityfunds={cityfunds} />

      <HowItWorks
        video={cityfundsPage?.video}
        tutorials={cityfundsPage?.tutorials}
        btnText="Sign Up"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`, '_blank')
        }
      />
      <Testimonials testimonials={cityfundsPage?.testimonials} />
      <ValueProps
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        valueProps={cityfundsPage?.values}
        link={EXTERNAL_ROUTES.HUBSPOT_FAQS}
        linkText="See All FAQs"
      />
      <FeaturedImage
        overline="FOR HOMEOWNERS"
        feature={cityfundsPage?.homeowners_feature}
        btnText="Learn More"
        onClick={() => window.open(process.env.NEXT_PUBLIC_NADA_URL, '_blank')}
        isBackground
      />

      {cityfundsPage?.promo && <InvestorPromo promo={cityfundsPage?.promo} />}
      <Webinanars webinar={cityfundsPage?.webinar} />
      <EmailCapture formName="Cityfunds" isPopup />
    </>
  );
}
