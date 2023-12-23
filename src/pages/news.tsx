import PressArticles from '@components/PressArticles';
import PageHero from '@components/common/PageHero';
import { trackPageView } from '@utils/helpers';
import { getAboutPageContent, getAllPress } from 'lib/sanity';
import { useEffect } from 'react';

export default function PressPage({ allPress, aboutPage }) {
  useEffect(() => {
    trackPageView('Press Page Viewed');
  });

  const PRESS_FEATURE = {
    title: 'Cityfunds in the News',
    description: 'For media inquiries reach out to us at media@nada.co',
    image: aboutPage?.press_hero,
  };

  return (
    <>
      <PageHero feature={PRESS_FEATURE} />
      <PressArticles articles={allPress} />
    </>
  );
}

export async function getStaticProps() {
  const aboutPage = await getAboutPageContent();
  const allPress = await getAllPress();

  return {
    props: { allPress, aboutPage },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
