import PageLayout from '@components/PageLayout';
import BlogHero from '@sections/BlogHero';
import BlogSlider from '@sections/BlogSlider';
import { indexQuery } from 'lib/queries';
import { getClient, overlayDrafts } from 'lib/sanity.server';
import _ from 'lodash';
import { PreviewSuspense } from 'next-sanity/preview';

// const LandingPreview = lazy(() => import('../../components/landing-preview'));

export default function LearnPage({ allPosts, preview }) {
  const postsByTag = _.groupBy(allPosts, 'tag');
  console.log(postsByTag);

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        {/* <LandingPreview allPosts={allPosts} /> */}
      </PreviewSuspense>
    );
  }

  function renderBlogSliders() {
    const sliders = [];
    for (let tag in postsByTag) {
      sliders.push(
        <BlogSlider key={tag} tag={tag} blogPosts={postsByTag[tag]} />
      );
    }
    return sliders;
  }

  return (
    <PageLayout isDarkMode>
      <BlogHero blogPosts={allPosts.slice(0, 4)} />
      {renderBlogSliders()}
    </PageLayout>
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
