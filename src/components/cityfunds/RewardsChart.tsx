'use client';

import InfoTooltip from '@components/common/InfoTooltip';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  FlexWrapper,
  GridWrapper,
  SectionWrapper,
  ShaddowWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Caption, Heading, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { BarChart } from '@tremor/react';
import { formatPercent, formatPrice, shortenNumber } from '@utils/helpers';
import { IFeature } from '@utils/models';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IRewardsChartProps {
  feature: IFeature;
  tooltips: any[];
}

export default function RewardsChart({
  feature,
  tooltips,
}: IRewardsChartProps) {
  const MINIMUM = 250;
  const MAXIMUM = 25000;
  const earningsLabel = 'Rewards';
  const period = 12;

  const [amount, setAmount] = useState(MINIMUM);
  const [earnings, setEarnings] = useState(1000);
  const [match, setMatch] = useState(5);
  const [chartData, setChartData] = useState([]);
  const isMobile = useIsMobile();

  const tier_one = [1, 3, 3, 4.5, 5, 5.5, 6, 6, 6, 6, 7, 7];
  const tier_two = [2, 4, 4, 6, 6, 8, 10, 10, 10, 10, 10, 10];

  useEffect(() => {
    let chartData = [];
    /* @ts-ignore-next-line */
    chartData = Array.from({ length: period }, (_, i) => {
      const tier = amount > 2500 ? tier_two : tier_one;
      const monthlyRewards = amount * (1 + tier[i] * 0.01) - amount;
      const name = `Mo ${i + 1}`;

      if (i === period - 1) setEarnings(monthlyRewards + amount);

      return {
        name,
        Rewards: monthlyRewards ? monthlyRewards : 0,
        Investment: amount,
      };
    });
    setChartData(chartData);
  }, [amount, match, period]);

  useEffect(() => {
    if (amount > 2500) {
      setMatch(7.5);
    } else {
      setMatch(5);
    }
  }, [amount]);

  function formatTooltip(attribute) {
    const tooltip = tooltips?.filter(
      (tooltip) => tooltip?.attribute === attribute
    )[0];
    return {
      label: tooltip?.title,
      description: tooltip?.description,
    };
  }

  const TOOLTIPS = {
    total_rewards: formatTooltip('recurring_rewards'),
    investment_amount: formatTooltip('recurring_investment'),
    program_match: formatTooltip('recurring_match'),
    program_length: formatTooltip('recurring_length'),
  };

  const SLIDERS = [
    {
      label: formatPrice(earnings, 0),
      value: amount,
      tooltip: TOOLTIPS.total_rewards,
    },
    {
      label: formatPrice(amount, 0),
      value: amount,
      tooltip: TOOLTIPS.investment_amount,
      minimum: MINIMUM,
      maximum: MAXIMUM,
      step: 100,
      onChange: (e) => setAmount(Number(e.target.value)),
      formatFn: (val) => `$${shortenNumber(val, 0)}`,
    },
    {
      label: formatPercent(match, 1),
      value: match,
      tooltip: TOOLTIPS.program_match,
    },
    {
      label: `${period} Months`,
      value: period,
      tooltip: TOOLTIPS.program_length,
    },
  ];

  return (
    <SectionWrapper>
      <StackWrapper>
        <Heading style={{ width: '100%' }}>{feature?.title}</Heading>
        <LongFormText content={feature?.description} isLarge={false} />
        <GridWrapper
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${
              isMobile ? '9rem' : '2rem'
            }, 1fr))`,
            gap: '1rem',
            alignItems: 'stretch',
          }}
        >
          {SLIDERS.map(
            (
              {
                label,
                value,
                minimum,
                maximum,
                step,
                tooltip,
                onChange,
                formatFn,
              },
              idx
            ) => (
              <BorderShaddow key={idx}>
                <div>
                  <SmallHeading style={{ color: idx ? '#303030' : '#2A8356' }}>
                    {label}
                  </SmallHeading>
                  <InfoTooltip
                    label={tooltip.label}
                    description={tooltip.description}
                  />
                  {onChange && (
                    <>
                      <SliderInput
                        type="range"
                        min={minimum}
                        max={maximum}
                        step={step}
                        value={value}
                        onChange={onChange}
                        style={
                          {
                            '--min': minimum,
                            '--max': maximum,
                            '--value': value,
                          } as React.CSSProperties
                        }
                      />
                      {formatFn && (
                        <FlexWrapper>
                          <SliderText>{formatFn(minimum)}</SliderText>
                          <SliderText>{formatFn(maximum)}</SliderText>
                        </FlexWrapper>
                      )}
                    </>
                  )}
                </div>

                {!idx && (
                  <PrimaryButton
                    style={{ marginTop: '0.5rem' }}
                    onClick={() =>
                      window.open(process.env.NEXT_PUBLIC_WEB_APP_URL, '_blank')
                    }
                  >
                    Invest Now
                  </PrimaryButton>
                )}
              </BorderShaddow>
            )
          )}
        </GridWrapper>
        <ShaddowWrapper style={{ height: '100%' }}>
          <BarChart
            className="mt-6"
            data={chartData}
            index="name"
            categories={[earningsLabel]}
            colors={['emerald']}
            valueFormatter={(val) =>
              `$${shortenNumber(val, val > 1000 ? 1 : 0)}`
            }
            yAxisWidth={50}
            showAnimation
            stack
          />
        </ShaddowWrapper>
      </StackWrapper>
    </SectionWrapper>
  );
}

export const SliderText = styled(Caption)`
  font-size: 0.6875rem;
  color: #6b7280;
`;

export const SliderInput = styled.input`
  appearance: none;
  width: 100%;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &::-webkit-slider-runnable-track {
    border-radius: 1rem;
    height: 0.6rem;
    background: linear-gradient(
      to right,
      #48dc95 0%,
      calc((var(--value) - var(--min)) / (var(--max) - var(--min)) * 100%),
      #989b9f
        calc((var(--value) - var(--min)) / (var(--max) - var(--min)) * 100%),
      #989b9f 100%
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    background: #48dc95;
    cursor: pointer;
    position: relative;
    bottom: 0.2rem;
  }
`;

export const BorderShaddow = styled(ShaddowWrapper)`
  padding: 1rem;
  border-radius: 1rem;
  height: inherit;
`;
