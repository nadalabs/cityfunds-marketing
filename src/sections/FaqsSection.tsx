import { Heading, PrimaryText } from '../elements/Typography';
import { useState } from 'react';

export default function FaqsSection({}) {
  const [active, setActive] = useState(0);
  const STATS = [
    {
      question: 'What is a Cityfund?',
      answer:
        "No! We have redemption programs in place for you. You're either thrilled about your portfolio growth or sell your shares to get your money back.",
    },
    { question: 'Who are Cityfunds for?', answer: '' },
    { question: 'What makes Cityfunds different?', answer: '' },
    { question: 'Will my money be tied up?', answer: '' },
  ];

  return (
    <div style={{ display: 'flex', padding: '92px 0' }}>
      <div style={{ width: '60%' }}>
        {STATS.map(({ question }, idx) => (
          <Heading key={idx} onClick={() => setActive(idx)}>
            {question}
          </Heading>
        ))}
      </div>

      <div style={{ width: '40%' }}>
        <PrimaryText>{STATS[active].answer}</PrimaryText>
      </div>
    </div>
  );
}
