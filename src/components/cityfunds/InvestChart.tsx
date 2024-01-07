import { SectionWrapper, ShaddowWrapper } from '@elements/Containers';
import { BoldText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { LineChart } from '@tremor/react';
import { shortenNumber } from '@utils/helpers';
import { useState } from 'react';

interface InvestChartProps {}

export default function InvestChart({}: InvestChartProps) {
  const [value, setValue] = useState(null);
  const isMobile = useIsMobile();

  const chartData = [
    { date: 'Yr 1', 'HEI Market Cap': 131818 },
    { date: 'Yr 2', 'HEI Market Cap': 142955 },
    { date: 'Yr 3', 'HEI Market Cap': 154648 },
    { date: 'Yr 4', 'HEI Market Cap': 166926 },
    { date: 'Yr 5', 'HEI Market Cap': 179817 },
    { date: 'Yr 6', 'HEI Market Cap': 193354 },
    { date: 'Yr 7', 'HEI Market Cap': 207567 },
    { date: 'Yr 8', 'HEI Market Cap': 222491 },
    { date: 'Yr 9', 'HEI Market Cap': 238161 },
    { date: 'Yr 10', 'HEI Market Cap': 254614 },
  ];

  return (
    <SectionWrapper
      style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
      isBackground
    >
      <ShaddowWrapper>
        <BoldText style={{ fontSize: '1rem', textAlign: 'center' }}>
          Home Equity Investments Asset Growth
        </BoldText>
        <LineChart
          className="h-72 mt-4"
          data={chartData}
          index="date"
          categories={['HEI Market Cap']}
          colors={['green', 'slate']}
          yAxisWidth={45}
          valueFormatter={(v) => `$${shortenNumber(v, 0)}`}
          onValueChange={(v) => setValue(v)}
          connectNulls
          showAnimation
        />
      </ShaddowWrapper>
    </SectionWrapper>
  );
}
