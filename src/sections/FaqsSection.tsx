import { Heading, Overline, PrimaryText } from '@elements/Typography';
import { useState } from 'react';

export default function FaqsSection({}) {
  const [active, setActive] = useState(0);
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
    <div style={{ padding: '92px 0' }}>
      <Overline>You may also be wondering...</Overline>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '60%', marginRight: '40px' }}>
          {STATS.map(({ question }, idx) => (
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
          ))}
        </div>
        <div style={{ width: '40%' }}>
          <PrimaryText>{STATS[active].answer}</PrimaryText>
        </div>
      </div>
    </div>
  );
}
