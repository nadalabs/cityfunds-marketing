import { CityfundCard } from '@components/cityfunds/CityfundCard';
import { StackWrapper } from '@elements/Containers';
import {
  Heading,
  LargeText,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { FUND_TYPE, REGULATION } from '@utils/constants';
import { formatPercent, formatPrice, getTodaysDate } from '@utils/helpers';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface CityfundsCardsProps {
  cityfunds: ICityfund[];
  isHome?: boolean;
}

export default function CityfundsCards({
  cityfunds,
  isHome,
}: CityfundsCardsProps) {
  const isMobile = useIsMobile();

  const ALL_CARDS = cityfunds.map(({ fund_data, fund_content }) => ({
    name: fund_data?.fund_name,
    regulation: fund_data?.regulation,
    status: fund_data?.fund_status,
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
            <PrimaryText>As of {getTodaysDate()}</PrimaryText>
          </HeadingWrapper>
          <SmallHeading>{CITY_CARDS.length} Cityfunds</SmallHeading>
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
        {DISPLAYED_CARDS.map((card, idx) => (
          <CityfundCard key={idx} {...card} />
        ))}
      </div>
    </SectionWrapper>
  );
}

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
