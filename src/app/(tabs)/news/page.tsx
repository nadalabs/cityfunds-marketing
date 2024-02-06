import NewsArticles from '@components/about/NewsArticles';
import PageHero from '@components/common/PageHero';
import { trackPageView } from '@utils/helpers';
import { getAboutPageContent, getAllPress } from 'lib/sanity';
import { useEffect } from 'react';

export default async function NewsPage() {
  const aboutPage = await getAboutPageContent();
  const allPress = await getAllPress();

  // useEffect(() => {
  //   trackPageView('Press Page Viewed');
  // });

  return (
    <>
      <PageHero feature={aboutPage?.news_hero} />
      <NewsArticles articles={allPress} />
    </>
  );
}
