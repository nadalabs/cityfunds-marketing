import {
  FlexWrapper,
  SectionWrapper,
  ShaddowWrapper,
} from '@elements/Containers';
import { PrimaryText, SmallHeading } from '@elements/Typography';
import { LineChart } from '@tremor/react';
import { useState } from 'react';

interface InvestChartProps {}

export default function InvestChart({}: InvestChartProps) {
  const [value, setValue] = useState(null);

  const chartData = [
    { date: 'Yr 1', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 2', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 3', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 4', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 5', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 6', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 7', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 8', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 9', 'Initial Investment': 100000, 'HEI Value': 131818 },
    { date: 'Yr 10', 'Initial Investment': 100000, 'HEI Value': 131818 },
  ];

  return (
    <SectionWrapper
      style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
    >
      <ShaddowWrapper>
        <LineChart
          className="h-72 mt-4"
          data={chartData}
          index="date"
          categories={['Initial Investment', 'HEI Value']}
          colors={['green', 'slate']}
          yAxisWidth={30}
          valueFormatter={(v) => `$${v}`}
          onValueChange={(v) => setValue(v)}
          connectNulls
          showAnimation
        />
      </ShaddowWrapper>

      <FlexWrapper style={{ gap: '2.5rem' }}>
        <ShaddowWrapper isShort>
          <SmallHeading>Year 1</SmallHeading>
          <PrimaryText>
            The homeowner receives $100,000 in cash, and in exchange, we acquire
            approximately 30% equity ownership in the home's future
            appreciation. At this point, the home is valued at $700,000.
          </PrimaryText>
        </ShaddowWrapper>
        <ShaddowWrapper isShort>
          <SmallHeading>Year 1</SmallHeading>
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
