import BlogHero from '@components/blog/BlogHero';
import BlogSlider from '@components/blog/BlogSlider';
import EmailCapture from '@components/common/EmailCapture';
import PageLayout from '@components/common/PageLayout';
import { trackPageView } from '@utils/helpers';
import { MediaIndexQuery, postIndexQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import _ from 'lodash';
import { useEffect } from 'react';

export default function LearnPage({ allPosts, allMedia }) {
  useEffect(() => {
    trackPageView('Blog Page Viewed');
  });

  const postsByTag = _.groupBy(allPosts, 'tag');
  const mediaByTag = _.groupBy(allMedia, 'tag');
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

    for (let tag in mediaByTag) {
      sliders.push(
        <BlogSlider key={tag} tag={tag} blogPosts={mediaByTag[tag]} />
      );
    }

    return sliders;
  }

  return (
    <>
      <BlogHero blogPosts={heroPosts} />
      <PageLayout>
        {renderBlogSliders()}
        <EmailCapture formName="Blog" />
      </PageLayout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await sanityClient.fetch(postIndexQuery);
  const allMedia = await sanityClient.fetch(MediaIndexQuery);

  return {
    props: { allPosts, allMedia },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
