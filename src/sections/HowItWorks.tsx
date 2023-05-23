import { PrimaryButton } from '@elements/Buttons';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { isMobileDevice } from '@utils/helpers';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function HowItWorks({}) {
  const [active, setActive] = useState(0);
  const isMobile = isMobileDevice();

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
    <SectionWrapper>
      {/* <div
        style={{
          height: '534px',
          minWidth: '534px',
          backgroundColor: '#48DC95',
          borderRadius: '120px',
          position: 'relative',
          top: '230px',
          zIndex: -1,
        }}
      /> */}
      {!isMobile && (
        <Image
          width={350}
          height={700}
          alt={'Phone Screen'}
          src={'/images/phone-screen.png'}
        />
      )}

      <div style={{ marginLeft: '98px' }}>
        <Overline>Real Estate Investing Simplified</Overline>
        <Heading>How it Works</Heading>

        <div style={{ display: 'flex', marginTop: '80px' }}>
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
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 204px 156px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;
