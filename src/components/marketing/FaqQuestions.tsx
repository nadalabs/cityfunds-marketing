'use client';
import LongFormText from '@components/common/LongFormText';
import {
  FadeWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, LinkText, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { useState } from 'react';
import styled from 'styled-components';

interface FaqQuestionsProps {
  faqs: { question: string; answer: string }[];
  link: string;
  linkText?: string;
  isBackground?: boolean;
}

export default function FaqQuestions({
  faqs,
  link,
  linkText,
  isBackground,
}: FaqQuestionsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const isMobile = useIsMobile();

  return (
    <SectionWrapper isBackground={isBackground}>
      <StackWrapper style={{ gap: '1rem' }}>
        <Overline>Frequently Asked Questions</Overline>

        {faqs?.map(({ question, answer }, idx) => (
          <ContentWrapper key={idx}>
            <HoverHeading
              onClick={() => setActiveIdx(idx)}
              isActive={activeIdx === idx}
            >
              {question}
            </HoverHeading>
            <FadeWrapper
              isActive={activeIdx === idx}
              style={{ maxWidth: isMobile ? '100%' : '45%' }}
            >
              <LongFormText content={answer} />
            </FadeWrapper>
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

export const HoverHeading = styled(Heading)<{ isActive?: boolean }>`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.black};
  margin-bottom: 1rem;
  cursor: pointer;
  width: 50%;
  font-size: 3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;
