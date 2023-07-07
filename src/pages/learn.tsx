import BlogCapture from '@components/blog/BlogCapture';
import PageLayout from '@components/common/PageLayout';
import BlogHero from '@components/blog/BlogHero';
import BlogSlider from '@components/blog/BlogSlider';
import { indexQuery } from 'lib/queries';
import { getClient, overlayDrafts } from 'lib/sanity.server';
import _ from 'lodash';

export default function LearnPage({ allPosts }) {
  const postsByTag = _.groupBy(allPosts, 'tag');
  const heroPosts = allPosts
    .filter(({ tag }) => tag === 'Investing' || tag === 'Home Equity')
    .slice(0, 4);

  function renderBlogSliders() {
    const sliders = [];
    for (let tag in postsByTag) {
      sliders.push(
        <BlogSlider key={tag} tag={tag} blogPosts={postsByTag[tag]} />
      );
    }
    return [sliders.slice(2, 4), sliders.slice(0, 2)];
  }

  return (
    <PageLayout>
      <BlogHero blogPosts={heroPosts} />
      {renderBlogSliders()}
      <BlogCapture />
    </PageLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
