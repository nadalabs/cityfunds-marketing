import FeaturedImage from '@components/FeaturedImage';
import FeaturedLogos from '@components/FeaturedLogos';
import AlertBanner from '@components/cityfunds/AlertBanner';
import CityfundsSlider from '@components/cityfunds/CityfundsSlider';
import FaqsSection from '@components/cityfunds/FaqsSection';
import HowItWorks from '@components/cityfunds/HowItWorks';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import PromoCTA from '@components/cityfunds/PromoCTA';
import Testimonials from '@components/cityfunds/Testimonials';
import TextSlider from '@components/cityfunds/TextSlider';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { EXTERNAL_ROUTES, FEATURED_CITIES } from '@utils/constants';
import { REGULATION } from '@utils/models';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  homeIndexQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import { getClient } from 'lib/sanity.server';

interface HomePageProps {
  homePage?: any;
  logos: any;
  testimonials: any;
  values: any;
  partner: any;
}

export default function HomePage({
  homePage,
  logos,
  testimonials,
  values,
  partner,
}: HomePageProps) {
  const bannerText = partner?.promo?.banner || homePage?.promo?.banner;
  const retailFunds = FEATURED_CITIES.filter(
    ({ information }) => information.regulation !== REGULATION.REG_D
  );

  return (
    <PageLayout partnerImage={partner?.coverImage} bannerText={bannerText}>
      {bannerText && <AlertBanner primaryText={bannerText} />}
      <PageHero
        heading="Own a Piece of Your Favorite City"
        primaryText="Diversified real estate portfolios in the nation’s top cities."
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        formName="Cityfunds Lead"
        heroImages={retailFunds.map(({ name, images }) => ({
          name,
          heroImage: images.heroImage,
        }))}
      />
      <FeaturedLogos overline="Featured In" logos={logos} seeMore />
      <CityfundsSlider
        heading="Pick your favorite Cityfund, or invest in all of them"
        primaryText={
          'Cityfunds is the only investment platform that provides direct access to diversified portfolios of owner-occupied homes in the nation’s top cities.'
        }
        cards={[
          ...retailFunds,
          // {
          //   name: 'Coming Soon',
          //   cardImage: '/images/coming-soon-1.png',
          //   isSmallText: true,
          // },
          // {
          //   name: 'Coming Soon',
          //   cardImage: '/images/coming-soon-2.png',
          //   isSmallText: true,
          // },
        ]}
      />
      <SectionWrapper>
        <FeaturedImage
          overline="Why Cityfunds?"
          heading="Location, Location, Location"
          primaryText="Investing in real estate is all about location, yet the increased
            cost of living has made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes."
          imageUrl="/images/location-tiles.png"
          btnText="Get Started"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          isShortHeader
        />
        <KeyMetrics
          metrics={[
            {
              label: 'Total Investors',
              value: 7000,
              formattingFn: (val) => `${val.toLocaleString('us-en')}+`,
            },
            {
              label: 'Properties Funded',
              value: 60,
              formattingFn: (val) => `${val}+`,
            },
            {
              label: 'Average Appreciation',
              value: 11.7,
              formattingFn: (val) => `${val}%`,
              decimals: 1,
            },
          ]}
        />
      </SectionWrapper>
      <SectionWrapper>
        <FeaturedImage
          overline="What am I investing in?"
          heading="Diversified Portfolios of Homes"
          primaryText="Own fractional shares of peoples homes across the nations top cities on day one."
          imageUrl="/images/location-map.png"
          btnText="Get Started"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          isReversed
        />
      </SectionWrapper>
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={values}
      />
      <FaqsSection overline='You may also be wondering...' />
      <HowItWorks
        overline="Real Estate Investing Simplified"
        steps={[
          {
            title: 'Select a City',
            description: 'Choose from our 4 Cityfunds with more coming soon',
            imageUrl: '/images/screen-1.png',
          },
          {
            title: 'Invest Money',
            description: 'Connect your bank account and invest',
            imageUrl: '/images/screen-2.png',
          },
          {
            title: 'Build Wealth',
            description: 'Grow your portfolio passively',
            imageUrl: '/images/screen-3.png',
          },
        ]}
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        isPhoneFrame
      />
      <Testimonials reviews={testimonials} />
      <PromoCTA
        promo={partner?.promo || homePage?.promo}
        overline={partner?.name ? `Limited Time Bonus` : ''}
      />
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const homePage = await getClient(preview).fetch(homeIndexQuery);
  const testimonials = await getClient(preview).fetch(
    cityfundsTestimonialsQuery
  );
  const logos = await getClient(preview).fetch(pressLogosQueryQuery);
  const values = await getClient(preview).fetch(cityfundsValuesQuery);

  return {
    props: { homePage: homePage[0], testimonials, logos, values },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
