import { Caption, SecondaryText } from '@elements/Typography';
import Image from 'next/image';
import { styled } from 'styled-components';

interface BannerProps {
  totalAssets: number;
  appreciation: number;
}

export default function AssetTicker({
  totalAssets,
  appreciation,
}: BannerProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <BackgroundWrapper>
        <BoldText>{appreciation}%</BoldText>
        <Image
          width={18}
          height={18}
          alt={'Arrow Up'}
          src={'/icons/arrow.svg'}
        />
      </BackgroundWrapper>

      <BackgroundWrapper style={{ display: 'flex', alignItems: 'flex-end' }}>
        <BoldText>{totalAssets}</BoldText>
        <Caption style={{ color: 'white', marginBottom: '2px' }}>
          Assets
        </Caption>
      </BackgroundWrapper>
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
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(2.5px);
  border-radius: 10px;
  padding: 4px 8px;
  margin-right: 8px;
`;
