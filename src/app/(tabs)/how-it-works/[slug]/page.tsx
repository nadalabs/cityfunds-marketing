import RewardsChart from '@components/cityfunds/RewardsChart';
import PageHero from '@components/common/PageHero';
import PageTracker from '@components/common/PageTracker';
import FaqQuestions from '@components/marketing/FaqQuestions';
import FeaturedImage from '@components/marketing/FeaturedImage';
import HowItWorks from '@components/marketing/HowItWorks';
import ValueProps from '@components/marketing/ValueProps';
import Webinars from '@components/marketing/Webinars';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { howItWorksBySlugQuery, howItWorksSlugsQuery } from 'lib/queries';
import {
  getAllFundsContent,
  getAllTooltips,
  getCityfundsAppContent,
  revalidateQuery,
  sanityClient,
} from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

export async function generateStaticParams() {
  const pageSlugs = await sanityClient.fetch(
    howItWorksSlugsQuery,
    {},
    revalidateQuery
  );
  return pageSlugs?.map((slug) => ({ slug }));
}

export default async function HowItWorksPage({ params }) {
  const cityfundsApp = await getCityfundsAppContent();
  const pageData = await sanityClient.fetch(
    howItWorksBySlugQuery,
    {
      slug: params.slug,
    },
    revalidateQuery
  );
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();
  const tooltips = await getAllTooltips();

  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  return (
    <PageTracker pageName="How it Works">
      <PageHero hero={pageData?.hero} />
      <ValueProps
        heading={`The Benefits of ${pageData?.title}`}
        valueProps={pageData?.benefits}
      />

      <HowItWorks
        tutorials={pageData?.tutorials}
        btnText="Explore Offerings"
        link={`${process.env.NEXT_PUBLIC_WEB_APP_URL}`}
      />
      <RewardsChart feature={pageData?.description} tooltips={tooltips} />

      <FaqQuestions
        faqs={pageData?.questions}
        link={`${EXTERNAL_ROUTES.HUBSPOT_FAQS}/recur-earn`}
        linkText={`See All ${pageData?.title} FAQs`}
      />
      <FeaturedImage
        feature={pageData?.get_started}
        btnText="Get Started"
        link={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`}
        cityfunds={cityfunds}
      />
      {cityfundsApp?.investor_webinar && (
        <Webinars webinar={cityfundsApp?.investor_webinar} />
      )}
    </PageTracker>
  );
}
