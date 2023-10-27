import { trackPageView } from '@utils/helpers';
import {
  legalQuery,
  legalSlugsQuery,
  partnerQuery,
  partnerSlugsQuery,
} from 'lib/queries';
import {
  getAllFundsContent,
  getCityfundsPageContent,
  sanityClient,
} from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const CityfundsPage = dynamic(() => import('@pages/index'));
const LegalPage = dynamic(() => import('@components/LegalPage'));

export default function DynamicPage({
  cityfunds,
  testimonials,
  logos,
  values,
  partner,
  legal,
  cityfundsPage,
}) {
  useEffect(() => {
    trackPageView(`${partner ? 'Publisher' : 'Legal'} Page Viewed`);
  });

  return (
    <>
      {partner && (
        <CityfundsPage
          cityfundsPage={cityfundsPage}
          cityfunds={cityfunds}
          partner={partner}
        />
      )}
      {legal && <LegalPage legal={legal} />}
    </>
  );
}

export async function getStaticProps({ params }) {
  const fundsData = await getAllFundsData();
  const cityfundsPage = await getCityfundsPageContent();
  const fundsContent = await getAllFundsContent();
  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  const partnerData = await sanityClient.fetch(partnerQuery, {
    slug: params.slug,
  });
  const legalData = await sanityClient.fetch(legalQuery, {
    slug: params.slug,
  });
  const partner = partnerData?.partner ?? null;
  const legal = legalData?.legal ?? null;

  return {
    props: { cityfunds, partner, legal, cityfundsPage },
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
