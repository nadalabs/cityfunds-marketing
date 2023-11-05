import {
  FlexWrapper,
  SectionWrapper,
  ShaddowWrapper,
} from '@elements/Containers';
import { BoldText, PrimaryText, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { LineChart } from '@tremor/react';
import { formatPrice } from '@utils/helpers';
import { useState } from 'react';

interface InvestChartProps {}

export default function InvestChart({}: InvestChartProps) {
  const [value, setValue] = useState(null);
  const isMobile = useIsMobile();

  const chartData = [
    { date: 'Yr 1', 'HEI Value': 131818, 'Original Investment': 100000 },
    { date: 'Yr 2', 'HEI Value': 142955, 'Original Investment': 100000 },
    { date: 'Yr 3', 'HEI Value': 154648, 'Original Investment': 100000 },
    { date: 'Yr 4', 'HEI Value': 166926, 'Original Investment': 100000 },
    { date: 'Yr 5', 'HEI Value': 179817, 'Original Investment': 100000 },
    { date: 'Yr 6', 'HEI Value': 193354, 'Original Investment': 100000 },
    { date: 'Yr 7', 'HEI Value': 207567, 'Original Investment': 100000 },
    { date: 'Yr 8', 'HEI Value': 222491, 'Original Investment': 100000 },
    { date: 'Yr 9', 'HEI Value': 238161, 'Original Investment': 100000 },
    { date: 'Yr 10', 'HEI Value': 254614, 'Original Investment': 100000 },
  ];

  return (
    <SectionWrapper
      style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
    >
      <ShaddowWrapper>
        <BoldText style={{ fontSize: '1rem', textAlign: 'center' }}>
          Home Equity Investment Lifecycle
        </BoldText>
        <LineChart
          className="h-72 mt-4"
          data={chartData}
          index="date"
          categories={['HEI Value', 'Original Investment']}
          colors={['green', 'slate']}
          yAxisWidth={60}
          valueFormatter={(v) => `${formatPrice(v, 0)}`}
          onValueChange={(v) => setValue(v)}
          connectNulls
          showAnimation
        />
      </ShaddowWrapper>

      <FlexWrapper
        style={{ gap: '2.5rem', flexDirection: isMobile ? 'column' : 'row' }}
      >
        <ShaddowWrapper isShort>
          <SmallHeading style={{ marginBottom: '1rem' }}>Year 1</SmallHeading>
          <PrimaryText>
            The homeowner receives $100,000 in cash, and in exchange, we acquire
            approximately 30% equity ownership in the home's future
            appreciation. At this point, the home is valued at $700,000.
          </PrimaryText>
        </ShaddowWrapper>
        <ShaddowWrapper isShort>
          <SmallHeading style={{ marginBottom: '1rem' }}>Year 10</SmallHeading>
          <PrimaryText>
            The home's value has risen to $1,140,226. At this point, our equity
            share amounts to $254,614, while the homeowner's share stands at
            $885,612. The effective annual percentage rate (APR) for this
            investment arrangement is calculated at 9.80%.
          </PrimaryText>
        </ShaddowWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}
