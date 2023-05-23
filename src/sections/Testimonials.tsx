import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
} from '@elements/Typography';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Testimonials({}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % REVIEWS.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  const REVIEWS = [
    {
      name: 'Veronica S.',
      location: 'Austin, TX',
      text: 'Invested with Nada originally and have been waiting for Cityfund to release! Excited to see the how the company will grow in the next few years- love the vision!',
    },
    {
      name: 'Ryan A.',
      location: 'Dallas, TX',
      text: 'To be part of a collective of investors in a steady growth market like Miami is definitely an advantage.',
    },
    {
      name: 'William B.',
      location: 'Miami, FL',
      text: 'I’ve always wanted to try and dip my toes in real estate investing! This looks like a good way to get started and from cities around the county. Super excited',
    },
    {
      name: 'Hansen N.',
      location: 'Miami, FL',
      text: 'Love the city, and love the process of investing in real estate.',
    },
    {
      name: 'Mylie A.',
      location: 'Austin, TX',
      text: 'I like that it makes real estate investment possible to everyday people.',
    },
    {
      name: 'Mark P.',
      location: 'Dallas, TX',
      text: 'Excited to easily invest in a diversified pool of RE. Looking for income & cap gains as a hedge to public markets.',
    },
  ];

  return (
    <SectionWrapper>
      <Overline>Hear it from our users...</Overline>
      <ContentWrapper>
        <div style={{ maxWidth: '788px', marginRight: '24px' }}>
          <Heading>"{REVIEWS[active].text}"</Heading>
          <div style={{ display: 'flex' }}>
            {REVIEWS.map((_, idx) => (
              <GreenSquare
                key={idx}
                style={{
                  backgroundColor: idx !== active && 'rgba(2, 1, 1, 0.05)',
                  marginRight: '8px',
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <PrimaryText
            style={{ color: '#48DC95', fontWeight: 600, marginBottom: 0 }}
          >
            {REVIEWS[active].name}
          </PrimaryText>
          <PrimaryText style={{ color: 'black' }}>
            {REVIEWS[active].location}
          </PrimaryText>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 92px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;