import PageLayout from '@components/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import BlogHero from '@sections/BlogHero';
import LongFormText from '@sections/LongFormText';
import { postQuery, postSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';

export default function PostPage({ post }) {
  return (
    <PageLayout>
      <BlogHero blogPosts={[post]} />
      <SectionWrapper>
        <LongFormText
          overline={post?.tag}
          title={post?.title}
          content={post?.content}
        />
      </SectionWrapper>
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });
  const post = data?.post ?? null;

  return {
    props: { post },
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
