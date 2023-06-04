import PageLayout from '@components/PageLayout';
import { Heading, LinkText } from '@elements/Typography';
import LongFormText from '@sections/LongFormText';
import { LEGAL_LINKS } from '@utils/constants';
import { styled } from 'styled-components';

interface LegalPageProps {
  legal: any;
}

export default function LegalPage({ legal }: LegalPageProps) {
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
        overline={`Last updated ${legal?.date}`}
        title={legal?.title}
        content={legal?.content}
      />
    </PageLayout>
  );
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
