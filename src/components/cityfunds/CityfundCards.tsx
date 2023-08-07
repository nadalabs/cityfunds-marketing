import { ReactComponent as LockIcon } from '@assets/icons/lock.svg';
import NadaText from '@components/common/NadaText';
import { useInvest } from '@contexts/InvestContext';
import { urlForImage, useSanity } from '@contexts/SanityContext';
import { StackWrapper } from '@elements/Containers';
import {
  Caption,
  Heading,
  LargeText,
  SmallHeading,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { formatPercent, formatPrice, getTodaysDate } from '@utils/helpers';
import { FUND_TYPE, REGULATION } from '@utils/models';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CityfundCardsProps {
  isHome?: boolean;
}

export default function CityfundCards({ isHome }: CityfundCardsProps) {
  const [cityfunds, setCityfunds] = useState<any[]>([]);
  const [showCard, setShowCard] = useState<number>(0);
  const { getAllFundsData } = useInvest();
  const { getAllFundsContent } = useSanity();
  const isMobile = useIsMobile();

  const fetchAllCityfunds = async () => {
    const fundsData = await getAllFundsData();
    const fundsContent = await getAllFundsContent();

    const cityfunds = fundsData.map((data) => {
      const content = fundsContent.find(
        (content) => content.fund_name === data.fund_name
      );
      return { fund_data: data, fund_content: content };
    });
    setCityfunds(cityfunds);
  };

  useEffect(() => {
    fetchAllCityfunds();
  }, []);

  const ALL_CARDS = cityfunds.map(({ fund_data, fund_content }) => ({
    name: fund_data?.fund_name,
    regulation: fund_data?.regulation,
    card_front: fund_content?.card_front,
    card_back: fund_content?.card_back,
    card_data:
      fund_data?.regulation === REGULATION.ACCREDITED
        ? [
            {
              label: 'Strategy',
              value:
                fund_data?.fund_type === FUND_TYPE.EQUITY ? 'Growth' : 'Income',
            },
            { label: 'Type', value: fund_data?.fund_type },
            { label: 'Target IRR', value: fund_data?.target_irr },
          ]
        : [
            {
              label: 'Share Price',
              value: formatPrice(fund_data?.share_price, 2),
            },
            {
              label: 'Appreciation',
              value: fund_data?.appreciation
                ? formatPercent(fund_data?.appreciation, 1)
                : 'New',
            },
            { label: 'Assets', value: fund_data?.total_assets },
          ],
  }));

  const CITY_CARDS = ALL_CARDS.filter(
    ({ regulation }) => regulation === REGULATION.RETAIL
  );
  const DISPLAYED_CARDS = isHome ? ALL_CARDS : CITY_CARDS;

  return (
    <SectionWrapper style={{ marginLeft: isHome && !isMobile ? '6.25rem' : 0 }}>
      {isHome ? (
        <StackWrapper style={{ gap: '0.5rem' }}>
          <Heading>Explore Offerings</Heading>
          <LargeText>
            Pick your favorite fund, or invest in all of them.
          </LargeText>
        </StackWrapper>
      ) : (
        <>
          <HeadingWrapper>
            <SmallHeading>Portfolio Assets</SmallHeading>
            <PrimaryText>Cityfunds is the only investment platform that provides direct access to diversified portfolios of owner-occupied homes in the nation’s top cities.</PrimaryText>
          </HeadingWrapper>
        </>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '1.5rem',
          overflowX: 'scroll',
        }}
      >
        {DISPLAYED_CARDS.map(
          ({ name, card_front, card_back, regulation, card_data }, idx) => (
            <div
              key={idx}
              // onClick={() => navigate(`/cityfunds/${name.toLowerCase()}`)}
            >
              {showCard !== idx + 1 ? (
                <CardWrapper
                  onMouseEnter={() => setShowCard(idx + 1)}
                  style={{
                    justifyContent:
                      regulation === REGULATION.ACCREDITED
                        ? 'space-between'
                        : 'flex-end',
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${urlForImage(
                      card_front,
                      576,
                      384
                    ).url()}), lightgray 50% / cover no-repeat`,
                  }}
                >
                  {regulation === REGULATION.ACCREDITED && (
                    <LockWrapper>
                      <LockIcon
                        style={{
                          height: '1rem',
                          width: '1rem',
                          marginRight: '0.5rem',
                        }}
                      />
                      <Caption style={{ color: 'white', fontWeight: 600 }}>
                        Accredited Only
                      </Caption>
                    </LockWrapper>
                  )}
                  <TickerWrapper>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <NadaText name={name} />

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        {card_data.map(({ label, value }, idx) => (
                          <div key={idx}>
                            <StatLabel>{label}</StatLabel>
                            <StatValue>{value}</StatValue>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TickerWrapper>
                </CardWrapper>
              ) : (
                <CardWrapper
                  onMouseLeave={() => setShowCard(0)}
                  style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${urlForImage(
                      card_back,
                      576,
                      384
                    ).url()}), lightgray 50% / cover no-repeat`,
                  }}
                >
                  <NadaText name={name} isDark />
                </CardWrapper>
              )}
            </div>
          )
        )}
      </div>
    </SectionWrapper>
  );
}

export const CardWrapper = styled.div`
  transition: ${({ theme }) => theme.transitions.ease};
  background-color: ${({ theme }) => theme.colors.success};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  height: 32rem;
  padding: 1.5rem 2.5rem;
  border-radius: 3.125rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const LockWrapper = styled.div`
  display: flex;
  border-radius: 0.4265rem;
  background: rgba(22, 22, 22, 0.33);
  backdrop-filter: blur(1.7px);
  padding: 0.17063rem 0.34125rem;
  text-transform: uppercase;
  width: fit-content;
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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
