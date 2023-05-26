import Footer from '@components/Footer';
import Header from '@components/Header';
import BlogHero from '@sections/BlogHero';
import LongFormText from '@sections/LongFormText';
import { postQuery, postSlugsQuery } from 'lib/queries';
import { getClient, overlayDrafts, sanityClient } from 'lib/sanity.server';

// const PostPreview = lazy(() => import('../../components/post-preview'));

export default function PostPage({ preview, data }) {
  // if (preview) {
  //   return (
  //     <PreviewSuspense fallback="Loading...">
  //       <PostPreview data={data} />
  //     </PreviewSuspense>
  //   );
  // }

  return (
    <>
      <Header />
      <BlogHero blogPosts={[data.post]} />
      <LongFormText
        overline={data.post.tag}
        title={data.post.title}
        content={data.post.content}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
