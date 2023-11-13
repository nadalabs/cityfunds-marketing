import LongFormText from '@components/common/LongFormText';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, LinkText, Overline } from '@elements/Typography';
import { useState } from 'react';
import styled from 'styled-components';

interface NadaFaqsProps {
  faqs: { question: string; answer: string }[];
  link: string;
  linkText?: string;
  isBackground?: boolean;
}

export default function NadaFaqs({
  faqs,
  link,
  linkText,
  isBackground,
}: NadaFaqsProps) {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper isBackground={isBackground}>
      <StackWrapper style={{ gap: '1rem' }}>
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

        <LinkText
          href={link}
          target="_blank"
          style={{ textDecoration: 'underline' }}
        >
          {linkText}
        </LinkText>
      </StackWrapper>
    </SectionWrapper>
  );
}

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
