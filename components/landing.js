import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Container from './container';
import BlogHero from '../src/sections/BlogHero';
import MoreStories from './more-stories';

export default function Landing({ allPosts, preview }) {
  const [heroPost, ...morePosts] = allPosts || [];
  return (
    <>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          {heroPost && (
            <BlogHero
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
    </>
  );
}
