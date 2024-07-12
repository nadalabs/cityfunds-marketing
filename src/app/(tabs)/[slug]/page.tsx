import { legalQuery, legalSlugsQuery } from 'lib/queries';
import { getCityfundsAppContent, sanityClient } from 'lib/sanity';
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
  const cityfundsApp = await getCityfundsAppContent();
  const legalData = await sanityClient.fetch(legalQuery, {
    slug: params.slug,
  });
  const legal = legalData?.legal ?? null;

  if (cityfundsApp?.investor_promo?.show_promo) {
    LEGAL_LINKS.push({
      name: 'Rewards Program',
      link: cityfundsApp?.investor_promo?.legal_url,
      isNewTab: true,
    });
  }
  // if (cityfundsApp?.investor_promo_two?.show_promo) {
  //   LEGAL_LINKS.push({
  //     name: 'Rewards Program II',
  //     link: cityfundsApp?.investor_promo_two?.legal_url,
  //     isNewTab: true,
  //   });
  // }

  return (
    <PageTracker pageName="Legal">
      <SectionWrapper style={{ flexDirection: 'column' }}>
        <div style={{ margin: '4rem 0', width: '100%' }}>
          <Heading>Transparency</Heading>
          {LEGAL_LINKS.map(({ name, link, isNewTab }, idx) => (
            <LinkText
              key={idx}
              href={link}
              target={isNewTab ? '_blank' : '_self'}
              style={{ marginBottom: '1rem' }}
            >
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
