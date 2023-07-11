import {
  Overline,
  SecondaryText,
  SmallHeading,
} from '@elements/Typography';
import { format, parseISO } from 'date-fns';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <SectionWrapper>
      <SmallHeading style={{ marginBottom: '48px' }}>{tag}</SmallHeading>

      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {blogPosts.map(({ title, date, excerpt, coverImage, slug }, idx) => (
          <Link key={idx} href={`/learn/${slug}`}>
            <CardWrapper>
              <ImageWrapper>
                <Image fill alt={title} src={urlForImage(coverImage).url()} />
              </ImageWrapper>

              <Overline>
                <time dateTime={date}>
                  {format(parseISO(date), 'LLLL	d, yyyy')}
                </time>
              </Overline>
              <SmallHeading>{title}</SmallHeading>
              <SecondaryText>{excerpt}</SecondaryText>
            </CardWrapper>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 140px 0 0 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px 0 24px 24px;
  }
`;

export const CardWrapper = styled.div`
  transition: ${({ theme }) => theme.transitions.ease};
  max-width: 420px;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 280px;
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
    height: 300px;
  }
`;
