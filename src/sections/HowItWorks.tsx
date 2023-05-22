import { PrimaryButton } from '@elements/Buttons';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function HowItWorks({}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % STEPS.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  const STEPS = [
    {
      title: 'Select a City',
      description: 'Choose from our 4 cityfunds with more coming soon',
    },
    {
      title: 'Invest Money',
      description: 'Connect your bank account and invest in homeshares',
    },
    {
      title: 'Build Wealth',
      description:
        'Grow your portfolio  while unlocking liquid equity for home owners',
    },
  ];

  return (
    <div style={{ display: 'flex', padding: '204px 0' }}>
      <div
        style={{
          height: '534px',
          minWidth: '534px',
          backgroundColor: '#48DC95',
          borderRadius: '120px',
          position: 'relative',
          top: '230px',
          zIndex: -1,
        }}
      />
      <Image
        width={350}
        height={700}
        alt={'Phone Screen'}
        src={'/images/phone-screen.png'}
        style={{ position: 'relative', right: '434px' }}
      />

      <div style={{ position: 'relative', right: '234px' }}>
        <Overline>Real Estate Investing Simplified</Overline>
        <Heading>How it Works</Heading>
        <Text>Join our community of thousands.</Text>

        <div style={{ display: 'flex', marginTop: '120px', width: '244px' }}>
          {STEPS.map(({ title, description }, idx) => (
            <div key={idx} style={{ marginRight: '32px' }}>
              <GreenSquare
                style={{
                  backgroundColor: idx !== active && '#979797',
                  marginBottom: '24px',
                }}
              />
              <PrimaryText
                style={{ color: idx === active && '#48DC95', fontWeight: 600 }}
              >
                {title}
              </PrimaryText>
              <Text>{description}</Text>
              {idx === active && (
                <PrimaryButton
                  onClick={() =>
                    window.location.replace(EXTERNAL_ROUTES.WEB_APP)
                  }
                >
                  Get Started
                </PrimaryButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const CardWrapper = styled.div``;
