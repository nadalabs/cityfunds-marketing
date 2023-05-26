import Footer from '@components/Footer';
import Header from '@components/Header';
import { Heading, LinkText } from '@elements/Typography';
import LongFormText from '@sections/LongFormText';
import { legalQuery, legalSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';

export default function LegalPage({ preview, data }) {
  const LEGAL_LINKS = [
    { title: 'Terms of Use', link: '/transparency/terms-of-use' },
    { title: 'Privacy Policy', link: '/transparency/privacy-policy' },
    { title: 'Cookie Policy', link: '/transparency/cookie-policy' },
    {
      title: 'Consumer Complaint Policy',
      link: '/transparency/consumer-complaints-policy',
    },
    {
      title: 'Electronic Funds Transfer',
      link: '/transparency/electronic-funds-transfer',
    },
    {
      title: 'Nada SEC Filings',
      link: 'https://www.sec.gov/edgar/browse/?CIK=0001801613',
    },
    {
      title: 'Cityfunds SEC Filings',
      link: 'https://www.sec.gov/edgar/search/#/ciks=0001874979&entityName=Cityfunds%2520I%252C%2520LLC%2520(CIK%25200001874979)',
    },
  ];

  return (
    <>
      <Header />
      <div style={{ padding: '200px 150px 0px 150px' }}>
        <Heading>Transparency</Heading>
        {LEGAL_LINKS.map(({ title, link }) => (
          <LinkText href={link}>{title}</LinkText>
        ))}
      </div>
      <LongFormText
        overline={`Last updated `}
        title={data.legal.title}
        content={data.legal.content}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { legal } = await getClient(preview).fetch(legalQuery, {
    slug: params.slug,
  });

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
