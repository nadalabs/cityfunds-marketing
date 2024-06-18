import BlogHero from '@components/blog/BlogHero';
import BlogSlider from '@components/blog/BlogSlider';
import EmailCapture from '@components/common/EmailCapture';
import PageTracker from '@components/common/PageTracker';
import { mediaIndexQuery, postIndexQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import _ from 'lodash';

export default async function LearnPage() {
  const allPosts = await sanityClient.fetch(postIndexQuery);
  const allMedia = await sanityClient.fetch(mediaIndexQuery);
  const pagePosts = allPosts.filter(({ tag }) => tag === 'Investing');
  const postsByTag = _.groupBy(pagePosts, 'tag');
  const mediaByTag = _.groupBy(allMedia, 'tag');
  const heroPosts = pagePosts.slice(0, 4);

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
    <PageTracker pageName="Learn">
      <BlogHero blogPosts={heroPosts} />
      {renderBlogSliders()}
      <EmailCapture />
    </PageTracker>
  );
}
