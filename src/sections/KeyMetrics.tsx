import FeaturedImage from '@components/FeaturedImage';
import { SectionWrapper } from '@elements/Containers';
import { GreenSquare, Heading, PrimaryText } from '@elements/Typography';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

interface KeyMetricsProps {
  overline: string;
  heading: string;
  primaryText: string;
  imageUrl: string;
  metrics: any[];
}

export default function KeyMetrics({
  overline,
  heading,
  primaryText,
  imageUrl,
  metrics,
}: KeyMetricsProps) {
  const easingFn = function (t) {
    // Example: easeInOutCubic
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  return (
    <SectionWrapper>
      <FeaturedImage
        overline={overline}
        heading={heading}
        primaryText={primaryText}
        imageUrl={imageUrl}
      />

      <FlexWrapper>
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
                  <Heading
                    // @ts-ignore-next-line
                    ref={countUpRef}
                    style={{ fontSize: '75px' }}
                  />
                )}
              </CountUp>
              <GreenSquare />
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
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const CounterWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 48px;
  }
`;
