import FeaturedImage from '@components/FeaturedImage';
import FeaturedLogos from '@components/FeaturedLogos';
import AlertBanner from '@components/cityfunds/AlertBanner';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import HowItWorks from '@components/cityfunds/HowItWorks';
import InvestorPromo from '@components/cityfunds/InvestorPromo';
import KeyMetrics from '@components/cityfunds/KeyMetrics';
import NadaFaqs from '@components/cityfunds/NadaFaqs';
import Testimonials from '@components/cityfunds/Testimonials';
import TextSlider from '@components/cityfunds/TextSlider';
import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import {
  getAllFundsContent,
  getHomePageContent,
  sanityClient,
} from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';

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
        btnText="Explore Offerings"
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}`, '_blank')
        }
        formName="Cityfunds Lead"
        heroImages={cityfunds
          .filter(
            ({ fund_data }) =>
              fund_data?.regulation === REGULATION.RETAIL &&
              fund_data?.fund_status !== FUND_STATUS.NEW_OFFERING
          )
          .map(({ fund_content }) => ({
            name: fund_content?.fund_name,
            heroImage: fund_content?.image_gallery[0],
          }))}
        bannerText={!!bannerText}
      />
      <FeaturedLogos overline="Featured In" logos={logos} seeMore />
      <CityfundSlider cityfunds={cityfunds} isHome />
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
        onClick={() =>
          window.open(`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`, '_blank')
        }
        isPhoneFrame
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
          onClick={() =>
            window.open(
              `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`,
              '_blank'
            )
          }
          isShortHeader
        />
        <KeyMetrics
          metrics={[
            {
              label: 'Total Investors',
              value: 10,
              formattingFn: (val) => `${val}K+`,
            },
            {
              label: 'Properties Funded',
              value: 70,
              formattingFn: (val) => `${val}+`,
            },
            {
              label: 'Gross Asset Value',
              value: 35,
              formattingFn: (val) => `$${val}M+`,
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
          onClick={() =>
            window.open(
              `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`,
              '_blank'
            )
          }
          isReversed
        />
      </SectionWrapper>
      <TextSlider
        overline="You may be wondering..."
        heading="Why Cityfunds?"
        primaryText="We have plenty of reasons."
        valueProps={values}
      />
      <NadaFaqs faqs={homePage?.questions} />
      <Testimonials reviews={testimonials} />
      {homePage?.promo && <InvestorPromo promo={homePage?.promo} />}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();
  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  const homePage = await getHomePageContent();
  const testimonials = await sanityClient.fetch(cityfundsTestimonialsQuery);
  const logos = await sanityClient.fetch(pressLogosQueryQuery);
  const values = await sanityClient.fetch(cityfundsValuesQuery);

  return {
    props: { homePage, cityfunds, testimonials, logos, values },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
