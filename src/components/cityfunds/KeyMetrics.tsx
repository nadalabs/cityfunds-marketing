import { GreenSquare } from '@components/common/ImageStepper';
import { SectionWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

interface KeyMetricsProps {
  metrics: any[];
}

export default function KeyMetrics({ metrics }: KeyMetricsProps) {
  const isMobile = useIsMobile();
  const easingFn = function (t) {
    // Example: easeInOutCubic
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  return (
    <SectionWrapper>
      <FlexWrapper
        style={{
          justifyContent: 'space-between',
          flexWrap: metrics.length > 3 ? 'wrap' : 'nowrap',
        }}
      >
        {metrics?.map(({ label, value, formattingFn, decimals, prefix }) => (
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
                    style={{ fontSize: isMobile ? '4rem' : '6rem' }}
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
    </SectionWrapper>
  );
}

const FlexWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const CounterWrapper = styled.div`
  margin: 2rem 4rem;
`;

const LargeHeading = styled(Heading)`
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 1rem;
  }
`;
