import BlogHero from '@components/blog/BlogHero';
import EmailCapture from '@components/common/EmailCapture';
import LongFormText from '@components/common/LongFormText';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { trackPageView } from '@utils/helpers';
import {
  mediaQuery,
  mediaSlugsQuery,
  postQuery,
  postSlugsQuery,
} from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';

export default function PostPage({ post, media }) {
  useEffect(() => {
    trackPageView('Blog Article Viewed');
  });

  return (
    <>
      <BlogHero blogPosts={post ? [post] : [media]} />
      <PageLayout>
        <SectionWrapper style={{ paddingBottom: 0 }}>
          {post ? (
            <LongFormText
              overline={post?.tag}
              title={post?.title}
              content={post?.content}
            />
          ) : (
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ReactPlayer url={media?.link} height={'32rem'} width={'50rem'} />
            </div>
          )}
        </SectionWrapper>
        <EmailCapture formName="Blog" />
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const postData = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  });
  const post = postData?.post ?? null;
  const mediaData = await sanityClient.fetch(mediaQuery, {
    slug: params.slug,
  });
  const media = mediaData?.media ?? null;

  return {
    props: { post, media },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const postPaths = await sanityClient.fetch(postSlugsQuery);
  const mediaPaths = await sanityClient.fetch(mediaSlugsQuery);

  return {
    paths: [...postPaths, ...mediaPaths].map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
