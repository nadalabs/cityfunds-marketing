import PressArticles from '@components/PressArticles';
import PageHero from '@components/common/PageHero';
import { trackPageView } from '@utils/helpers';
import { getAboutPageContent, getAllPress } from 'lib/sanity';
import { useEffect } from 'react';

export default function NewsPage({ allPress, aboutPage }) {
  useEffect(() => {
    trackPageView('Press Page Viewed');
  });

  return (
    <>
      <PageHero feature={aboutPage?.news_hero} />
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
