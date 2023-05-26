import { Heading, Overline, PrimaryText, Text } from '@elements/Typography';
import { isMobileDevice } from '@utils/helpers';
import { format, parseISO } from 'date-fns';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import styled from 'styled-components';

interface BlogSliderProps {
  topic: string;
  blogPosts: {
    title: string;
    coverImage: string;
    date;
    excerpt: string;
    tag: string;
    slug: string;
  }[];
}

export default function BlogSlider({ topic, blogPosts }: BlogSliderProps) {
  const isMobile = isMobileDevice();
  const settings = {
    dots: false,
    slidesToShow: isMobile ? 1.25 : 2.5,
    swipeToSlide: true,
    infinite: false,
  };

  return (
    <SectionWrapper>
      <Heading>{topic}</Heading>

      <Slider {...settings}>
        {blogPosts.map(({ title, date, excerpt, coverImage, slug }, idx) => (
          <Link key={idx} href={`/learn/${slug}`}>
            <Image
              width={420}
              height={340}
              alt={title}
              src={urlForImage(coverImage).height(480).width(690).url()}
              style={{ borderRadius: '50px' }}
            />
            <Overline>
              <time dateTime={date}>
                {format(parseISO(date), 'LLLL	d, yyyy')}
              </time>
            </Overline>
            <PrimaryText>{title}</PrimaryText>
            <Text>{excerpt}</Text>
          </Link>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 140px 0 0 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 0 0 24px;
  }
`;

export const CardWrapper = styled.div`
  background-size: cover;
  width: 450px;
  height: 450px;
  padding: 40px;
  display: flex;
  align-items: flex-end;
  position: relative;
  transition: ${({ theme }) => theme.transitions.ease};

  &:hover {
    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.1);
    height: 500px;
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 195px;
    height: 195px;
    padding: 16px;
    margin-right: 12px;
  }
`;
