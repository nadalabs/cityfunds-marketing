import FeaturedImage from '@components/FeaturedImage';
import KeyMetrics from '@components/KeyMetrics';
import PageLayout from '@components/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import CardSlider from '@sections/CardSlider';
import FaqsSection from '@sections/FaqsSection';
import FeaturedLogos from '@sections/FeaturedLogos';
import HowItWorks from '@sections/HowItWorks';
import PageHero from '@sections/PageHero';
import PublisherCTA from '@sections/PublisherCTA';
import Testimonials from '@sections/Testimonials';
import TextSlider from '@sections/TextSlider';
import {
  EXTERNAL_ROUTES,
  FEATURED_ARTICLES,
  VALUE_PROPS,
} from '@utils/constants';
import {
  partnerQuery,
  partnerSlugsQuery,
  testimonialIndexQuery,
} from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';

export default function PartnerPage({ partner, testimonials }) {
  return (
    <PageLayout partnerImage={partner?.coverImage}>
      <PageHero
        heading="Own a Piece of Your Favorite City"
        primaryText="Diversified real estate portfolios with passive income in the nations top cities."
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        heroImages={[
          {
            name: 'Dallas',
            imageUrl: '/images/dallas-hero.png',
            numProperties: 19,
          },
          {
            name: 'Austin',
            imageUrl: '/images/austin-hero.png',
            numProperties: 30,
          },
          {
            name: 'Miami',
            imageUrl: '/images/miami-hero.png',
            numProperties: 9,
          },
          {
            name: 'Tampa',
            imageUrl: '/images/tampa-hero.png',
            numProperties: 3,
          },
        ]}
      />
      <FeaturedLogos overline="Featured In" logos={FEATURED_ARTICLES} />
      <CardSlider
        heading="Pick your favorite Cityfund, or invest in all of them"
        primaryText={
          'Cityfunds is the only investment platform that provides direct access to diversified portfolios of owner-occupied homes in the nation’s top cities.'
        }
        cards={[
          {
            title: 'Dallas',
            description: '19 Properties',
            imageUrl: '/images/dallas.png',
          },
          {
            title: 'Austin',
            description: '30 Properties',
            imageUrl: '/images/austin.png',
          },
          {
            title: 'Miami',
            description: '9 Properties',
            imageUrl: '/images/miami.png',
          },
          {
            title: 'Tampa',
            description: '3 Properties',
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
      <SectionWrapper>
        <FeaturedImage
          overline="Why Cityfunds?"
          heading="Location, Location, Location"
          primaryText="Investing in real estate is all about location, yet the increased
            cost of living have made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes."
          imageUrl="/images/location-tiles.png"
          btnText="Get Started"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        />
        <KeyMetrics
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
      </SectionWrapper>
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={VALUE_PROPS}
      />
      <FaqsSection />
      <HowItWorks
        overline="Real Estate Investing Simplified"
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
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
      />
      <Testimonials reviews={testimonials} />
      <PublisherCTA name={partner?.name} />
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const testimonials = await getClient(preview).fetch(testimonialIndexQuery);
  const data = await getClient(preview).fetch(partnerQuery, {
    slug: params.slug,
  });
  const partner = data?.partner ?? null;

  return {
    props: { partner, testimonials },
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
