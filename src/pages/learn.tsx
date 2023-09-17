import BlogHero from '@components/blog/BlogHero';
import BlogSlider from '@components/blog/BlogSlider';
import EmailCapture from '@components/common/EmailCapture';
import PageLayout from '@components/common/PageLayout';
import { trackPageView } from '@utils/helpers';
import { indexQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import _ from 'lodash';
import { useEffect } from 'react';

export default function LearnPage({ allPosts }) {
  useEffect(() => {
    trackPageView('Blog Page Viewed');
  });

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
      <EmailCapture formName="Blog" />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const allPosts = await sanityClient.fetch(indexQuery);

  return {
    props: { allPosts },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
