import {
  BoldText,
  Overline,
  PrimaryText,
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
      <SmallHeading style={{ marginBottom: '2rem' }}>{tag}</SmallHeading>

      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {blogPosts.map(({ title, date, excerpt, coverImage, slug }, idx) => (
          <Link key={idx} href={`/learn/${slug}`}>
            <CardWrapper style={{ width: '500px' }}>
              <Image
                alt={title}
                src={urlForImage(coverImage).url()}
                width={300}
                height={200}
                style={{ borderRadius: '2rem' }}
              />
              <Overline>
                <time dateTime={date}>
                  {format(parseISO(date), 'LLLL	d, yyyy')}
                </time>
              </Overline>
              <BoldText>{title}</BoldText>
              <PrimaryText>{excerpt}</PrimaryText>
            </CardWrapper>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 5rem 0 0 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px 0 24px 24px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: ${({ theme }) => theme.transitions.ease};
  max-width: 300px;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
  }
`;
