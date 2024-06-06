import PageHero from '@components/common/PageHero';
import PageTracker from '@components/common/PageTracker';
import FaqQuestions from '@components/marketing/FaqQuestions';
import FeaturedImage from '@components/marketing/FeaturedImage';
import Testimonials from '@components/marketing/Testimonials';
import Webinars from '@components/marketing/Webinars';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { howItWorksBySlugQuery, howItWorksSlugsQuery } from 'lib/queries';
import { getCityfundsAppContent, sanityClient } from 'lib/sanity';

export async function generateStaticParams() {
  const pageSlugs = await sanityClient.fetch(howItWorksSlugsQuery);
  return pageSlugs?.map((slug) => ({ slug }));
}

export default async function HowItWorks({ params }) {
  const cityfundsApp = await getCityfundsAppContent();
  const pageData = await sanityClient.fetch(howItWorksBySlugQuery, {
    slug: params.slug,
  });

  return (
    <PageTracker pageName="How it Works">
      <PageHero feature={pageData?.marketing_hero} />
      <Testimonials testimonials={pageData?.testimonials} />
      <FeaturedImage feature={pageData?.description} isWide />
      <FaqQuestions
        faqs={pageData?.questions}
        link={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/recur-earn`}
        linkText="See All FAQs"
      />
      <FeaturedImage
        feature={pageData?.get_started}
        btnText="Get Started"
        link={''}
        isWide
      />
      {cityfundsApp?.investor_webinar && (
        <Webinars webinar={cityfundsApp?.investor_webinar} />
      )}
    </PageTracker>
  );
}
