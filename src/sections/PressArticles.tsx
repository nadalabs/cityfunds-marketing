import { Heading, Overline } from '@elements/Typography';
import Link from 'next/link';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

interface PressArticlesProps {
  articles: any[];
}

export default function PressArticles({ articles }: PressArticlesProps) {
  return (
    <SectionWrapper>
      {articles.map(({ title, publisher, date, link }, idx) => (
        <Link key={idx} href={link} target="_blank">
          <Overline style={{color: '#48DC95'}}>{publisher}</Overline>
          <Overline>
          <time dateTime={date}>
                  {format(parseISO(date), 'LLLL	d, yyyy')}
                </time>
          </Overline>
          <Heading>{title}</Heading>
          <hr />
        </Link>
      ))}
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 76px 156px 147px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;
