import { Heading, HeadingSmall, Overline, Text } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { format, parseISO } from 'date-fns';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import styled from 'styled-components';

interface BlogSliderProps {
  tag: string;
  blogPosts: {
    title: string;
    coverImage: string;
    date;
    excerpt: string;
    tag: string;
    slug: string;
  }[];
}

export default function BlogSlider({ tag, blogPosts }: BlogSliderProps) {
  const isMobile = useIsMobile();
  const settings = {
    dots: false,
    slidesToShow: isMobile ? 1.25 : 2.5,
    swipeToSlide: true,
    infinite: false,
  };

  return (
    <SectionWrapper>
      <Heading>{tag}</Heading>

      <Slider {...settings}>
        {blogPosts.map(({ title, date, excerpt, coverImage, slug }, idx) => (
          <Link key={idx} href={`/learn/${slug}`}>
            <CardWrapper>
              <Image
                width={420}
                height={340}
                alt={title}
                src={urlForImage(coverImage).height(480).width(690).url()}
                style={{
                  borderRadius: '50px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                }}
              />
              <Overline>
                <time dateTime={date}>
                  {format(parseISO(date), 'LLLL	d, yyyy')}
                </time>
              </Overline>
              <HeadingSmall>{title}</HeadingSmall>
              <Text style={{ color: '#989898' }}>{excerpt}</Text>
            </CardWrapper>
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
  transition: ${({ theme }) => theme.transitions.ease};
  max-width: 420px;

  &:hover {
    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 195px;
    height: 195px;
    padding: 16px;
    margin-right: 12px;
  }
`;
