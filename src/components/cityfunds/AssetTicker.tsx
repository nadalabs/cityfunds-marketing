import { Caption } from '@elements/Typography';
import { FUND_STATUS, FUND_TYPE, REGULATION } from '@utils/constants';
import { formatPercent, formatPrice } from '@utils/helpers';
import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface AssetTickerProps {
  fund_data: any;
  isDark?: boolean;
  isSmall?: boolean;
}

export default function AssetTicker({
  fund_data,
  isDark,
  isSmall,
}: AssetTickerProps) {
  const originalPrice =
    fund_data?.regulation === REGULATION.ACCREDITED ? 100 : 10;
  const appreciation =
    ((fund_data?.share_price - originalPrice) / originalPrice) * 100;

  const PILLS = [
    {
      number: formatPrice(fund_data?.share_price, 2),
      description: (
        <Caption style={{ color: isDark ? 'black' : 'white' }}>/ Share</Caption>
      ),
    },
    {
      number:
        fund_data?.fund_type === FUND_TYPE.DEBT
          ? `${formatPercent(fund_data?.target_return, 1)} APY`
          : appreciation
          ? formatPercent(appreciation, 1)
          : 'New',
      description: fund_data?.appreciation ? (
        <Image
          src="/icons/arrow-up.svg"
          alt="Arrow Up"
          width={12}
          height={12}
        />
      ) : (
        ''
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
    fund_data.fund_status === FUND_STATUS.NEW_OFFERING ||
    fund_data?.fund_type === FUND_TYPE.DEBT
      ? PILLS.slice(0, 2)
      : PILLS;

  function renderPill(number: number, description: ReactNode, idx: number) {
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
        <BoldText
          style={{
            color: isDark ? 'black' : 'white',
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
      {FILTERED_PILLS.map(({ number, description }: any, idx) =>
        renderPill(number, description, idx)
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
  padding: 0 0.25rem;
  margin: 0 0.25rem 0 0;
`;
