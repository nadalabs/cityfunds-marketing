import Image from 'next/image';
import { Heading, PrimaryText } from '../elements/Typography';
import { PrimaryButton } from '../elements/Buttons';
import { useState } from 'react';

export default function Testimonials({}) {
  const [active, setActive] = useState(0);
  const REVIEWS = [
    {
      name: 'Veronica S.',
      location: 'Austin, TX',
      text: 'Invested with Nada originally and have been waiting for Cityfund to release! Excited to see the how the company will grow in the next few years- love the vision!',
    },
  ];

  return (
    <div style={{ display: 'flex', padding: '92px 0' }}>
      <div style={{ width: '788px' }}>
        <Heading>{REVIEWS[active].text}</Heading>
      </div>

      <div style={{}}>
        <PrimaryText>{REVIEWS[active].name}</PrimaryText>
        <PrimaryText>{REVIEWS[active].location}</PrimaryText>
      </div>
    </div>
  );
}
