import Image from 'next/image';
import { Heading1, Heading2 } from '../elements/Typography';
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
        <Heading1>{REVIEWS[active].text}</Heading1>
      </div>

      <div style={{}}>
        <Heading2>{REVIEWS[active].name}</Heading2>
        <Heading2>{REVIEWS[active].location}</Heading2>
      </div>
    </div>
  );
}
