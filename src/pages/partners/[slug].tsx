import Footer from '@components/Footer';
import Header from '@components/Header';
import CardSlider from '@sections/CardSlider';
import FaqsSection from '@sections/FaqsSection';
import FeaturedLogos from '@sections/FeaturedLogos';
import HowItWorks from '@sections/HowItWorks';
import KeyMetrics from '@sections/KeyMetrics';
import PageHero from '@sections/PageHero';
import PublisherCTA from '@sections/PublisherCTA';
import Testimonials from '@sections/Testimonials';
import TextSlider from '@sections/TextSlider';
import { VALUE_PROPS } from '@utils/constants';
import { partnerQuery, partnerSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';

export default function PartnerPage({ preview, data }) {
  return (
    <>
      <Header partnerImage={data?.partner?.coverImage} />
      <PageHero
        heading="Own a Piece of Your Favorite City"
        primaryText="Diversified real estate portfolios with passive income in the nations top cities."
        heroImages={[
          {
            name: 'Dallas',
            imageUrl: '/images/dallas-hero.png',
            numProperties: 10,
          },
          {
            name: 'Austin',
            imageUrl: '/images/austin-hero.png',
            numProperties: 10,
          },
          {
            name: 'Miami',
            imageUrl: '/images/miami-hero.png',
            numProperties: 10,
          },
          {
            name: 'Tampa',
            imageUrl: '/images/tampa-hero.png',
            numProperties: 10,
          },
        ]}
      />
      <FeaturedLogos
        overline="Featured In"
        logos={[
          { name: 'Forbes', imageUrl: '/icons/forbes.svg', link: '' },
          {
            name: 'The Motley Fool',
            imageUrl: '/icons/motley-fool.svg',
            link: '',
          },
          {
            name: 'TechCrunch',
            imageUrl: '/icons/techcrunch.svg',
            link: 'https://techcrunch.com/2022/07/27/you-cant-afford-a-house-but-you-can-probably-afford-nada',
          },
          {
            name: 'Yahoo Finance',
            imageUrl: '/icons/yahoo-finance.svg',
            link: '',
          },
        ]}
      />
      <CardSlider
        heading="Pick your favorite Cityfund, or invest in all of them"
        primaryText={
          'Cityfunds is the only investment platform that provides direct access to diversified portfolios of owner-occupied homes in the nation’s top cities.'
        }
        cards={[
          {
            title: 'Dallas',
            description: '102 Properties',
            imageUrl: '/images/dallas.png',
          },
          {
            title: 'Austin',
            description: '102 Properties',
            imageUrl: '/images/austin.png',
          },
          {
            title: 'Miami',
            description: '102 Properties',
            imageUrl: '/images/miami.png',
          },
          {
            title: 'Tampa',
            description: '102 Properties',
            imageUrl: '/images/tampa.png',
          },
          {
            title: 'Coming Soon',
            imageUrl: '/images/coming-soon-1.png',
          },
          {
            title: 'Coming Soon',
            imageUrl: '/images/coming-soon-2.png',
          },
        ]}
      />
      <KeyMetrics
        overline="Why Cityfunds?"
        heading="Location, Location, Location"
        primaryText="Investing in real estate is all about location, yet the increased
            cost of living have made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes."
        imageUrl="/images/location-tiles.png"
        metrics={[
          {
            label: 'Total Investors',
            value: 7000,
            formattingFn: (val) => `${val}+`,
          },
          {
            label: 'Total Invested',
            value: 1.8,
            decimals: 1,
            formattingFn: (val) => `$${val}M`,
          },
          {
            label: 'Properties Funded',
            value: 60,
            formattingFn: (val) => `${val}+`,
          },
        ]}
      />
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={VALUE_PROPS}
      />
      <FaqsSection />
      <HowItWorks
        steps={[
          {
            title: 'Select a City',
            description: 'Choose from our 4 cityfunds with more coming soon',
            imageUrl: '/images/screen-1.png',
          },
          {
            title: 'Invest Money',
            description: 'Connect your bank account and invest in homeshares',
            imageUrl: '/images/screen-2.png',
          },
          {
            title: 'Build Wealth',
            description:
              'Grow your portfolio  while unlocking liquid equity for home owners',
            imageUrl: '/images/screen-3.png',
          },
        ]}
      />
      <Testimonials
        reviews={[
          {
            name: 'Veronica S.',
            location: 'Austin, TX',
            text: 'Invested with Nada originally and have been waiting for Cityfund to release! Excited to see the how the company will grow in the next few years- love the vision!',
          },
          {
            name: 'Ryan A.',
            location: 'Dallas, TX',
            text: 'To be part of a collective of investors in a steady growth market like Miami is definitely an advantage.',
          },
          {
            name: 'William B.',
            location: 'Miami, FL',
            text: 'I’ve always wanted to try and dip my toes in real estate investing! This looks like a good way to get started and from cities around the county. Super excited',
          },
          {
            name: 'Hansen N.',
            location: 'Miami, FL',
            text: 'Love the city, and love the process of investing in real estate.',
          },
          {
            name: 'Mylie A.',
            location: 'Austin, TX',
            text: 'I like that it makes real estate investment possible to everyday people.',
          },
          {
            name: 'Mark P.',
            location: 'Dallas, TX',
            text: 'Excited to easily invest in a diversified pool of RE. Looking for income & cap gains as a hedge to public markets.',
          },
        ]}
      />
      <PublisherCTA name={data?.partner?.name} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(partnerQuery, {
    slug: params.slug,
  });
  const partner = data?.partner ?? null;

  return {
    props: {
      preview,
      data: { partner },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(partnerSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
