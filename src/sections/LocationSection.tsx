import { PrimaryButton } from '@elements/Buttons';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styled from 'styled-components';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function LocationSection({}) {
  const STATS = [
    { label: 'Total Investors', value: 7000, formattingFn: (val) => `${val}+` },
    {
      label: 'Total Invested',
      value: 1.8,
      decimals: 1,
      formattingFn: (val) => `$${val}M`,
    },
    { label: 'Properties Funded', value: 60, formattingFn: (val) => `${val}+` },
  ];

  return (
    <SectionWrapper>
      <ContentWrapper>
        <div style={{ position: 'relative', width: '100vw' }}>
          <Image alt={`Cover Image`} src={'/images/location.png'} fill={true} />
        </div>
        <div style={{ marginLeft: '80px' }}>
          <Overline>Why Cityfunds?</Overline>
          <Heading>Location, Location, Location</Heading>
          <PrimaryText>
            Investing in real estate is all about location, yet the increased
            cost of living have made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes.
          </PrimaryText>
          <PrimaryButton
            onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          >
            Get Started
          </PrimaryButton>
        </div>
      </ContentWrapper>

      <CounterWrapper>
        {STATS.map(({ label, value, formattingFn, decimals }) => (
          <div key={label}>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <CountUp
                end={value}
                enableScrollSpy
                scrollSpyDelay={100}
                formattingFn={formattingFn}
                decimals={decimals}
              >
                {({ countUpRef }) => (
                  // @ts-ignore-next-line
                  <Heading style={{ marginBottom: 0 }} ref={countUpRef} />
                )}
              </CountUp>
              <GreenSquare />
            </div>
            <PrimaryText>{label}</PrimaryText>
          </div>
        ))}
      </CounterWrapper>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 92px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-bottom: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
