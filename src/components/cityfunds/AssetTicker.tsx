import { Caption } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { formatPercent, formatPrice } from '@utils/helpers';
import Image from 'next/image';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BannerProps {
  sharePrice: number;
  appreciation: number;
  totalAssets: number;
}

export default function AssetTicker({
  sharePrice,
  appreciation,
  totalAssets,
}: BannerProps) {
  const isMobile = useIsMobile();

  const PILLS = [
    {
      number: formatPrice(sharePrice, 2),
      description: <Caption style={{ color: 'white' }}>/ Share</Caption>,
    },
    {
      number: formatPercent(appreciation, 2),
      description: (
        <Image
          src="/icons/arrow-up.svg"
          alt="Appreciation"
          width={16}
          height={16}
        />
      ),
    },
    {
      number: totalAssets,
      description: <Caption style={{ color: 'white' }}> Assets</Caption>,
    },
  ];

  const pills = isMobile ? PILLS.slice(0, 2) : PILLS;

  function renderPill(number: number, description: ReactNode, idx: number) {
    return (
      <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
        <BackgroundWrapper style={{ display: 'flex' }}>
          <BoldText>{number}</BoldText>
          {description}
        </BackgroundWrapper>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {pills.map(({ number, description }: any, idx) =>
        renderPill(number, description, idx)
      )}
    </div>
  );
}

export const BoldText = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: white;
  margin: 0 4px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.61038rem;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(2.4415206909179688px);
  padding: 0.25rem 0.5rem;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 0.5rem;
  }
`;
