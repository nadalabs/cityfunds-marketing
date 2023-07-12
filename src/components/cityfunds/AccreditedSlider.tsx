import { PrimaryButton } from '@elements/Buttons';
import { SliderWrapper } from '@elements/Containers';
import { Heading, LargeText, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { formatPercent, formatPrice } from '@utils/helpers';
import { ICityfund } from '@utils/models';
import { useState } from 'react';
import { styled } from 'styled-components';
import NadaText from './NadaText';

interface AccreditedSliderProps {
  heading: string;
  primaryText?: string;
  overline?: string;
  cards: ICityfund[];
}

export default function AccreditedSlider({
  heading,
  primaryText,
  overline,
  cards,
}: AccreditedSliderProps) {
  const isMobile = useIsMobile();
  const [showCard, setShowCard] = useState<number>(0);

  const cardInfo = cards.map(({ name, cardImage, information }) => ({
    name,
    cardImage,
    cardFront: [
      { label: 'Type', value: information.fundType },
      { label: 'Strategy', value: information.strategy },
      { label: 'Appreciation', value: information.strategy },
    ],
    cardBack: [
      { label: 'Type', value: information.fundType },
      { label: 'Strategy', value: information.strategy },
      { label: 'Tax Form', value: information.taxForm },
      { label: 'Target IRR', value: `${formatPercent(information.targetIRR)}` },
      { label: 'Liquidity', value: information.liquidity },
      { label: 'Term', value: information.fundTerm },
      { label: 'Lock Up', value: information.lockupPeriod },
      {
        label: 'Min Investment',
        value: `${formatPrice(information.minInvestment)}`,
      },
      {
        label: 'Management Fee',
        value: `${formatPercent(information.managementFee)} AUM`,
      },
      { label: 'Fund Size', value: `${formatPrice(information.fundSize)}` },
    ],
  }));

  return (
    <SliderWrapper>
      <HeadingWrapper>
        {overline && <Overline>{overline}</Overline>}
        <Heading>{heading}</Heading>
        {primaryText && <LargeText>{primaryText}</LargeText>}
      </HeadingWrapper>

      <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'scroll' }}>
        {cardInfo?.map(({ name, cardImage, cardFront, cardBack }, idx) => (
          <div key={idx}>
            {showCard !== idx + 1 ? (
              <CardWrapper
                onMouseEnter={() => setShowCard(idx + 1)}
                onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
                style={{
                  justifyContent: 'flex-end',
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${cardImage}), lightgray 50% / cover no-repeat`,
                }}
              >
                <TickerWrapper>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <NadaText name={name} />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      {cardFront.map(({ label, value }) => (
                        <div>
                          <StatLabel>{label}</StatLabel>
                          <StatValue>{value}</StatValue>
                        </div>
                      ))}
                    </div>
                  </div>
                </TickerWrapper>
              </CardWrapper>
            ) : (
              <CardWrapper onMouseLeave={() => setShowCard(0)}>
                <NadaText name={name} />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {cardBack.map(({ label, value }) => (
                    <div style={{ width: '50%', marginBottom: '0.5rem' }}>
                      <StatLabel>{label}</StatLabel>
                      <StatValue>{value}</StatValue>
                    </div>
                  ))}
                </div>

                {idx === 0 || idx === 1 ? (
                  <PrimaryButton
                    isInverted
                    onClick={() =>
                      window.open(EXTERNAL_ROUTES.HUBSPOT_MEETING, '_blank')
                    }
                  >
                    Schedule a Call
                  </PrimaryButton>
                ) : (
                  <PrimaryButton
                    isInverted
                    onClick={() =>
                      window.open(EXTERNAL_ROUTES.WEB_APP, '_blank')
                    }
                  >
                    Invest Now
                  </PrimaryButton>
                )}
              </CardWrapper>
            )}
          </div>
        ))}
      </div>
    </SliderWrapper>
  );
}

export const CardWrapper = styled.div`
  transition: ${({ theme }) => theme.transitions.ease};
  background-color: ${({ theme }) => theme.colors.success};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  height: 38rem;
  padding: 2.5rem;
  border-radius: 3.125rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const TickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.3125rem;
  border-radius: 1.5625rem;
  background: rgba(0, 0, 0, 0.33);
  backdrop-filter: blur(2.5px);
`;

export const StatLabel = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.04638rem;
  text-transform: uppercase;
`;

export const StatValue = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 0.92775rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.04638rem;
  border-radius: 0.46388rem;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(1.8555556535720825px);
  display: inline;
  padding: 0.18556rem 0.37113rem;
  gap: 0.18556rem;
  margin-bottom: 1.25rem;
`;

export const PrimaryText = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export const HeadingWrapper = styled.div`
  max-width: 1100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
