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

interface KeyMetricsProps {
  overline: string;
  heading: string;
  primaryText: string;
  metrics: any[];
}

export default function KeyMetrics({
  overline,
  heading,
  primaryText,
  metrics,
}: KeyMetricsProps) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <div style={{ position: 'relative', width: '100vw' }}>
          <Image alt={`Cover Image`} src={'/images/location.png'} fill={true} />
        </div>
        <div style={{ marginLeft: '80px' }}>
          <Overline>{overline}</Overline>
          <Heading>{heading}</Heading>
          <PrimaryText>{primaryText}</PrimaryText>
          <PrimaryButton
            onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          >
            Get Started
          </PrimaryButton>
        </div>
      </ContentWrapper>

      <CounterWrapper>
        {metrics.map(({ label, value, formattingFn, decimals }) => (
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
