import BlogHero from '@components/blog/BlogHero';
import EmailCapture from '@components/common/EmailCapture';
import LongFormText from '@components/common/LongFormText';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { trackPageView } from '@utils/helpers';
import { postQuery, postSlugsQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import { useEffect } from 'react';

export default function PostPage({ post }) {
  useEffect(() => {
    trackPageView('Blog Article Viewed');
  });

  return (
    <>
      <BlogHero blogPosts={[post]} />
    <PageLayout>
      <SectionWrapper>
        <LongFormText
          overline={post?.tag}
          title={post?.title}
          content={post?.content}
        />
      </SectionWrapper>
      <EmailCapture formName="Blog" />
    </PageLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  });
  const post = data?.post ?? null;

  return {
    props: { post },
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
