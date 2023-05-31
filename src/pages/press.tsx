import PageLayout from '@components/PageLayout';
import PageHero from '@sections/PageHero';
import PressArticles from '@sections/PressArticles';
import { pressIndexQuery } from 'lib/queries';
import { getClient, overlayDrafts } from 'lib/sanity.server';

export default function PressPage({ allPress }) {
  return (
    <PageLayout>
      <PageHero
        heading="Nada in the News"
        primaryText="For media inquiries reach out to us at media@nada.co"
        heroImages={[{ name: '', imageUrl: '/images/press-hero.png' }]}
      />
      <PressArticles articles={allPress} />
    </PageLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPress = overlayDrafts(
    await getClient(preview).fetch(pressIndexQuery)
  );
  return {
    props: { allPress, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
