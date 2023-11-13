import BlogHero from '@components/blog/BlogHero';
import EmailCapture from '@components/common/EmailCapture';
import LongFormText from '@components/common/LongFormText';
import { SectionWrapper } from '@elements/Containers';
import { trackPageView } from '@utils/helpers';
import {
  mediaQuery,
  mediaSlugsQuery,
  postQuery,
  postSlugsQuery,
} from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

export default function PostPage({ post, media }) {
  const playerRef = useRef(null);

  useEffect(() => {
    trackPageView('Blog Article Viewed');
  });

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().requestFullscreen();
    }
  };

  return (
    <>
      <BlogHero blogPosts={post ? [post] : [media]} />
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
            <ReactPlayer
              ref={playerRef}
              onPlay={handlePlay}
              url={media?.link}
              height={'32rem'}
              width={'50rem'}
            />
          </div>
        )}
      </SectionWrapper>
      <EmailCapture formName="Blog" />
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
