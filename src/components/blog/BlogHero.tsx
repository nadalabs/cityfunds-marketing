import CarouselStepper from '@components/common/CarouselStepper';
import { SectionWrapper } from '@elements/Containers';
import {
  LinkText,
  Overline,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import { format, parseISO } from 'date-fns';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface BlogHeroProps {
  blogPosts: {
    title: string;
    coverImage: string;
    date: any;
    excerpt: string;
    tag: string;
    slug: string;
  }[];
}

export default function BlogHero({ blogPosts }: BlogHeroProps) {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <BackgroundWrapper>
      {blogPosts.length === 1 && (
        <LinkText href="/learn">Back to Blog</LinkText>
      )}

      <Slider {...settings} ref={sliderRef}>
        {blogPosts.map((post, idx) => (
          <div key={idx} onClick={() => console.log(post?.slug, idx)}>
            <Link href={`/learn/${post?.slug}`}>
              <FlexWrapper>
                <ImageWrapper>
                  <Image
                    fill
                    alt={post?.title}
                    style={{ borderRadius: '60px' }}
                    src={
                      post?.coverImage
                        ? urlForImage(post?.coverImage).url()
                        : '/images/nada-press.png'
                    }
                  />
                </ImageWrapper>

                <CardWrapper>
                  <Overline>{post?.tag}</Overline>
                  <SmallHeading>{post?.title}</SmallHeading>
                  <PrimaryText>{post?.excerpt}</PrimaryText>
                  {post?.date && (
                    <PrimaryText>
                      <time dateTime={post?.date}>
                        {format(parseISO(post?.date), 'LLLL	d, yyyy')}
                      </time>
                    </PrimaryText>
                  )}
                </CardWrapper>
              </FlexWrapper>
            </Link>

            {blogPosts.length > 1 && (
              <CarouselStepper
                activeStep={idx}
                totalSteps={blogPosts.length}
                sliderRef={sliderRef}
              />
            )}
          </div>
        ))}
      </Slider>
    </BackgroundWrapper>
  );
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  height: 480px;
  background: #ffffff;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  padding: 50px 82px;
  margin: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: inherit;
    padding: 0;
    box-shadow: none;
    background: #fbfbfb;
  }
`;

const BackgroundWrapper = styled(SectionWrapper)`
  padding-top: 20vh;
  background-color: #fbfbfb;
  height: 110vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 125px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 50px;
  position: relative;
  width: 50%;
  height: 480px;
  margin-right: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 350px;
    margin-right: 0;
  }
`;
