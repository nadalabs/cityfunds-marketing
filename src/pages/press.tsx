import PressArticles from '@components/PressArticles';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { sanityClient } from 'lib/sanity';
import { pressIndexQuery } from 'lib/queries';

export default function PressPage({ allPress }) {
  return (
    <PageLayout>
      <PageHero
        heading="Nada in the News"
        primaryText="For media inquiries reach out to us at media@nada.co"
        heroImages={[{ name: '', heroImage: '/images/press-hero.png' }]}
      />
      <PressArticles articles={allPress} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const allPress =  await sanityClient.fetch(pressIndexQuery)

  return {
    props: { allPress },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
