import { SectionWrapper } from '@elements/Containers';
import {
  GreenSquare,
  LinkText,
  Overline,
  SecondaryText,
  TertiaryHeading,
} from '@elements/Typography';
import { format, isValid, parseISO } from 'date-fns';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
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
    arrows: false,
  };

  return (
    <SectionWrapper style={{ backgroundColor: '#FBFBFB' }}>
      {blogPosts.length === 1 && (
        <LinkText href="/learn" style={{ marginTop: '200px' }}>
          Back to Blog
        </LinkText>
      )}

      <Slider {...settings}>
        {blogPosts.map((post, idx) => (
          <div key={idx}>
            <div>
              <Link href={`/learn/${post?.slug}`}>
                <FlexWrapper>
                  <ImageWrapper>
                    <Image
                      fill
                      alt={post?.title}
                      src={
                        post?.coverImage
                          ? urlForImage(post?.coverImage).url()
                          : '/images/nada-press.png'
                      }
                    />
                  </ImageWrapper>
                  <CardWrapper>
                    <Overline>{post?.tag}</Overline>
                    <TertiaryHeading>{post?.title}</TertiaryHeading>
                    <SecondaryText>{post?.excerpt}</SecondaryText>
                    <SecondaryText>
                      <time dateTime={post?.date}>
                        {isValid(post?.date)
                          ? format(parseISO(post?.date), 'LLLL	d, yyyy')
                          : 'Invalid date'}
                      </time>
                    </SecondaryText>
                  </CardWrapper>
                </FlexWrapper>
              </Link>
            </div>

            {blogPosts.length > 1 && (
              <div style={{ display: 'flex' }}>
                {blogPosts.map((_, jdx) => (
                  <GreenSquare
                    key={jdx}
                    style={{
                      backgroundColor: idx !== jdx ? '#B0B0B0' : '#48DC95',
                      marginRight: '8px',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const CardWrapper = styled.div`
  width: 50%;
  height: 480px;
  background: #ffffff;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  padding: 50px 82px;
  margin: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 30px;
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
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
    margin-right: 0;
  }
`;
