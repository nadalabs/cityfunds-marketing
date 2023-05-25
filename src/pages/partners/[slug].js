import Footer from '@components/Footer';
import CardSlider from '@sections/CardSlider';
import FaqsSection from '@sections/FaqsSection';
import FeaturedLogos from '@sections/FeaturedLogos';
import HowItWorks from '@sections/HowItWorks';
import LocationSection from '@sections/KeyMetrics';
import HeroSection from '@sections/PageHero';
import PublisherCTA from '@sections/PublisherCTA';
import Testimonials from '@sections/Testimonials';
import ValueProps from '@sections/ValueProps';
import { postQuery, postSlugsQuery } from '../../lib/queries';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '../../lib/sanity.server';

export default function PartnerPage({ preview, data }) {
  return (
    <>
      <HeroSection partnerImage="/images/altsco.png" />
      <FeaturedLogos />
      <CardSlider />
      <LocationSection />
      <ValueProps />
      <FaqsSection />
      <HowItWorks />
      <Testimonials />
      <PublisherCTA />
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
