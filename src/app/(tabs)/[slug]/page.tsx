import { trackPageView } from '@utils/helpers';
import { legalQuery, legalSlugsQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import { useEffect } from 'react';
import LongFormText from '@components/common/LongFormText';
import { SectionWrapper } from '@elements/Containers';
import { format, parseISO } from 'date-fns';
import { Heading, LinkText } from '@elements/Typography';
import { LEGAL_LINKS } from '@utils/constants';

export async function generateStaticParams() {
  const legalSlugs = await sanityClient.fetch(legalSlugsQuery);
  const filteredSlugs =
    legalSlugs?.filter((legal) => legal !== 'footer') ?? null;
  return filteredSlugs?.map((slug) => ({ slug }));
}

export default async function LegalPage({ params }) {
  const legalData = await sanityClient.fetch(legalQuery, {
    slug: params.slug,
  });
  const legal = legalData?.legal ?? null;

  // useEffect(() => {
  //   trackPageView(`Legal Page Viewed`);
  // });

  return (
    <SectionWrapper>
      <div style={{ margin: '4rem 0' }}>
        <Heading>Transparency</Heading>
        {LEGAL_LINKS.map(({ name, link }, idx) => (
          <LinkText key={idx} href={link} style={{ marginBottom: '1rem' }}>
            {name}
          </LinkText>
        ))}
      </div>

      <LongFormText
        overline={`Last updated ${format(
          parseISO(legal?.date),
          'LLLL	d, yyyy'
        )}`}
        title={legal?.title}
        content={legal?.content}
      />
    </SectionWrapper>
  );
}
