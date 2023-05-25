import Footer from '@components/Footer';
import { PrimaryText } from '@elements/Typography';
import LongFormText from '@sections/LongFormText';
import Slider from 'react-slick';
import { indexQuery } from '../../lib/queries';
import { getClient, overlayDrafts } from '../../lib/sanity.server';

export default function LearnPage({ allPosts, preview }) {
  const topics = [
    'Terms of Use',
    'Terms & Conditions',
    'Privacy policy',
    'Cookie policy',
  ];
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <>
      <Slider {...settings}>
        {allPosts.map(() => (
          <div>
            {topics.map((topic) => (
              <PrimaryText>{topic}</PrimaryText>
            ))}
            <LongFormText title="" overline="" content="" />
          </div>
        ))}
      </Slider>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
