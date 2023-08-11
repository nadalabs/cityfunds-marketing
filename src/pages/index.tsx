import FeaturedImage from '@components/FeaturedImage';
import FeaturedLogos from '@components/FeaturedLogos';
import AlertBanner from '@components/cityfunds/AlertBanner';
import CityfundCards from '@components/cityfunds/CityfundCards';
import NadaFaqs from '@components/cityfunds/NadaFaqs';
import HowItWorks from '@components/cityfunds/HowItWorks';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import PromoCTA from '@components/cityfunds/PromoCTA';
import Testimonials from '@components/cityfunds/Testimonials';
import TextSlider from '@components/cityfunds/TextSlider';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { EXTERNAL_ROUTES, FAQS } from '@utils/constants';
import {
  cityfundIndexQuery,
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  homeIndexQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import { sanityClient } from 'lib/sanity';

interface HomePageProps {
  homePage?: any;
  cityfunds: any[];
  logos: any;
  testimonials: any;
  values: any;
  partner: any;
}

export default function HomePage({
  homePage,
  cityfunds,
  logos,
  testimonials,
  values,
  partner,
}: HomePageProps) {
  const bannerText = partner?.promo?.banner || homePage?.promo?.banner;

  return (
    <PageLayout
      partnerImage={partner?.coverImage}
      bannerText={bannerText}
      hideLinks={!!partner}
    >
      {bannerText && <AlertBanner primaryText={bannerText} />}
      <PageHero
        heading="Own a Piece of Your Favorite City"
        primaryText="Diversified real estate portfolios in the nation’s top cities."
        btnText="Get Started"
        onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        formName="Cityfunds Lead"
        heroImages={cityfunds.map(({ name, images }) => ({
          name,
          heroImage: images.heroImage,
        }))}
        bannerText={!!bannerText}
      />
      <FeaturedLogos overline="Featured In" logos={logos} seeMore />
      <CityfundCards cityfunds={cityfunds} />
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
      <NadaFaqs overline="You may also be wondering..." faqs={FAQS} />
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

export async function getStaticProps() {
  const homePage = await sanityClient.fetch(homeIndexQuery);
  const cityfunds = await sanityClient.fetch(cityfundIndexQuery);
  const testimonials = await sanityClient.fetch(
    cityfundsTestimonialsQuery
  );
  const logos = await sanityClient.fetch(pressLogosQueryQuery);
  const values = await sanityClient.fetch(cityfundsValuesQuery);

  return {
    props: { homePage: homePage[0], cityfunds, testimonials, logos, values },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
