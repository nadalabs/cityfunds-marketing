import { trackPageView } from '@utils/helpers';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  legalQuery,
  legalSlugsQuery,
  partnerQuery,
  partnerSlugsQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import {
  getAllFundsContent,
  getHomePageContent,
  sanityClient,
} from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const HomePage = dynamic(() => import('@pages/index'));
const LegalPage = dynamic(() => import('@components/LegalPage'));

export default function DynamicPage({
  cityfunds,
  testimonials,
  logos,
  values,
  partner,
  legal,
  homePage,
}) {
  useEffect(() => {
    trackPageView(`${partner ? 'Publisher' : 'Legal'} Page Viewed`);
  });

  return (
    <>
      {partner && (
        <HomePage
          cityfunds={cityfunds}
          partner={partner}
          testimonials={testimonials}
          logos={logos}
          values={values}
          homePage={homePage}
        />
      )}
      {legal && <LegalPage legal={legal} />}
    </>
  );
}

export async function getStaticProps({ params }) {
  const fundsData = await getAllFundsData();
  const homePage = await getHomePageContent();
  const fundsContent = await getAllFundsContent();
  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  const testimonials = await sanityClient.fetch(cityfundsTestimonialsQuery);
  const logos = await sanityClient.fetch(pressLogosQueryQuery);
  const values = await sanityClient.fetch(cityfundsValuesQuery);
  const partnerData = await sanityClient.fetch(partnerQuery, {
    slug: params.slug,
  });
  const legalData = await sanityClient.fetch(legalQuery, {
    slug: params.slug,
  });
  const partner = partnerData?.partner ?? null;
  const legal = legalData?.legal ?? null;

  return {
    props: { cityfunds, testimonials, logos, values, partner, legal, homePage },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const partnerPaths = await sanityClient.fetch(partnerSlugsQuery);
  const legal = await sanityClient.fetch(legalSlugsQuery);
  const legalPaths = legal?.filter((legal) => legal !== 'footer') ?? null;

  return {
    paths: [...partnerPaths, ...legalPaths].map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
