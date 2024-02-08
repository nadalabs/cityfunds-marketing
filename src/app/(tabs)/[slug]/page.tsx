import { legalQuery, legalSlugsQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity';
import LongFormText from '@components/common/LongFormText';
import { SectionWrapper } from '@elements/Containers';
import { format, parseISO } from 'date-fns';
import { Heading, LinkText } from '@elements/Typography';
import { LEGAL_LINKS } from '@utils/constants';
import PageTracker from '@components/common/PageTracker';

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

  return (
    <PageTracker pageName="Legal">
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
    </PageTracker>
  );
}
