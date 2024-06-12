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
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface BlogHeroProps {
  blogPosts: {
    title: string;
    coverImage: string;
    author: string;
    date: any;
    excerpt: string;
    tag: string;
    slug: string;
  }[];
}

export default function BlogHero({ blogPosts }: BlogHeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const sliderRef = useRef();
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    arrows: false,
    beforeChange: (_, next) => setActiveIdx(next),
  };
  const activeBlogSlug = blogPosts[activeIdx]?.slug;

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
              <Link href={`/learn/${activeBlogSlug}/#read`}>
                <FlexWrapper>
                  <ImageWrapper>
                    <Image
                      fill
                      alt={post?.title}
                      style={{ borderRadius: '2rem' }}
                      src={
                        post?.coverImage
                          ? urlForImage(post?.coverImage, 400, 500)
                          : '/images/nada-press.png'
                      }
                    />
                  </ImageWrapper>

                  <CardWrapper>
                    <Overline>{post?.tag}</Overline>
                    <SmallHeading>{post?.title}</SmallHeading>
                    <PrimaryText>{post?.excerpt}</PrimaryText>

                    <div>
                      {post?.author && (
                        <PrimaryText>By {String(post?.author)}</PrimaryText>
                      )}
                      {post?.date && (
                        <PrimaryText>
                          <time dateTime={post?.date}>
                            {format(parseISO(post?.date), 'LLLL	d, yyyy')}
                          </time>
                        </PrimaryText>
                      )}
                    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 75rem;
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
