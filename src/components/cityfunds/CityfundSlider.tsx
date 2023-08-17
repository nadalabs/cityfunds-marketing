import { CityfundCard } from '@components/cityfunds/CityfundCard';
import { StackWrapper } from '@elements/Containers';
import {
  Heading,
  LargeText,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { FUND_STATUS, FUND_TYPE, REGULATION } from '@utils/constants';
import { formatPercent, formatPrice, getTodaysDate } from '@utils/helpers';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface CityfundSliderProps {
  cityfunds: ICityfund[];
  isHome?: boolean;
}

export default function CityfundSlider({
  cityfunds,
  isHome,
}: CityfundSliderProps) {
  const isMobile = useIsMobile();

  const ALL_CARDS = cityfunds.map(({ fund_data, fund_content }) => ({
    fund_data,
    fund_content,
    images: [fund_content?.card_front, fund_content?.card_back],
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
        : fund_data?.fund_status === FUND_STATUS.ACTIVE
        ? [
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
          ],
  }));

  const SORTED_CARDS = ALL_CARDS.sort((a, b) => {
    if (a.fund_data.fund_name === 'Yield') {
      return 1;
    }
    if (b.fund_data.fund_name === 'Yield') {
      return -1;
    }
    if (
      a.fund_data.fund_name === 'Portfolio' &&
      b.fund_data.fund_name !== 'Portfolio'
    )
      return -1;
    if (
      a.fund_data.fund_name !== 'Portfolio' &&
      b.fund_data.fund_name === 'Portfolio'
    )
      return 1;
    if (
      a.fund_data.fund_status === FUND_STATUS.ACTIVE &&
      b.fund_data.fund_status === FUND_STATUS.PRESALE
    )
      return -1;
    if (
      a.fund_data.fund_status === FUND_STATUS.PRESALE &&
      b.fund_data.fund_status === FUND_STATUS.ACTIVE
    )
      return 1;
    if (
      a.fund_data.fund_status === FUND_STATUS.ACTIVE &&
      b.fund_data.fund_status === FUND_STATUS.ACTIVE
    ) {
      return b.fund_data.appreciation - a.fund_data.appreciation;
    }
    return 0;
  });

  const AUTH_CARDS = SORTED_CARDS.filter(
        ({ fund_data }) => fund_data?.fund_status === FUND_STATUS.ACTIVE
      );
  const CITY_CARDS = AUTH_CARDS.filter(
    ({ fund_data }) => fund_data?.regulation === REGULATION.RETAIL
  );
  const DISPLAYED_CARDS = isHome ? AUTH_CARDS : CITY_CARDS;

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
            <PrimaryText>As of {getTodaysDate()}</PrimaryText>
          </HeadingWrapper>
          <SmallHeading>{CITY_CARDS.length} Cityfunds</SmallHeading>
        </>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile && isHome ? 'column' : 'row',
          gap: '1.5rem',
          paddingRight: isMobile || !isHome ? 0 : '6.5rem',
          overflowX: 'scroll',
        }}
      >
        {DISPLAYED_CARDS.map((card, idx) => (
          <FadeWrapper key={idx}>
            <TopWrapper>
              <CityfundCard {...card} image={card?.images[0]} isHome={isHome} />
            </TopWrapper>
            <BottomWrapper>
              <CityfundCard {...card} image={card?.images[1]} isHome={isHome} />
            </BottomWrapper>
          </FadeWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}

const FadeWrapper = styled.div`
  width: 24rem;
  height: 32rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 20rem;
  }
`;

const TopWrapper = styled.div`
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0;
  }
`;

const BottomWrapper = styled.div`
  position: relative;
  bottom: 32rem;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 20rem;
  }
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
