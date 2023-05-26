import Footer from '@components/Footer';
import Header from '@components/Header';
import BlogHero from '@sections/BlogHero';
import BlogSlider from '@sections/BlogSlider';
import { PreviewSuspense } from 'next-sanity/preview';
import { indexQuery } from '../../lib/queries';
import { getClient, overlayDrafts } from '../../lib/sanity.server';

// const LandingPreview = lazy(() => import('../../components/landing-preview'));

export default function LearnPage({ allPosts, preview }) {
  const topics = ['Webinars', 'Investing', 'Home Equity'];

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        {/* <LandingPreview allPosts={allPosts} /> */}
      </PreviewSuspense>
    );
  }

  return (
    <>
      <Header isDarkMode />
      <BlogHero blogPosts={allPosts} />
      {topics.map((topic) => (
        <BlogSlider topic={topic} blogPosts={allPosts} />
      ))}
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
