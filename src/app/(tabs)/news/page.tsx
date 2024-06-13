import NewsArticles from '@components/about/NewsArticles';
import PageHero from '@components/common/PageHero';
import PageTracker from '@components/common/PageTracker';
import { getAboutPageContent, getAllPress } from 'lib/sanity';

export default async function NewsPage() {
  const aboutPage = await getAboutPageContent();
  const allPress = await getAllPress();

  return (
    <PageTracker pageName="Press">
      <PageHero hero={aboutPage?.news_hero} />
      <NewsArticles articles={allPress} />
    </PageTracker>
  );
}
