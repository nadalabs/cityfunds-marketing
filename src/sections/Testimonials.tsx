import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
} from '../elements/Typography';
import { useState } from 'react';

export default function Testimonials({}) {
  const [active, setActive] = useState(0);
  const REVIEWS = [
    {
      name: 'Veronica S.',
      location: 'Austin, TX',
      text: 'Invested with Nada originally and have been waiting for Cityfund to release! Excited to see the how the company will grow in the next few years- love the vision!',
    },
    {
      name: 'Veronica S.',
      location: 'Austin, TX',
      text: 'Invested with Nada originally and have been waiting for Cityfund to release! Excited to see the how the company will grow in the next few years- love the vision!',
    },
    {
      name: 'Veronica S.',
      location: 'Austin, TX',
      text: 'Invested with Nada originally and have been waiting for Cityfund to release! Excited to see the how the company will grow in the next few years- love the vision!',
    },
    {
      name: 'Veronica S.',
      location: 'Austin, TX',
      text: 'Invested with Nada originally and have been waiting for Cityfund to release! Excited to see the how the company will grow in the next few years- love the vision!',
    },
  ];

  return (
    <div style={{ padding: '92px 0' }}>
      <Overline>Hear it from our users...</Overline>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '788px', marginRight: '24px' }}>
          <Heading>"{REVIEWS[active].text}"</Heading>
          <div style={{ display: 'flex' }}>
            {REVIEWS.map((_, idx) => (
              <GreenSquare
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
            style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
          >
            {REVIEWS[active].name}
          </PrimaryText>
          <PrimaryText>{REVIEWS[active].location}</PrimaryText>
        </div>
      </div>
    </div>
  );
}
