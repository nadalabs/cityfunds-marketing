import PageLayout from '@components/PageLayout';
import { Heading, LinkText } from '@elements/Typography';
import LongFormText from '@sections/LongFormText';
import { LEGAL_LINKS } from '@utils/constants';
import { legalQuery, legalSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';
import { styled } from 'styled-components';

export default function LegalPage({ preview, data }) {
  return (
    <PageLayout isDarkMode>
      <HeadingWrapper>
        <Heading>Transparency</Heading>
        {LEGAL_LINKS.map(({ name, link }, idx) => (
          <StyledLink key={idx} href={link}>
            {name}
          </StyledLink>
        ))}
      </HeadingWrapper>
      <LongFormText
        overline={`Last updated ${data?.legal?.date}`}
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

const HeadingWrapper = styled.div`
  padding: 200px 150px 0px 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 10rem 2rem 2rem 2rem;
  }
`;

const StyledLink = styled(LinkText)`
  font-size: 32px;
  line-height: 52px;
  margin-right: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 18px;
    line-height: 32px;
    margin-right: 1rem;
  }
`;
