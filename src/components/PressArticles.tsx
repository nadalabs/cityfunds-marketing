import { SectionWrapper } from '@elements/Containers';
import { Overline, SecondaryHeading } from '@elements/Typography';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

interface PressArticlesProps {
  articles: any[];
}

export default function PressArticles({ articles }: PressArticlesProps) {
  return (
    <SectionWrapper>
      {articles.map(({ title, publisher, date, link }, idx) => (
        <Link key={idx} href={link} target="_blank">
          <Overline style={{ color: '#48DC95', marginBottom: 0 }}>
            {publisher}
          </Overline>
          <Overline>
            <time dateTime={date}>{format(parseISO(date), 'LLLL	d, yyyy')}</time>
          </Overline>
          <SecondaryHeading>{title}</SecondaryHeading>
          <hr style={{ margin: '2rem 0' }} />
        </Link>
      ))}
    </SectionWrapper>
  );
}
