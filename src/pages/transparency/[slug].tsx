import PageLayout from '@components/PageLayout';
import { Heading, LinkText } from '@elements/Typography';
import LongFormText from '@sections/LongFormText';
import { LEGAL_LINKS } from '@utils/constants';
import { legalQuery, legalSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';

export default function LegalPage({ preview, data }) {
  return (
    <PageLayout isDarkMode>
      <div style={{ padding: '200px 150px 0px 150px' }}>
        <Heading>Transparency</Heading>
        {LEGAL_LINKS.map(({ name, link }, idx) => (
          <LinkText key={idx} href={link}>
            {name}
          </LinkText>
        ))}
      </div>
      <LongFormText
        overline={`Last updated `}
        title={data?.legal?.title}
        content={data?.legal?.content}
      />
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(legalQuery, {
    slug: params.slug,
  });
  const legal = data?.legal ?? null;

  return {
    props: {
      preview,
      data: { legal },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(legalSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
