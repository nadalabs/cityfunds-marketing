import { GreenSquare } from '@components/common/CarouselStepper';
import { Heading, PrimaryText } from '@elements/Typography';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

interface KeyMetricsProps {
  metrics: any[];
}

export default function KeyMetrics({ metrics }: KeyMetricsProps) {
  const easingFn = function (t) {
    // Example: easeInOutCubic
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  return (
    <FlexWrapper
      style={{
        justifyContent: metrics.length === 2 ? 'space-evenly' : 'space-between',
      }}
    >
      {metrics.map(({ label, value, formattingFn, decimals, prefix }) => (
        <CounterWrapper key={label}>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <CountUp
              end={value}
              enableScrollSpy
              scrollSpyDelay={100}
              formattingFn={formattingFn}
              decimals={decimals}
              prefix={prefix}
              // easingFn={easingFn}
              // duration={3}
            >
              {({ countUpRef }) => (
                <LargeHeading
                  // @ts-ignore-next-line
                  ref={countUpRef}
                  style={{ fontSize: '6rem' }}
                />
              )}
            </CountUp>
            <GreenSquare
              style={{ position: 'relative', bottom: '0.75rem', left: '8px' }}
            />
          </div>
          <PrimaryText>{label}</PrimaryText>
        </CounterWrapper>
      ))}
    </FlexWrapper>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const CounterWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 48px;
  }
`;

const LargeHeading = styled(Heading)`
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }
`;
