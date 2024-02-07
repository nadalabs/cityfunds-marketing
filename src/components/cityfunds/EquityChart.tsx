'use client';
import {
  GridWrapper,
  SectionWrapper,
  ShaddowWrapper,
} from '@elements/Containers';
import { Caption, PrimaryText, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { AreaChart } from '@tremor/react';
import { shortenNumber } from '@utils/helpers';
import { useState } from 'react';

export default function EquityChart() {
  const [value, setValue] = useState(null);
  const isMobile = useIsMobile();

  const chartData = [
    { date: 2013, 'Homeowner Equity': 10497 },
    { date: 2014, 'Homeowner Equity': 12015 },
    { date: 2015, 'Homeowner Equity': 13425 },
    { date: 2016, 'Homeowner Equity': 14894 },
    { date: 2017, 'Homeowner Equity': 16491 },
    { date: 2018, 'Homeowner Equity': 17976 },
    { date: 2019, 'Homeowner Equity': 19137 },
    { date: 2020, 'Homeowner Equity': 21295 },
    { date: 2021, 'Homeowner Equity': 26505 },
    { date: 2022, 'Homeowner Equity': 30985 },
    { date: 2023, 'Homeowner Equity': 32618 },
  ];

  return (
    <SectionWrapper $isBackground>
      <GridWrapper
        style={{
          display: isMobile ? 'flex' : 'grid',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          gridTemplateColumns: isMobile ? '1fr' : '2.5fr 1fr',
          gap: '1rem',
        }}
      >
        <ShaddowWrapper>
          <AreaChart
            className="h-72 mt-4"
            data={chartData}
            index="date"
            categories={['Homeowner Equity']}
            colors={['green']}
            yAxisWidth={50}
            valueFormatter={(v) => `$${shortenNumber(v * 1000000000, 1)}`}
            onValueChange={(v) => setValue(v)}
            connectNulls
            showAnimation
          />
        </ShaddowWrapper>

        <ShaddowWrapper>
          <SmallHeading style={{ marginBottom: '1rem' }}>
            $32.6 Trillion Home Equity Market Value
          </SmallHeading>
          <PrimaryText>
            Since 2013 the Overall Homeowner Equity Market has grown by 211%,
            growing from $10.5 Trillion in 2013 to an incredible $32.6 Trillion
            today. For the first time ever, Cityfunds has made this asset class
            investible for individuals.
          </PrimaryText>
        </ShaddowWrapper>
      </GridWrapper>

      <Caption style={{ marginTop: '1rem' }}>
        *Souce: St. Louis Fed, Households; Owners' Equity in Real Estate, Level
        (billions of dollars, updated quarterly) as of January 1, 2024.
      </Caption>
    </SectionWrapper>
  );
}
