import { SectionWrapper, ShaddowWrapper } from '@elements/Containers';
import { BoldText, Caption } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { LineChart } from '@tremor/react';
import { shortenNumber } from '@utils/helpers';
import { useState } from 'react';

interface InvestChartProps {}

export default function InvestChart({}: InvestChartProps) {
  const [value, setValue] = useState(null);
  const isMobile = useIsMobile();

  const chartData = [
    { date: 1990, 'Market Cap': 4678.072 },
    { date: 1991, 'Market Cap': 4618.251 },
    { date: 1992, 'Market Cap': 4686.825 },
    { date: 1993, 'Market Cap': 4815.917 },
    { date: 1994, 'Market Cap': 5052.9 },
    { date: 1995, 'Market Cap': 5223.277 },
    { date: 1996, 'Market Cap': 5212.356 },
    { date: 1997, 'Market Cap': 5383.115 },
    { date: 1998, 'Market Cap': 5690.18 },
    { date: 1999, 'Market Cap': 6252.661 },
    { date: 2000, 'Market Cap': 7093.867 },
    { date: 2001, 'Market Cap': 8636.375 },
    { date: 2002, 'Market Cap': 9565.413 },
    { date: 2003, 'Market Cap': 10285.94 },
    { date: 2004, 'Market Cap': 11344.292 },
    { date: 2005, 'Market Cap': 13045.018 },
    { date: 2006, 'Market Cap': 14135.093 },
    { date: 2007, 'Market Cap': 13722.854 },
    { date: 2008, 'Market Cap': 11861.578 },
    { date: 2009, 'Market Cap': 9790.285 },
    { date: 2010, 'Market Cap': 9003.907 },
    { date: 2011, 'Market Cap': 8538.199 },
    { date: 2012, 'Market Cap': 8219.632 },
    { date: 2013, 'Market Cap': 9454.484 },
    { date: 2014, 'Market Cap': 11186.635 },
    { date: 2015, 'Market Cap': 12621.196 },
    { date: 2016, 'Market Cap': 13978.31 },
    { date: 2017, 'Market Cap': 15612.64 },
    { date: 2018, 'Market Cap': 17403.94 },
    { date: 2019, 'Market Cap': 18649.532 },
    { date: 2020, 'Market Cap': 20016.249 },
    { date: 2021, 'Market Cap': 23292.89 },
    { date: 2022, 'Market Cap': 30478.983 },
    { date: 2023, 'Market Cap': 29792.12 },
  ];

  return (
    <SectionWrapper
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      isBackground
    >
      <ShaddowWrapper style={{ height: 'inherit' }}>
        <BoldText style={{ fontSize: '1rem', textAlign: 'center' }}>
          Home Equity Investments Asset Growth
        </BoldText>

        <LineChart
          className="h-72 mt-4"
          data={chartData}
          index="date"
          categories={['Market Cap']}
          colors={['green', 'slate']}
          yAxisWidth={50}
          valueFormatter={(v) => `$${shortenNumber(v * 100000000, 2)}`}
          onValueChange={(v) => setValue(v)}
          connectNulls
          showAnimation
        />
      </ShaddowWrapper>
      <Caption>
        *Souce: St. Louis Fed, Households; Owners' Equity in Real Estate, Level
        (billions of dollars, updated quarterly) as of January 1, 2024.
      </Caption>
    </SectionWrapper>
  );
}
