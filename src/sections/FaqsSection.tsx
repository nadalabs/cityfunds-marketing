import { Heading, Overline, PrimaryText } from '@elements/Typography';
import { isMobileDevice } from '@utils/helpers';
import { useState } from 'react';
import styled from 'styled-components';

export default function FaqsSection({}) {
  const [active, setActive] = useState(0);
  const isMobile = isMobileDevice();

  const STATS = [
    {
      question: 'What is a Cityfund?',
      answer:
        'Cityfunds is the only investment platform which provides direct access to diversified portfolios of owner occupied homes in the nation’s top cities.',
    },
    {
      question: 'Who are Cityfunds for?',
      answer:
        "Built for people who want to join the exponential growth of the nation's top cities.",
    },
    {
      question: 'What makes Cityfunds different?',
      answer:
        'Investing in owner occupied homes gives better home values, faster appreciation, and low overhead since the owner is caring for their primary residence.',
    },
    {
      question: 'What am I investing in?',
      answer:
        'Fractional home equity investments across a top city. Earn equity in multiple homes on day one.',
    },
    {
      question: 'Will my money be tied up?',
      answer:
        "No! We have redemption programs in place for you. You're either thrilled about your portfolio growth or sell your shares to get your money back.",
    },
  ];

  return (
    <SectionWrapper>
      <Overline>You may also be wondering...</Overline>

      <div style={{ display: 'flex' }}>
        <div>
          {STATS.map(({ question }, idx) => (
            <>
              <Heading
                key={idx}
                onClick={() => setActive(idx)}
                style={{
                  color: idx === active && '#48DC95',
                  marginBottom: '28px',
                  cursor: 'pointer',
                }}
              >
                {question}
              </Heading>
              {isMobile && active === idx && (
                <PrimaryText>{STATS[active].answer}</PrimaryText>
              )}
            </>
          ))}
        </div>

        {!isMobile && (
          <PrimaryText style={{ maxWidth: '500px', marginLeft: '40px' }}>
            {STATS[active].answer}
          </PrimaryText>
        )}
      </div>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 92px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;
