import BlogHero from '@components/blog/BlogHero';
import BlogVideo from '@components/blog/BlogVideo';
import EmailCapture from '@components/common/EmailCapture';
import LongFormText from '@components/common/LongFormText';
import PageTracker from '@components/common/PageTracker';
import { SectionWrapper } from '@elements/Containers';
import {
  mediaQuery,
  mediaSlugsQuery,
  postQuery,
  postSlugsQuery,
} from 'lib/queries';
import { sanityClient } from 'lib/sanity';

export async function generateStaticParams() {
  const postSlugs = await sanityClient.fetch(postSlugsQuery);
  const mediaSlugs = await sanityClient.fetch(mediaSlugsQuery);
  return [...postSlugs, ...mediaSlugs]?.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const postData = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  });
  const post = postData?.post ?? null;
  const mediaData = await sanityClient.fetch(mediaQuery, {
    slug: params.slug,
  });
  const media = mediaData?.media ?? null;

  return (
    <PageTracker pageName="Blog Article">
      <BlogHero blogPosts={post ? [post] : [media]} />
      <SectionWrapper style={{ paddingBottom: 0 }}>
        {post ? (
          <LongFormText
            overline={post?.tag}
            title={post?.title}
            content={post?.content}
          />
        ) : (
          <BlogVideo media={media} />
        )}
      </SectionWrapper>
      <EmailCapture />
    </PageTracker>
  );
}
