import LongFormText from '@components/common/LongFormText';
import { Heading, LinkText, Overline } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { useState } from 'react';
import styled from 'styled-components';

interface NadaFaqsProps {
  faqs: { question: string; answer: string }[];
}

export default function NadaFaqs({ faqs }: NadaFaqsProps) {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper>
      <Overline>Frequently Asked Questions</Overline>

      {faqs.map(({ question, answer }, idx) => (
        <ContentWrapper key={idx}>
          <HoverHeading
            onClick={() => setActive(idx)}
            style={{ color: idx === active ? '#48DC95' : 'black' }}
          >
            {question}
          </HoverHeading>
          <TextWrapper style={{ display: idx === active ? 'block' : 'none' }}>
            <LongFormText content={answer} />
          </TextWrapper>
        </ContentWrapper>
      ))}

      <LinkText href={EXTERNAL_ROUTES.HUBSPOT_FAQS} target="_blank">
        See All FAQs
      </LinkText>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 6.25rem 9.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 4rem 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    height: inherit;
    margin-bottom: 1rem;
  }
`;

export const HoverHeading = styled(Heading)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
  cursor: pointer;
  width: 50%;
  font-size: 3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 45%;
  transition: ${({ theme }) => theme.transitions.ease};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
