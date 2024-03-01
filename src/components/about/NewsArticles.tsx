'use client';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Overline, SmallHeading } from '@elements/Typography';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

interface PressArticlesProps {
  articles: any[];
}

export default function PressArticles({ articles }: PressArticlesProps) {
  return (
    <SectionWrapper>
      <StackWrapper>
        {articles?.map(({ title, publisher, date, link }, idx) => (
          <Link key={idx} href={link} target="_blank">
            <Overline style={{ color: '#48DC95', marginBottom: 0 }}>
              {publisher}
            </Overline>
            <Overline>
              <time dateTime={date}>
                {format(parseISO(date), 'LLLL	d, yyyy')}
              </time>
            </Overline>
            <SmallHeading>{title}</SmallHeading>
            <hr style={{ margin: '2rem 0' }} />
          </Link>
        ))}
      </StackWrapper>
    </SectionWrapper>
  );
}
