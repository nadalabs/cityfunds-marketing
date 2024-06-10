import PageHero from '@components/common/PageHero';
import PageTracker from '@components/common/PageTracker';
import FaqQuestions from '@components/marketing/FaqQuestions';
import FeaturedImage from '@components/marketing/FeaturedImage';
import HowItWorks from '@components/marketing/HowItWorks';
import Testimonials from '@components/marketing/Testimonials';
import ValueProps from '@components/marketing/ValueProps';
import Webinars from '@components/marketing/Webinars';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { howItWorksBySlugQuery, howItWorksSlugsQuery } from 'lib/queries';
import { getCityfundsAppContent, sanityClient } from 'lib/sanity';

export async function generateStaticParams() {
  const pageSlugs = await sanityClient.fetch(howItWorksSlugsQuery);
  return pageSlugs?.map((slug) => ({ slug }));
}

export default async function HowItWorksPage({ params }) {
  const cityfundsApp = await getCityfundsAppContent();
  const pageData = await sanityClient.fetch(howItWorksBySlugQuery, {
    slug: params.slug,
  });

  return (
    <PageTracker pageName="How it Works">
      <PageHero feature={pageData?.marketing_hero} />
      <ValueProps heading="Why Cityfunds?" valueProps={pageData?.why_us} />

      <HowItWorks
        tutorials={pageData?.tutorials}
        btnText="Sign Up"
        link={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`}
      />
      <Testimonials testimonials={pageData?.testimonials} />
      <FeaturedImage feature={pageData?.description} isWide />
      <ValueProps heading="Why Cityfunds?" valueProps={pageData?.benefits} />
      <FaqQuestions
        faqs={pageData?.questions}
        link={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/recur-earn`}
        linkText="See All FAQs"
      />
      <FeaturedImage
        feature={pageData?.get_started}
        btnText="Get Started"
        link={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`}
        isWide
      />
      {cityfundsApp?.investor_webinar && (
        <Webinars webinar={cityfundsApp?.investor_webinar} />
      )}
    </PageTracker>
  );
}
