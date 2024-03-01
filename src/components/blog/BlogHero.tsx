'use client';
import ImageStepper from '@components/common/ImageStepper';
import { HeroWrapper } from '@elements/Containers';
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
    <HeroWrapper>
      <ContentWrapper>
        {blogPosts.length === 1 && (
          <div style={{ paddingBottom: '2rem' }}>
            <LinkText href="/learn">Back to Blog</LinkText>
          </div>
        )}

        <Slider {...settings} ref={sliderRef}>
          {blogPosts.map((post, idx) => (
            <div key={idx}>
              <Link href={`/learn/${post?.slug}`}>
                <FlexWrapper>
                  <ImageWrapper>
                    <Image
                      fill
                      alt={post?.title}
                      style={{ borderRadius: '2rem' }}
                      src={
                        post?.coverImage
                          ? urlForImage(post?.coverImage)
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
                <ImageStepper
                  activeStep={idx}
                  totalSteps={blogPosts.length}
                  sliderRef={sliderRef}
                />
              )}
            </div>
          ))}
        </Slider>
      </ContentWrapper>
    </HeroWrapper>
  );
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  height: 400px;
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
  padding: 3rem 4rem;
  margin: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: inherit;
    padding: 0;
    box-shadow: none;
    background: #fbfbfb;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 75rem;
  padding-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 6rem;
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
  position: relative;
  width: 50%;
  height: 400px;
  margin-right: 48px;
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 280px;
    margin-right: 0;
  }
`;
