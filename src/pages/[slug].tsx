import {
  legalQuery,
  legalSlugsQuery,
  partnerQuery,
  partnerSlugsQuery,
  testimonialIndexQuery,
} from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@pages/index'));
const LegalPage = dynamic(() => import('@components/LegalPage'));

export default function DynamicPage({ testimonials, partner, legal }) {
  return (
    <>
      {partner && <HomePage partner={partner} testimonials={testimonials} />}
      {legal && <LegalPage legal={legal} />}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const testimonials = await getClient(preview).fetch(testimonialIndexQuery);
  const partnerData = await getClient(preview).fetch(partnerQuery, {
    slug: params.slug,
  });
  const legalData = await getClient(preview).fetch(legalQuery, {
    slug: params.slug,
  });
  const partner = partnerData?.partner ?? null;
  const legal = legalData?.legal ?? null;

  return {
    props: { testimonials, partner, legal },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
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
