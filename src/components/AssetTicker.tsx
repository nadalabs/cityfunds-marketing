import { Caption, SecondaryText } from '@elements/Typography';
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
  const PILLS = [
    {
      number: formatPrice(sharePrice),
      description: <Caption style={{ color: 'white' }}>/ Share</Caption>,
    },
    {
      number: formatPercent(appreciation),
      description: (
        <Image
          src="/icons/arrow-up.svg"
          alt="Appreciation"
          width={18}
          height={18}
        />
      ),
    },
    {
      number: totalAssets,
      description: <Caption style={{ color: 'white' }}> Assets</Caption>,
    },
  ];

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
      {PILLS.map(({ number, description }: any, idx) =>
        renderPill(number, description, idx)
      )}
    </div>
  );
}

export const BoldText = styled(SecondaryText)`
  color: white;
  font-weight: 600;
  margin: 0 4px 0 0;
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.61038rem;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(2.4415206909179688px);
  padding: 4px 8px;
  margin-right: 8px;
`;
