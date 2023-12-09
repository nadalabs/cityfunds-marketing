import { Caption } from '@elements/Typography';
import { FUND_TYPE, REGULATION } from '@utils/constants';
import { formatPercent, formatPrice } from '@utils/helpers';
import { IFundData } from '@utils/models';
import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface CityfundTickerProps {
  fund_data: IFundData;
  isDark?: boolean;
  isSmall?: boolean;
}

export default function CityfundTicker({
  fund_data,
  isDark,
  isSmall,
}: CityfundTickerProps) {
  const originalPrice =
    fund_data?.regulation === REGULATION.ACCREDITED ? 100 : 10;
  const appreciation =
    ((fund_data?.share_price - originalPrice) / originalPrice) * 100;

  const PILLS = [
    {
      number: formatPrice(fund_data?.share_price, 2),
      description: (
        <Caption
          style={{ fontSize: '0.6rem', color: isDark ? 'black' : 'white' }}
        >
          {' / share'}
        </Caption>
      ),
    },
    {
      number:
        fund_data?.fund_type === FUND_TYPE.DEBT
          ? `${formatPercent(fund_data?.target_return, 1)} APY`
          : appreciation
          ? formatPercent(appreciation, 1)
          : 'New',
      icon: appreciation ? (
        <Image
          src="/icons/gain.svg"
          alt="Appreciation"
          style={{ marginRight: '0.25rem' }}
          width={12}
          height={12}
        />
      ) : (
        <Image src="/icons/flash.svg" alt="New" width={14} height={14} />
      ),
    },
    {
      number: fund_data?.total_assets,
      description: (
        <Caption style={{ color: isDark ? 'black' : 'white' }}>
          {fund_data?.total_assets === 1 ? 'Asset' : 'Assets'}
        </Caption>
      ),
    },
  ];
  const FILTERED_PILLS =
    fund_data?.total_assets === 0 || fund_data?.fund_type === FUND_TYPE.DEBT
      ? PILLS.slice(0, 2)
      : PILLS;

  function renderPill(
    number: number,
    icon: ReactNode,
    description: ReactNode,
    idx: number
  ) {
    return (
      <BackgroundWrapper
        key={idx}
        style={{
          fontSize: isSmall ? '0.875rem' : '1rem',
          background: isDark
            ? 'rgba(136, 136, 136, 0.05)'
            : 'rgba(255, 255, 255, 0.35)',
        }}
      >
        {icon}
        <BoldText
          style={{
            color: isDark ? 'black' : 'white',
            lineHeight: '100%',
          }}
        >
          {number}
        </BoldText>
        {description}
      </BackgroundWrapper>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {FILTERED_PILLS.map(({ number, icon, description }: any, idx) =>
        renderPill(number, icon, description, idx)
      )}
    </div>
  );
}

export const BoldText = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 0.875;
  line-height: 30px;
  margin: 0 4px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.61038rem;
  backdrop-filter: blur(1.85px);
  padding: 0rem 0.25rem;
  margin: 0 0.25rem 0 0;
  height: 1.5rem;
`;
