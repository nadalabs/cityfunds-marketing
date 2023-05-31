import { SectionWrapper } from '@elements/Containers';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  SecondaryText,
} from '@elements/Typography';
import { format, parseISO } from 'date-fns';
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
  };

  return (
    <SectionWrapper style={{ backgroundColor: '#FBFBFB' }}>
      <Slider {...settings}>
        {blogPosts.map(
          ({ title, coverImage, date, excerpt, tag, slug }, idx) => (
            <div key={idx}>
              <div>
                <Link href={`/learn/${slug}`}>
                  <FlexWrapper>
                    <ImageWrapper>
                      <Image
                        fill
                        alt={title}
                        src={urlForImage(coverImage).url()}
                      />
                    </ImageWrapper>
                    <CardWrapper>
                      <Overline>{tag}</Overline>
                      <Heading
                        style={{
                          fontSize: '32px',
                          lineHeight: '36px',
                          marginBottom: '16px',
                        }}
                      >
                        {title}
                      </Heading>
                      <PrimaryText
                        style={{ fontSize: '18px', lineHeight: '24px' }}
                      >
                        {excerpt}
                      </PrimaryText>
                      <SecondaryText
                        style={{ fontSize: '14px', lineHeight: '18px' }}
                      >
                        <time dateTime={date}>
                          {format(parseISO(date), 'LLLL	d, yyyy')}
                        </time>
                      </SecondaryText>
                    </CardWrapper>
                  </FlexWrapper>
                </Link>
              </div>

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
            </div>
          )
        )}
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
  margin-right: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 0;
  }
`;
