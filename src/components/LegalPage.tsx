import LongFormText from '@components/common/LongFormText';
import PageLayout from '@components/common/PageLayout';
import { SectionWrapper } from '@elements/Containers';
import { Heading, LinkText } from '@elements/Typography';
import { LEGAL_LINKS } from '@utils/constants';
import { format, parseISO } from 'date-fns';
import { styled } from 'styled-components';

interface LegalPageProps {
  legal: any;
}

export default function LegalPage({ legal }: LegalPageProps) {
  return (
    <PageLayout>
      <HeadingWrapper>
        <Heading>Transparency</Heading>
        {LEGAL_LINKS.map(({ name, link }, idx) => (
          <StyledLink key={idx} href={link}>
            {name}
          </StyledLink>
        ))}
      </HeadingWrapper>

      <SectionWrapper>
        <LongFormText
          overline={`Last updated ${format(
            parseISO(legal?.date),
            'LLLL	d, yyyy'
          )}`}
          title={legal?.title}
          content={legal?.content}
        />
      </SectionWrapper>
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
  font-size: 24px;
  line-height: 40px;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 18px;
    line-height: 32px;
    margin-right: 1rem;
  }
`;
