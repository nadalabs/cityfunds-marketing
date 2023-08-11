import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  legalQuery,
  legalSlugsQuery,
  partnerQuery,
  partnerSlugsQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@pages/index'));
const LegalPage = dynamic(() => import('@components/LegalPage'));

export default function DynamicPage({
  testimonials,
  logos,
  values,
  partner,
  legal,
}) {
  return (
    <>
      {partner && (
        <HomePage
          partner={partner}
          testimonials={testimonials}
          logos={logos}
          values={values}
        />
      )}
      {legal && <LegalPage legal={legal} />}
    </>
  );
}

export async function getStaticProps({ params }) {
  const testimonials = await sanityClient.fetch(
    cityfundsTestimonialsQuery
  );
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
    props: { testimonials, logos, values, partner, legal },
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
